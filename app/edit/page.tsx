"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { GenerativeFillDialog } from "./GenerativeFillDialog";

export default function Page({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "remove-background"
    | "blur"
    | "grayscale"
    | "pixelate"
  >(undefined);

  const [prompt, setPrompt] = useState("");

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Edit Image</h1>
      </div>

      <div className="my-4 flex gap-2 items-start">
        {/* <div className="flex flex-col"> */}
        {/* <Button
            variant="secondary"
            onClick={() => {
              setTransformation("generative-fill");
            }}
          >
            Generative Fill
          </Button>

          <Input placeholder="Add text for generative fill" />
        </div> */}
        <GenerativeFillDialog
          setPrompt={setPrompt}
          onSubmit={() => {
            setTransformation("generative-fill");
          }}
        />
        <Button
          variant="secondary"
          onClick={() => {
            setTransformation("remove-background");
          }}
        >
          Remove Background
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setTransformation("blur");
          }}
        >
          Blur
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setTransformation("grayscale");
          }}
        >
          GrayScale
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setTransformation("pixelate");
          }}
        >
          Pixelate
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <CldImage src={publicId} alt="something" width="400" height="300" />

        {transformation == "generative-fill" && (
          <CldImage
            src={publicId}
            alt="something"
            width="400"
            height="300"
            fillBackground={{
              prompt: prompt,
            }}
          />
        )}
        {transformation == "remove-background" && (
          <CldImage
            src={publicId}
            alt="something"
            width="400"
            height="300"
            removeBackground={true}
          />
        )}
        {transformation == "blur" && (
          <CldImage
            src={publicId}
            alt="something"
            width="400"
            height="300"
            effects={[
              {
                blur: "1200",
              },
            ]}
          />
        )}
        {transformation == "grayscale" && (
          <CldImage
            src={publicId}
            alt="something"
            width="400"
            height="300"
            effects={[
              {
                grayscale: true,
              },
            ]}
          />
        )}

        {transformation == "pixelate" && (
          <CldImage
            src={publicId}
            alt="something"
            width="400"
            height="300"
            effects={[
              {
                pixelate: true,
              },
            ]}
          />
        )}
      </div>
    </section>
  );
}
