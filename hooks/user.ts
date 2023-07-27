import { useMutation, useQuery } from "@tanstack/react-query"

import { AccountProps } from "@/types/user"

// update user account -> name ,username , bio
export const useUpdateAccount = () => {
  return useMutation({
    mutationFn: async (user: AccountProps) => {
      await fetch("/api/user", {
        method: "PATCH",
        body: JSON.stringify(user),
      })
    },
  })
}
