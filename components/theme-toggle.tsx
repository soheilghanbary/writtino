"use client"

import { useTheme } from "next-themes"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <DropdownMenuItem
      onSelect={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icons.moon className="mr-2 h-4 w-4 dark:hidden" />
      <Icons.sun className="mr-2 hidden h-4 w-4 dark:inline" />
      <span className="hidden dark:inline">Light Mode</span>
      <span className="dark:hidden">Dark Mode</span>
    </DropdownMenuItem>
  )
}
