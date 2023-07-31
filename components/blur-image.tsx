"use client"

import { FC, HTMLAttributes, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface Props extends HTMLAttributes<HTMLImageElement> {
  alt: string
  image: string
}

export const BlurImage: FC<Props> = ({ image, alt, className }) => {
  const [isReady, setIsReady] = useState(false)

  const onLoadCallback = () => {
    setIsReady(true)
  }

  return (
    <div className={cn("relative", className)}>
      <Image
        fill
        alt={alt}
        src={image}
        priority
        className={cn(
          "h-full w-full rounded-[inherit] object-cover shadow transition duration-300",
          isReady ? "blur-0" : "blur-lg"
        )}
        onLoadingComplete={onLoadCallback}
      />
    </div>
  )
}
