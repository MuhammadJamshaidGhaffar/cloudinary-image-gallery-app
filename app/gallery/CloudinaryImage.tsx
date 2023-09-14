"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

export default function CloudinaryImage(props: any) {
  return <CldImage {...props} />;
}
