import { useCallback, useMemo, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { atom, useAtom } from "jotai"
import { FileWithPath } from "react-dropzone"

interface PostEditorProps {
  title: string
  description: string
  image: string
  content: string
}

const postAtom = atom<PostEditorProps>({
  title: "",
  description: "",
  image: "",
  content: "",
})

const postImageAtom = atom<File[]>([])

export const usePost = () => {
  const [post, setPost] = useAtom(postAtom)
  const updateContent = (content: string) => setPost({ ...post, content })
  const updateImage = (image: string) => setPost({ ...post, image })

  return { updateContent, updateImage, post }
}

export const usePostImage = () => {
  const [files, setFiles] = useAtom(postImageAtom)
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
  }, [])

  const path = useMemo(
    () => (files[0] ? URL.createObjectURL(files[0]) : ""),
    [files]
  )

  return { onDrop, files, path }
}
