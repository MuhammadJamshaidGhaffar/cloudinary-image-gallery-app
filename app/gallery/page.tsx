import React from "react";
import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import CloudinaryImage from "../../components/CloudinaryImage";
import ImagesGrid from "@/components/ImagesGrid";
import { FolderType } from "../albums/page";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  const { folders: albumsList } = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderType[];
  };

  console.log(albumsList);
  // console.log(results);
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>
      <ImagesGrid
        max_columns={4}
        images={results.resources}
        getImageComponent={(imageData) => (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            albumsList={albumsList}
          />
        )}
      />
    </section>
  );
}
