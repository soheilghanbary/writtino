import Link from "next/link"

import { getUserSession } from "@/lib/user-session"
import { buttonVariants } from "@/components/ui/button"

import { Icons } from "../icons"
import { HeaderOption } from "./header-option"
import { MainNav } from "./main-nav"

export const SiteHeader = async () => {
  const userId = await getUserSession()
  return (
    <header className="sticky top-0 z-50 border-b bg-background py-2">
      <nav className="container mx-auto flex items-center justify-between">
        <Logo />
        <MainNav />
        {!userId ? <LoginButton /> : <HeaderOption />}
      </nav>
    </header>
  )
}

const LoginButton = () => (
  <Link
    href={"/login"}
    className={buttonVariants({ variant: "secondary", size: "sm" })}
  >
    Sign In
  </Link>
)

export const Logo = () => (
  <div className="flex items-center">
    <Icons.logo className="mr-2 h-5 w-5" />
    <h6 className="font-semibold">Writtino</h6>
  </div>
)
