import { SearchResult } from "@/app/favourites/page";
import React from "react";

export default function ImagesGrid({
  images,
  max_columns,
  getImageComponent,
}: {
  images: SearchResult[];
  max_columns: number;
  getImageComponent: (imageData: SearchResult) => React.ReactNode;
}) {
  function getColumnImages(column_no: number) {
    return images.filter((image, idx) => idx % max_columns == column_no);
  }

  const gridImagesData: SearchResult[][] = [];
  for (let i = 0; i < max_columns; i++) {
    gridImagesData.push(getColumnImages(i));
  }

  return (
    <div className={`grid grid-cols-${max_columns} gap-4 mt-8`}>
      {gridImagesData.map((columnImagesData, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {columnImagesData.map(getImageComponent)}
        </div>
      ))}
    </div>
  );
}
