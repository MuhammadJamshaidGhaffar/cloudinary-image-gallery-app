import React from "react";
import cloudinary from "cloudinary";
import ImagesGrid from "@/components/ImagesGrid";
import { SearchResult } from "@/app/favourites/page";
import CloudinaryImage from "@/components/CloudinaryImage";
import ForceRefresh from "@/components/ForceRefresh";
import { FolderType } from "../page";
import AlbumImagesElm from "./AlbumImagesElm";

export default async function AlbumPage({
  params: { albumName },
}: {
  params: { albumName: string };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=\"${albumName}\"`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  const { folders: albumsList } = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderType[];
  };
  // console.log(albumsList);
  console.log(results);
  return (
    <section>
      <ForceRefresh />
      <h1 className="text-4xl font-bold">Gallery</h1>
      <AlbumImagesElm albumsList={albumsList} images={results.resources} />
    </section>
  );
}
