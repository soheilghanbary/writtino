import Link from "next/link"

import { siteConfig } from "@/config/site"

export const MainNav = () => (
  <ul className="ml-8 flex-1 items-center space-x-6 text-sm font-medium hidden md:flex">
    {siteConfig.nav.map(({ title, href }, i) => (
      <Link
        key={i}
        href={href}
        className="cursor-pointer text-foreground/60 transition-colors hover:text-foreground/90"
      >
        {title}
      </Link>
    ))}
  </ul>
)
