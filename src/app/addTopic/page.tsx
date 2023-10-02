import React from "react";

export default function AddTopicPage() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 px-8 py-2 rounded-xl"
        placeholder="Topic Title"
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2 rounded-xl"
        placeholder="Topic Description"
      />
      <button className="bg-green-600 py-3 px-6 w-fit text-white font-bold rounded-xl">
        Add Topic
      </button>
    </form>
  );
}
