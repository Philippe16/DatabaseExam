import driver from "@/lib/neo4j/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const session = driver.session({ database: "neo4j" });

  try {
    // Check if the graph exists and drop it if it does
    const checkResult = await session.run(`
      CALL gds.graph.exists('csgoGraph') YIELD exists
      RETURN exists
    `);

    const graphExists = checkResult.records[0].get("exists");
    if (graphExists) {
      await session.run(`
        CALL gds.graph.drop('csgoGraph') YIELD graphName
      `);
    }

    // Create a Graph Projection
    await session.run(`
      CALL gds.graph.project(
        'csgoGraph',
        ['Weapon', 'Skin'],
        {
          BELONGS_TO: {
            orientation: 'UNDIRECTED'
          }
        }
      );
    `);

    // Run the Node Similarity Algorithm
    const result = await session.run(`
      CALL gds.nodeSimilarity.stream('csgoGraph')
      YIELD node1, node2, similarity
      WITH gds.util.asNode(node1) AS skin1, gds.util.asNode(node2) AS skin2, similarity
      RETURN skin1.name AS Skin1, skin1.src AS Src1, skin2.name AS Skin2, skin2.src AS Src2, similarity
      ORDER BY similarity DESC
      LIMIT 10;
    `);

    const similarities = result.records.map((record) => ({
      skin1: {
        name: record.get("Skin1"),
        src: record.get("Src1"),
      },
      skin2: {
        name: record.get("Skin2"),
        src: record.get("Src2"),
      },
      similarity: record.get("similarity"),
    }));

    return NextResponse.json(similarities);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error running node similarity algorithm",
    });
  } finally {
    await session.close();
  }
}
