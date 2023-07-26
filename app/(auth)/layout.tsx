import { redirect } from "next/navigation"

import { getUserSession } from "@/lib/user-session"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const userId = await getUserSession()
  if (userId) return redirect("/")
  return <section className="min-h-screen">{children}</section>
}
