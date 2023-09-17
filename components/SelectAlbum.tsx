"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FolderType } from "@/app/albums/page";
import { useState, useEffect } from "react";

export function SelectAlbum({
  albumsList,
  selectedAlbum,
  setSelectedAlbum,
}: {
  albumsList: FolderType[];
  selectedAlbum: string;
  setSelectedAlbum: (value: string) => void;
}) {
  return (
    <Select value={selectedAlbum} onValueChange={setSelectedAlbum}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an Album" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {albumsList.map((album, idx) => (
            <SelectItem key={idx} value={album.name}>
              {album.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
