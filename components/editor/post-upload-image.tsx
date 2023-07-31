import { useDropzone } from "react-dropzone"

import { usePostState } from "@/hooks/use-post"

import { PostImage } from "./post-image"

export function PostImageUpload() {
  const { onDrop, path } = usePostState()

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {},
  })

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium" htmlFor="title">
        Post Cover
      </label>
      {path.length ? (
        <div
          {...getRootProps()}
          className="relative flex h-[240px] w-full items-center justify-center rounded-lg border-2 border-dashed bg-secondary/50"
        >
          <PostImage alt="upload post" image={path} />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="flex h-[200px] w-full items-center justify-center rounded-lg border-2 border-dashed bg-secondary/50"
        >
          <input {...getInputProps()} />
          Upload your post cover
        </div>
      )}
    </div>
  )
}
