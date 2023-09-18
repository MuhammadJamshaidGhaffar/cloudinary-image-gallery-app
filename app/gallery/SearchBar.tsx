"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar({ tag }: { tag: string }) {
  const [inputValue, setInputValue] = useState(tag);
  const router = useRouter();

  function searchImagesByTag(tag: string) {
    router.replace(`/gallery?tag=${tag}`);
  }
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Search Image"
        className="w-96"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") searchImagesByTag(inputValue);
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-full p-2 hover:border hover:border-blue-200 cursor-pointer rounded-md"
        onClick={() => {
          searchImagesByTag(inputValue);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}
