import React, { PropsWithChildren } from "react"

import { SiteHeader } from "./site-header"

export const SiteLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <section>
      <SiteHeader />
      <main className="container mx-auto my-4">{children}</main>
    </section>
  )
}
