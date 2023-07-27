import { PropsWithChildren } from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"

const settings = [
  {
    title: "Dashboard",
    href: "/settings",
    icon: Icons.dashboard,
  },
  {
    title: "Account",
    href: "/settings/account",
    icon: Icons.user,
  },
  {
    title: "Social Links",
    href: "/settings/social",
    icon: Icons.social,
  },
]

export default function SettingsLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex space-x-8">
      <aside className="hidden w-[200px] flex-col md:flex">
        <nav className="grid items-start gap-2">
          {settings.map(({ href, title, icon: Icon }, i) => (
            <Link href={href}>
              <span className="transparent group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                <Icon className="mr-2 h-4 w-4" />
                <span>{title}</span>
              </span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </section>
  )
}
