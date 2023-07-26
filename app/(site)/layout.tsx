import { PropsWithChildren } from "react"

import { SiteLayout } from "@/components/site/site-layout"

export default function SiteRootLayout({ children }: PropsWithChildren) {
  return <SiteLayout>{children}</SiteLayout>
}
