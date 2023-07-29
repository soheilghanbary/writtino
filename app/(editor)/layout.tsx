import { PropsWithChildren } from "react"

import { EditorHeader } from "@/components/editor/editor-header"

export default function EditorLayout({ children }: PropsWithChildren) {
  return (
    <section className="container mx-auto py-8">
      <EditorHeader />
      <div>{children}</div>
    </section>
  )
}
