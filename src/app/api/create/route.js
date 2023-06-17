import { NextResponse } from "next/server";
import { db } from "../../lib/db/db";

export async function POST(request) {
  const data = await request.json();
  const result = await db.create(data);
  return NextResponse.json({ result });
}
