"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import HeartIcon from "@/components/icons/HeartIcon";
import { useTransition } from "react";
import { setAsFavouriteAction } from "./actions";
import type { SearchResult } from "./page";
import FullHeartIcon from "@/components/icons/FullHeartIcon";
import { FunctionOrConstructorTypeNode } from "typescript";

export default function CloudinaryImage(props: {
  imageData: SearchResult;
  onHeart?: () => void;
  onUnHeart?: () => void;
}) {
  const { imageData } = props;

  const [transition, startTransition] = useTransition();
  const [isFavourited, setIsFavourited] = useState(
    imageData.tags.includes("favourite")
  );
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
          onClick={async () => {
            // startTransition(() => {
            await setAsFavouriteAction(imageData.public_id, false);
            // });
            setIsFavourited(false);
            if (props.onUnHeart) props.onUnHeart();
          }}
        />
      ) : (
        <HeartIcon
          className="absolute top-2 right-2 hover:text-red-600 cursor-pointer"
          onClick={async () => {
            // startTransition(() => {
            await setAsFavouriteAction(imageData.public_id, true);
            // });
            setIsFavourited(true);
            if (props.onHeart) props.onHeart();
          }}
        />
      )}
    </div>
  );
}
