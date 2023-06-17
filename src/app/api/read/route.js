import { NextResponse } from "next/server";
import { db } from "../../lib/db/db";

export async function GET(request) {
  try {
    const page = new URL(request.url).searchParams.get("page");
    const result = await db.read({ page });
    // console.log({ result });
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error:
        "An error occurred while processing your request for read. Please try again later.",
    });
  }
}
