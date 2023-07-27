"use client"

import { useCallback } from "react"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  BoldIcon,
  Heading2,
  ImageIcon,
  Italic,
  Link2Icon,
  MoreHorizontal,
} from "lucide-react"

import { Button } from "../ui/button"
import { HorizontalRule } from "./hr-extension"

export const Teditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      HorizontalRule.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      Placeholder.configure({
        placeholder: "what's happening today ...",
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-2xl my-3",
        },
      }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          class: "underline",
          target: "_blank",
        },
      }),
    ],
    content: "<p>Hello World!</p>",
    autofocus: true,
    onBlur({ editor }) {},
  })

  const onBold = () => editor?.chain().focus().toggleBold().run()
  const onItalic = () => editor?.chain().focus().toggleItalic().run()
  const onHeading2 = () =>
    editor?.chain().focus().toggleHeading({ level: 2 }).run()

  const addImage = useCallback(() => {
    const url = window.prompt("URL")

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run()

      return
    }

    // update link
    editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }, [editor])

  if (!editor) {
    return <p>ready...</p>
  }

  return (
    <>
      <div className="sticky top-14 z-40 mb-4 flex items-center gap-2 rounded-lg border bg-background p-2 shadow">
        <Button
          variant={editor.isActive("bold") ? "default" : "outline"}
          size={"icon"}
          onClick={onBold}
        >
          <BoldIcon className="h-4 w-4" />
        </Button>
        <Button
          onClick={onHeading2}
          variant={
            editor.isActive("heading", { level: 2 }) ? "default" : "outline"
          }
          size={"icon"}
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("italic") ? "default" : "outline"}
          size={"icon"}
          onClick={onItalic}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          onClick={setLink}
          variant={editor.isActive("link") ? "default" : "outline"}
          size={"icon"}
        >
          <Link2Icon className="h-4 w-4" />
        </Button>
        <Button onClick={addImage} variant={"outline"} size={"icon"}>
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          variant={"outline"}
          size={"icon"}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      <EditorContent editor={editor} />
    </>
  )
}
