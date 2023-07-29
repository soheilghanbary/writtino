"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export const PostCover = ({ image, alt }: { image: string; alt: string }) => {
  const [isReady, setIsReady] = useState(false)

  const onLoadCallback = () => {
    setIsReady(true)
  }

  return (
    <div className="relative my-8 min-h-[400px] w-full">
      <Image
        fill
        alt={alt}
        src={image}
        priority
        className={cn(
          "h-full w-full rounded-2xl bg-secondary object-cover shadow transition duration-700",
          isReady ? "blur-0" : "blur-md"
        )}
        onLoadingComplete={onLoadCallback}
      />
    </div>
  )
}
