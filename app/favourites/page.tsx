import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "../gallery/CloudinaryImage";
import ForceRefresh from "@/components/ForceRefresh";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  console.log(results);
  return (
    <section>
      <ForceRefresh />
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Favourite Images</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {results.resources.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            imageData={result}
            path="/favourites"
          />
        ))}
      </div>
    </section>
  );
}
