"use client";
import FolderPlusIcon from "@/components/icons/FolderPlusIcon";
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
import { createNewAlbum } from "./actions";
import { useState } from "react";
import { FolderType } from "./page";

export function CreateNewAlbumDialog({
  onNewAlbum,
}: {
  onNewAlbum: (folder: FolderType) => void;
}) {
  const [open, setOpen] = useState(false);
  const [albumName, setAlbumName] = useState("");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <div className="flex gap-2 items-center">
            <FolderPlusIcon />
            Create New Album
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Album</DialogTitle>
          <DialogDescription>
            Write the name of album you want to create
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              id="name"
              value={albumName}
              className="col-span-3"
              onChange={(e) => setAlbumName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={async (e) => {
              const btn = e.target as HTMLButtonElement;
              btn.disabled = true;
              await createNewAlbum(albumName);
              btn.disabled = false;
              setOpen(false);
              onNewAlbum({
                name: albumName,
                path: albumName,
              });
            }}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
