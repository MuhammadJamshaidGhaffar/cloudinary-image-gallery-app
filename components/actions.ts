"use server";

import { FolderType } from "@/app/albums/page";
import { SearchResult } from "@/app/favourites/page";
import cloudinary from "cloudinary";

export async function addImageToAlbum(image : SearchResult , albumName : string){
    

    let parts = image.public_id.split("/");
    if(parts.length > 1){
        parts = parts.slice(1);
    }
    const publicId = parts.join("/");

    await cloudinary.v2.uploader.rename(image.public_id, `${albumName}/${publicId}`)
}

// export async function getAlbumsList(){
//     const { folders } = (await cloudinary.v2.api.root_folders()) as {
//         folders: FolderType[];
//       };
//       return folders;
// }