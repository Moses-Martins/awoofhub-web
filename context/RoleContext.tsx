"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type Role = "Deal Seekers" | "Business";

interface RoleContextType {
  role: Role;
  setRole: Dispatch<SetStateAction<Role>>;
}

export const RoleContext = createContext<RoleContextType>({
  role: "Deal Seekers",
  setRole: () => {}, 
});

// Create a provider
export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("Deal Seekers");

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
