import { connect } from "@/db/dbConfig";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
  params: {
    id: string;
  };
};

export async function PUT(
  request: NextRequest,
  { params: { id } }: RouteParams
) {
  console.log(id);
  const { newTitle: title, newDescription: description } = await request.json();
  await connect();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(
  request: NextRequest,
  { params: { id } }: RouteParams
) {
  try {
    await connect();
    const data = await Topic.findById(id);
    return NextResponse.json(
      { message: "Topic found", success: true, data: data },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
