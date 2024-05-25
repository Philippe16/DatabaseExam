import { NextRequest, NextResponse } from "next/server";
import { getUsers } from "../../../lib/mongodb/queries";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const users = await getUsers();
  return NextResponse.json(users);
}
