"use client";

import { SearchResult } from "@/app/gallery/page";
import CloudinaryImage from "@/components/CloudinaryImage";
import ImagesGrid from "@/components/ImagesGrid";
import React, { useState } from "react";
import { FolderType } from "../page";

export default function AlbumImagesElm({
  images,
  albumsList,
}: {
  images: SearchResult[];
  albumsList: FolderType[];
}) {
  const [albumImages, setAlbumImages] = useState(images);
  return (
    <ImagesGrid
      max_columns={4}
      images={albumImages}
      getImageComponent={(imageData) => (
        <CloudinaryImage
          key={imageData.public_id}
          imageData={imageData}
          albumsList={albumsList}
          onAlbumChanged={() => {
            console.log("Album changed");
            setAlbumImages(
              albumImages.filter((img) => img.public_id != imageData.public_id)
            );
          }}
        />
      )}
    />
  );
}
