import { getCurrentUser } from "@/lib/user-session"

import AccountForm from "./account-form"

export default async function AccountSettings() {
  const user = await getCurrentUser()

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold leading-relaxed text-foreground">
          Account Setting
        </h1>
        <p className="text-sm text-muted-foreground">
          manage your account setting
        </p>
      </div>
      <AccountForm
        bio={user?.bio!}
        name={user?.name!}
        username={user?.username!}
      />
    </div>
  )
}
