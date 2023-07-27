"use client"

import React, { useEffect, useRef } from "react"

import { Teditor } from "@/components/editor"

export default function NewPostPage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [])

  const handleInput = (e: any) => {
    e.target.style.height = "auto"
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <section className="mx-auto min-h-screen max-w-screen-sm">
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        placeholder="Post title"
        maxLength={75}
        className="box-border w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold text-foreground/80 focus:outline-none"
      />
      <Teditor />
    </section>
  )
}
