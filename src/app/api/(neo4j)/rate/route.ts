import driver from "@/lib/neo4j/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { skin, rating } = await req.json();
  const { id, name, src, price, weapon_id } = skin;
  const session = driver.session({ database: "neo4j" });

  try {
    const result = await session.run(
      `
      MERGE (s:Skin {id: $id})
      ON MATCH SET 
        s.rating = ((s.rating * s.totalRatings + $rating) / (s.totalRatings + 1.0)),
        s.totalRatings = s.totalRatings + 1
      RETURN s
      `,
      { id, name, src, price, weapon_id, rating }
    );

    const updatedSkin = result.records[0].get("s").properties;

    // Convert Neo4j Integer properties to standard JS numbers
    updatedSkin.rating = updatedSkin.rating.low;
    updatedSkin.totalRatings = updatedSkin.totalRatings.low;

    return NextResponse.json({
      message: "Skin created or found and rated successfully",
      skin: updatedSkin,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error creating or rating skin",
    });
  } finally {
    await session.close();
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const session = driver.session({ database: "neo4j" });

  try {
    const result = await session.run(
      "MATCH (s:Skin) RETURN s ORDER BY s.id ASC"
    );

    const skins = result.records.map((record) => {
      const skin = record.get("s").properties;
      return {
        id: skin.id.low,
        name: skin.name,
        src: skin.src,
        price: skin.price,
        weapon_id: skin.weapon_id,
        rating: skin.rating,
        totalRatings: skin.totalRatings.low,
      };
    });

    return NextResponse.json(skins);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error fetching skins",
    });
  } finally {
    await session.close();
  }
}
