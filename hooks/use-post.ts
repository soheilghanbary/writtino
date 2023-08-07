import { useCallback, useMemo } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { atom, useAtom } from "jotai"
import { FileWithPath } from "react-dropzone"

import { PostType } from "@/types/post"

interface PostEditorProps {
  title: string
  description: string
  image: File
  content: string
}

const postAtom = atom<PostEditorProps>({
  title: "",
  description: "",
  content: "",
  image: new File([], ""),
})

export const usePostState = () => {
  const [post, setPost] = useAtom(postAtom)
  const updateContent = (content: string) => setPost({ ...post, content })
  const updateImage = (image: File) => setPost({ ...post, image })

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    updateImage(acceptedFiles[0])
  }, [])

  const path = useMemo(
    () => (post.image.name ? URL.createObjectURL(post.image) : ""),
    [post.image]
  )

  return { updateContent, updateImage, post, onDrop, path }
}

export const useAllPosts = (role: string) => {
  return useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(`/api/posts?role=${role}`)
      return await res.json()
    },
  })
}

export const usePost = (postId: string) => {
  return useQuery<PostType>({
    queryKey: ["posts", postId],
    queryFn: async () => {
      const res = await fetch(`/api/posts?id=${postId}`)
      return await res.json()
    },
  })
}

export const useSearchPost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (query: string) => {
      const res = await fetch(`/api/posts?search=${query}`)
      return await res.json()
    },
    onSuccess: (data) => {
      return queryClient.setQueryData(["posts"], data)
    },
  })
}
