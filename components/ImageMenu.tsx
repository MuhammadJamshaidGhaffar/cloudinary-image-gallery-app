"use client";

import * as React from "react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MenuIcon from "./icons/MenuIcon";
import FolderPlusIcon from "./icons/FolderPlusIcon";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import { SearchResult } from "@/app/favourites/page";
import { useState } from "react";
import { FolderType } from "@/app/albums/page";
import EditIcon from "./icons/EditIcon";
import { useRouter } from "next/navigation";

export function ImageMenu({
  imageData,
  albumsList,
  onAlbumChanged,
}: {
  imageData: SearchResult;
  albumsList: FolderType[];
  onAlbumChanged?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog
              imageData={imageData}
              albumsList={albumsList}
              onClose={() => setOpen(false)}
              onAlbumChanged={onAlbumChanged}
            />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
              onClick={() => {
                router.replace(`/edit?publicId=${imageData.public_id}`);
              }}
            >
              <div className="flex gap-2 cursor-pointer">
                <EditIcon />
                <span>Edit</span>
              </div>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
