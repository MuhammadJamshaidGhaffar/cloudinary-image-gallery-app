import React from "react";
import cloudinary from "cloudinary";
import ClientPage from "./ClientPage";
import ForceRefresh from "@/components/ForceRefresh";

export type FolderType = {
  name: string;
  path: string;
};

export default async function Albums() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderType[];
  };

  console.log(folders);
  return (
    <section>
      <ForceRefresh />
      <ClientPage folders={folders} />
    </section>
  );
}
