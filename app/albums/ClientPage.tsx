"use client";

import React from "react";
import { FolderType } from "./page";
import { CreateNewAlbumDialog } from "./CreateNewAlbumDialog";
import { AlbumCard } from "./AlbumCard";
import { useState } from "react";
import ForceRefresh from "@/components/ForceRefresh";

export default function ClientPage({ folders }: { folders: FolderType[] }) {
  const [albumsList, setAlbumsList] = useState(folders);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Albums</h1>
        <CreateNewAlbumDialog
          onNewAlbum={(newAlbum) => {
            setAlbumsList(
              [...albumsList, newAlbum].sort((f1, f2) =>
                f1.name.localeCompare(f2.name)
              )
            );
          }}
        />
      </div>

      <div className="mt-20 grid grid-cols-3 gap-4">
        {albumsList.map((folder) => (
          <AlbumCard key={folder.path} folder={folder} />
        ))}
      </div>
    </div>
  );
}
