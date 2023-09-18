"use client";

import jamshaidImg from "@/images/jamshaid image.jpeg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarDays, GithubIcon } from "lucide-react";
import Link from "next/link";

export function DeveloperHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer">
        <span className="text-gray-400">This website is made by</span>{" "}
        <span className="font-semibold">Muhammad Jamshaid Ghaffar</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={jamshaidImg.src} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Muhammad Jamshaid Ghaffar</h4>
            <p className="text-sm">
              Computer Science Student | Full Stack developer | Nust&apos;26
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Expereince 2 years
              </span>
            </div>
            <div className="flex items-center pt-2">
              <Link
                href="https://github.com/MuhammadJamshaidGhaffar"
                className="text-xs text-muted-foreground"
                target="_blank"
              >
                <GithubIcon className="inline-block" />
                {"  "} Github
              </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
