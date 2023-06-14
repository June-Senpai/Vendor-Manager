import { NextResponse } from "next/server";
import { db } from "../../lib/db/db";

export async function PUT(request) {
  const data = await request.json();
  const result = await db.update(data);
  return NextResponse.json({ result });
}
