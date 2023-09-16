import React from "react";
import cloudinary from "cloudinary";
import ForceRefresh from "@/components/ForceRefresh";
import FavouritesElm from "./FavouritesElm";

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
      <FavouritesElm resources={results.resources} />
    </section>
  );
}
