"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

export type UserProviderProps = {
  children: React.ReactNode;
}

export const UserProvider = ({children}: UserProviderProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>
}

export default UserProvider;