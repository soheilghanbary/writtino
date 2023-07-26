"use client"

import { signOut } from "next-auth/react"

import { Icons } from "../icons"
import { DropdownMenuItem } from "../ui/dropdown-menu"

export function SignOutButton() {
  return (
    <DropdownMenuItem className="text-pink-500" onSelect={(e) => signOut()}>
      <Icons.logout className="mr-2 h-4 w-4" />
      Sign Out
    </DropdownMenuItem>
  )
}
