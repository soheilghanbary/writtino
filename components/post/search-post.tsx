"use client"

import { useState } from "react"
import { useDebounce } from "use-debounce"

import { useSearchPost } from "@/hooks/use-post"
import { useDidUpdate } from "@/hooks/use-update"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchPost() {
  const [text, setText] = useState("")
  const [query] = useDebounce(text, 500)
  const { mutateAsync } = useSearchPost()
  useDidUpdate(async () => {
    await mutateAsync(query)
  }, [query])

  return (
    <div className="mx-auto mb-4 max-w-screen-sm space-y-4 text-center">
      <h1 className="text-center text-4xl font-bold text-foreground">
        Blogs Page
      </h1>
      <p className="text-muted-foreground">
        All the published blogs will appear here
      </p>
      <div className="flex items-center gap-4">
        <Input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          placeholder="Enter Blog Title Here"
          className="flex-1"
        />
        <Button variant={"default"}>Search</Button>
      </div>
    </div>
  )
}
