import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import axios from "axios";

import { HiPencilAlt } from "react-icons/hi";
export default async function TopicsList() {
  return (
    <>
      <div className="p-4 border rounded-xl border-slate-400 items-start my-3 flex justify-between gap-5">
        <div>
          <h2 className="font-2xl font-bold">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />

          <Link href={"/editTopic/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}
