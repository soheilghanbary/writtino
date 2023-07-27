"use client"

import { useRouter } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

import { ThemeToggle } from "../theme-toggle"
import { SignOutButton } from "./signout-button"

export function HeaderOption() {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        <DropdownMenuItem onSelect={(e) => router.push("/profile")}>
          <Icons.user className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => router.push("/new-post")}>
          <Icons.write className="mr-2 h-4 w-4" />
          New Post
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icons.saved className="mr-2 h-4 w-4" />
          Saved
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => router.push("/settings")}>
          <Icons.settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <ThemeToggle />
        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
