import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Topic from "@/models/topic";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function POST(request: NextRequest) {
  const { title, des: description } = await request.json();
  await connect();
  await Topic.create({ title, description });
  return NextResponse.json(
    { message: "Topic Added successfully" },
    { status: 201 }
  );
}

export async function GET(request: NextRequest) {
  try {
    const headers = request.headers;
    await connect();
    const topics = await Topic.find();
    return NextResponse.json(
      { message: "Topics are delivereed", success: true, data: topics },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
