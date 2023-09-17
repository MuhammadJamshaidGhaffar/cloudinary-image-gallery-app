"use client";
import React, { useState } from "react";
import type { SearchResult } from "./page";
import CloudinaryImage from "@/components/CloudinaryImage";
import ImagesGrid from "@/components/ImagesGrid";
import { FolderType } from "../albums/page";

export default function FavouritesElm({
  resources,
  albumsList,
}: {
  resources: SearchResult[];
  albumsList: FolderType[];
}) {
  const [favouritesList, setFavouritesList] = useState(resources);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Favourite Images</h1>
      </div>
      <ImagesGrid
        max_columns={4}
        images={favouritesList}
        getImageComponent={(imageData) => (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            albumsList={albumsList}
            onUnHeart={() => {
              setFavouritesList(
                favouritesList.filter(
                  (imgDataF) => imgDataF.public_id != imageData.public_id
                )
              );
            }}
          />
        )}
      />
    </div>
  );
}
