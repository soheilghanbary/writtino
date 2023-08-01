"use client"

import { useMemo } from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

import { Icons } from "@/components/icons"

dayjs.extend(relativeTime)

interface Props {
  published: Date
}
export function PostPublished({ published }: Props) {
  const date = useMemo(() => dayjs(published).fromNow(), [published])
  return (
    <p className="mt-2 flex items-center text-sm text-muted-foreground">
      <Icons.date className="mr-3 h-4 w-4" />
      Published on {date}
    </p>
  )
}
