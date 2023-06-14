import { NextResponse } from "next/server";
import { db } from "../../lib/db/db";

export async function DELETE(request) {
  const data = await request.json();
  const result = await db.delete(data);
  return NextResponse.json({ result });
}
