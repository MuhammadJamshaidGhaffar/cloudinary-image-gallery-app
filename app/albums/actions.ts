"use server";

import cloudinary from "cloudinary";

export async function createNewAlbum(albumName : string){
    const existingFolder = await cloudinary.v2.api.create_folder(albumName);
}