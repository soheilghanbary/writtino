import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useUpdateAccount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (user: any) => {
      await fetch("/api/user", {
        method: "PATCH",
        body: JSON.stringify(user),
      })
    },
    onMutate(data) {
      const prevUser = queryClient.getQueryData(["user"]) as any
      queryClient.setQueryData(["user"], { ...prevUser, ...data })
    },
  })
}

// get user data
export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("/api/user")
      return await res.json()
    },
  })
}
