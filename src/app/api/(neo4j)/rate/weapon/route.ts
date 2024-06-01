import driver from "@/lib/neo4j/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const session = driver.session({ database: "neo4j" });

  try {
    const result = await session.run(`
    MATCH (w:Weapon)<-[:BELONGS_TO]-(s:Skin)
    WHERE s.totalRatings > 0
    WITH w, avg(toFloat(s.rating)) AS averageRating, count(s) AS totalRatings
    ORDER BY averageRating DESC
    LIMIT 5
    RETURN w, averageRating, totalRatings
  `);

    const weapons = result.records.map((record) => {
      const weapon = record.get("w").properties;
      return {
        id: weapon.id.low,
        name: weapon.name,
        type: weapon.type,
        src: weapon.src,
        description: weapon.description,
        rating: record.get("averageRating"),
        totalRatings: record.get("totalRatings").low,
      };
    });

    return NextResponse.json(weapons);
  } catch (error) {
    console.error("Error fetching top-rated weapons:", error);
    return NextResponse.json(
      {
        message: "Error fetching top-rated weapons",
      },
      { status: 500 }
    );
  } finally {
    await session.close();
  }
}
