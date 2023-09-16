"use client";
import React, { useState } from "react";
import type { SearchResult } from "./page";
import CloudinaryImage from "../gallery/CloudinaryImage";
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
      {/* <div className="grid grid-cols-4 gap-4 mt-8">
        {favouritesList.map((result) => (
          
        ))}
      </div> */}
    </div>
  );
}
