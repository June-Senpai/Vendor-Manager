import { NextResponse } from "next/server";
import { db } from "../../lib/db/db";

export async function GET(request) {
  const page = new URL(request.url).searchParams.get("page");
  const result = await db.read({ page });
  // console.log({ result });
  return NextResponse.json({ result });
}
