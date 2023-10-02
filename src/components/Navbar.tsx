import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Kaif.dev
      </Link>
      <Link className="bg-white rounded-xl p-2" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
