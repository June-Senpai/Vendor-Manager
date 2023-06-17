import { NextResponse } from "next/server";
import { db } from "../../lib/db/db";

export async function DELETE(request) {
  try {
    const id = new URL(request.url).searchParams.get("id");
    const result = await db.delete({ id });
    const isSuccess = result._id.toString() === id;
    // console.log({ id, result });
    return NextResponse.json({ isSuccess });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error:
        "An error occurred while processing your request for delete. Please try again later.",
    });
  }
}
