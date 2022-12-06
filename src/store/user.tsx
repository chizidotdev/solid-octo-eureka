import React, { createContext, useContext, useState } from "react";

export type User = {
  id: number;
  name: string;
  role: "user" | "admin";
  joined: Date;
};

const UserContext = createContext<{
  users: User[];
  adminUsers: User[];
  userUsers: User[];
}>({
  users: [],
  adminUsers: [],
  userUsers: [],
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users] = useState(dummyUsers);
  const adminUsers = dummyUsers.filter((user) => user.role === "admin");
  const userUsers = dummyUsers.filter((user) => user.role === "user");

  return (
    <UserContext.Provider value={{ users, adminUsers, userUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

/**
 * temporary users array
 */
const dummyUsers = [
  {
    id: 1,
    name: "tanner linsley the dev",
    role: "user" as const,
    joined: new Date(),
  },
  {
    id: 2,
    name: "tandy miller",
    role: "admin" as const,
    joined: new Date(),
  },
  {
    id: 3,
    name: "joe dirte",
    role: "user" as const,
    joined: new Date(),
  },
];
