"use client";
import React, {
  FormEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import { useRouter } from "next/navigation";

export default function AddTopicPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = async () => {
    if (!title || !des) {
      alert("Title and Description are Required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, des }),
      });
      if (!res.ok) {
        throw new Error("Unable to connect Pls check after some time");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error: any) {
      console.log("Error while updating", error.message);
    }
  };
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-3"
    >
      <input
        type="text"
        className="border border-slate-500 px-8 py-2 rounded-xl"
        placeholder="Topic Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2 rounded-xl"
        placeholder="Topic Description"
        onChange={(e) => {
          setDes(e.target.value);
        }}
      />
      <button className="bg-green-600 py-3 px-6 w-fit text-white font-bold rounded-xl">
        Add Topic
      </button>
    </form>
  );
}
