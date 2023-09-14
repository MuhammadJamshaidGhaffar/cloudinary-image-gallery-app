"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-3xl">Hello</div>
      <CldImage
        width="960"
        height="600"
        src="sukmsinkia7m2g0bxl4g"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
