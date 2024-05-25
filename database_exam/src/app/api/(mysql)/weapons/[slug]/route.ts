import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/mysql/config";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  try {
    const db = await pool.getConnection();

    const query = "select * from weapon where id = ?";
    const [rows] = await db.execute(query, [slug]);
    db.release();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
