"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import HeartIcon from "@/components/icons/HeartIcon";
import { useTransition } from "react";
import { setAsFavouriteAction } from "./actions";
import type { SearchResult } from "./page";
import FullHeartIcon from "@/components/icons/FullHeartIcon";

export default function CloudinaryImage(props: {
  imageData: SearchResult;
  path: string;
  [key: string]: any;
}) {
  const { imageData } = props;

  const [transition, startTransition] = useTransition();
  const isFavourited = imageData.tags.includes("favourite");
  return (
    <div className="relative">
      <CldImage
        {...props}
        src={imageData.public_id}
        alt="something"
        width="400"
        height="300"
      />
      {isFavourited ? (
        <FullHeartIcon
          className="absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavouriteAction(
                imageData.public_id,
                isFavourited,
                props.path
              );
            });
          }}
        />
      ) : (
        <HeartIcon
          className="absolute top-2 right-2 hover:text-red-600 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavouriteAction(imageData.public_id, isFavourited);
            });
          }}
        />
      )}
    </div>
  );
}
