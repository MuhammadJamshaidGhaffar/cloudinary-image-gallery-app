"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function setAsFavouriteAction(
  publicId: string,
  isFavourited: boolean,
  path: string
) {
  if (isFavourited) {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  }
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  revalidatePath(path);
}
