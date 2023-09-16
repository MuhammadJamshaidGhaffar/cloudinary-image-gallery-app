"use server";

import { SearchResult } from "@/app/favourites/page";
import cloudinary from "cloudinary";

export async function addImageToAlbum(image : SearchResult , albumName : string){
    const existingFolder = await cloudinary.v2.api.create_folder(albumName);

    await cloudinary.v2.uploader.rename(image.public_id , `${albumName}/${image.public_id}`)
}