import Image from "next/image";
import UploadButton from "./gallery/UploadButton";
import { DeveloperHoverCard } from "./DeveloperHoverCard";

export default function Home() {
  return (
    <main className="min-h-screen p-24 ">
      <h2 className="text-3xl text-center">Welcome to Image Gallery App</h2>
      <p className="my-5 text-xl  text-center">
        Click on Upload to upload your 1st Image
      </p>
      <div className="flex justify-center">
        <UploadButton variant="secondary" />
      </div>

      <div className="mt-52 text-center">
        <DeveloperHoverCard />
      </div>
    </main>
  );
}
