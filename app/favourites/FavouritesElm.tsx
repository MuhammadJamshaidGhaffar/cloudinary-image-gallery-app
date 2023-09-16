"use client";
import React, { useState } from "react";
import type { SearchResult } from "./page";
import CloudinaryImage from "../gallery/CloudinaryImage";

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
      <div className="grid grid-cols-4 gap-4 mt-8">
        {favouritesList.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            imageData={result}
            onUnHeart={() => {
              setFavouritesList(
                favouritesList.filter(
                  (imgData) => imgData.public_id != result.public_id
                )
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}
