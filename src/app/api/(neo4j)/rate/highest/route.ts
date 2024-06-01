import driver from "@/lib/neo4j/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const session = driver.session({ database: "neo4j" });

  try {
    const result = await session.run(`
      MATCH (s:Skin)
      WHERE s.totalRatings > 0
      RETURN s
      ORDER BY s.rating DESC
      LIMIT 5
    `);

    const skins = result.records.map((record) => {
      const skin = record.get("s").properties;
      return {
        id: skin.id.low,
        name: skin.name,
        src: skin.src,
        price: skin.price,
        weapon_id: skin.weapon_id.low,
        rating: skin.rating,
        totalRatings: skin.totalRatings.low,
      };
    });

    return NextResponse.json(skins);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error fetching bottom-rated skins",
    });
  } finally {
    await session.close();
  }
}
