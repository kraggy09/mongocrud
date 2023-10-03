import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

import { HiPencilAlt } from "react-icons/hi";
import axios from "axios";

type Topics = {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("You messed up");
  }
};
export default async function TopicsList() {
  const res = await getTopics();

  return (
    <>
      {res ? (
        res.data.map((t: Topics) => {
          return (
            <div key={t._id}>
              <div className="p-4 border rounded-xl border-slate-400 items-start my-3 flex justify-between gap-5">
                <div>
                  <h2 className="font-2xl font-bold">{t.title}</h2>
                  <div>{t.description}</div>
                </div>
                <div className="flex gap-2">
                  <RemoveBtn id={t._id} />

                  <Link href={`/editTopic/${t._id}`}>
                    <HiPencilAlt size={24} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
