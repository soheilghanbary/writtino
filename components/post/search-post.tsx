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
    <div className="mb-4 max-w-screen-sm space-y-2">
      <h1 className="text-2xl font-bold text-foreground">
        Seach Posts on the World: {query}
      </h1>
      <div className="flex items-center gap-4">
        <Input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          className="flex-1"
        />
        <Button variant={"default"}>Search</Button>
      </div>
    </div>
  )
}
