import { PropsWithChildren } from "react"

import { EditorHeader } from "./header"

export default function EditorLayout({ children }: PropsWithChildren) {
  return (
    <section className="container mx-auto py-8">
      <EditorHeader />
      <div>{children}</div>
    </section>
  )
}
