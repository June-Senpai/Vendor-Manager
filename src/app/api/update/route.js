import { NextResponse } from "next/server";
import { db } from "../../lib/db/db";

export async function POST(request) {
  try {
    const data = await request.json();
    const result = await db.update(data);
    // console.log({ data });
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error:
        "An error occurred while processing your request for update. Please try again later.",
    });
  }
}
