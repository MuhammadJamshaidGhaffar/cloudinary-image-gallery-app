"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import FolderPlusIcon from "./icons/FolderPlusIcon";
import { addImageToAlbum } from "./actions";
import { SearchResult } from "@/app/favourites/page";
import { SelectAlbum } from "./SelectAlbum";
import { FolderType } from "@/app/albums/page";

export function AddToAlbumDialog({
  imageData,
  albumsList,
  onClose,
  onAlbumChanged,
}: {
  imageData: SearchResult;
  onClose: () => void;
  albumsList: FolderType[];
  onAlbumChanged?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(
    albumsList.length > 0 ? albumsList[0].name : ""
  );
  return (
    <Dialog
      open={open}
      onOpenChange={(newOpenState) => {
        if (!newOpenState) {
          onClose();
        }
        setOpen(newOpenState);
      }}
    >
      <DialogTrigger asChild>
        <div className="flex gap-2 cursor-pointer">
          <FolderPlusIcon />
          <span>Add to Album</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type Album Name you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <SelectAlbum
              albumsList={albumsList}
              selectedAlbum={selectedAlbum}
              setSelectedAlbum={setSelectedAlbum}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={async () => {
              await addImageToAlbum(imageData, selectedAlbum);
              setOpen(false);
              onClose();
              if (onAlbumChanged) onAlbumChanged();
            }}
          >
            Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
