"use client";
import React, { useState } from "react";
import type { SearchResult } from "./page";
import CloudinaryImage from "@/components/CloudinaryImage";
import ImagesGrid from "@/components/ImagesGrid";

export default function FavouritesElm({
  resources,
}: {
  resources: SearchResult[];
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
