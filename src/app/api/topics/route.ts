import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Topic from "@/models/topic";

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  await connect();
  await Topic.create({ title, description });
  return NextResponse.json(
    { message: "Topic Added successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connect();
  const topics = await Topic.find();
  return NextResponse.json(
    { message: "Topics are delivereed", success: true, data: topics },

    { status: 201 }
  );
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
