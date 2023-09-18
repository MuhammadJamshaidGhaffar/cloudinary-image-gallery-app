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
import { SetStateAction, useState } from "react";

export function GenerativeFillDialog({
  onSubmit,
  setPrompt,
}: {
  onSubmit: () => void;
  setPrompt: React.Dispatch<SetStateAction<string>>;
}) {
  const [open, setOpen] = useState(false);
  const [tempPrompt, setTempPrompt] = useState("");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <div className="flex gap-2 items-center">Generative Fill</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generative Fill</DialogTitle>
          <DialogDescription>
            Write prompt to add generative fill in the image
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Prompt
            </Label>
            <Input
              id="name"
              value={tempPrompt}
              className="col-span-3"
              onChange={(e) => setTempPrompt(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={async (e) => {
              setPrompt(tempPrompt);
              onSubmit();

              setOpen(false);
            }}
          >
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
