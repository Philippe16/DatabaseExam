import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/mysql/config";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const db = await pool.getConnection();
    const query = "SELECT * FROM skins";
    const [rows] = await db.query(query);
    db.release();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
