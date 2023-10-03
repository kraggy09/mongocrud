"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditTopicForm({ id }: { id: string }) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleSubmit = async () => {
    if (!newTitle || !newDescription) {
      alert("Title and Description are Required");
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
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
      onSubmit={(e) => {
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
          setNewTitle(e.target.value);
        }}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2 rounded-xl"
        placeholder="Topic Description"
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}
      />
      <button className="bg-green-600 py-3 px-6 w-fit text-white font-bold rounded-xl">
        Update Topic
      </button>
    </form>
  );
}
