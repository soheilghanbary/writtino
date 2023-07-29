import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export const PostImage = ({ image, alt }: { image: string; alt: string }) => {
  const [isReady, setIsReady] = useState(false)

  const onLoadCallback = () => {
    setIsReady(true)
  }

  return (
    <Image
      fill
      alt={alt}
      src={image}
      priority
      className={cn(
        "h-full w-full rounded-lg bg-secondary object-cover transition duration-700",
        isReady ? "scale-100 blur-0" : "scale-110 blur-md"
      )}
      onLoadingComplete={onLoadCallback}
    />
  )
}
