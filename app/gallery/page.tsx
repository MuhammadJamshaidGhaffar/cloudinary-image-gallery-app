import React from "react";
import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import CloudinaryImage from "../../components/CloudinaryImage";
import ImagesGrid from "@/components/ImagesGrid";
import { FolderType } from "../albums/page";
import { Input } from "@/components/ui/input";
import SearchBar from "./SearchBar";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function Gallery({
  searchParams: { tag },
}: {
  searchParams: { tag: string | undefined };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image ${tag ? `AND tags=${tag}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  const { folders: albumsList } = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderType[];
  };

  console.log(albumsList);
  // console.log(results);
  // console.log(tag);
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <SearchBar tag={tag || ""} />
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
