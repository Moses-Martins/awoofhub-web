"use client";

import { RoleContext } from "@/context/RoleContext";
import { useContext } from "react";

export type Tab = "Deal Seekers" | "Business";

export default function RoleToggle() {
  const { role, setRole } = useContext(RoleContext);

  return (
    <div className="flex items-center justify-center mb-5">
      <div className="relative flex text-sm w-full h-10 p-1 bg-[#FF5A00] rounded-sm items-center cursor-pointer">

        {/* Sliding Background Indicator */}
        <div
          className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-sm transition-all duration-300 ease-in-out shadow-sm ${
            role === "Business" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        <button
          type="button"
          onClick={() => setRole("Individual")}
          className={`relative z-10 flex-1 text-xs font-semibold transition-colors ${
            role === "Individual" ? "text-black" : "text-white"
          }`}
        >
          For Individuals
        </button>

        <button
          type="button"
          onClick={() => setRole("Business")}
          className={`relative z-10 flex-1 text-xs font-semibold transition-colors ${
            role === "Business" ? "text-black" : "text-white"
          }`}
        >
          For Business
        </button>
        
      </div>
    </div>
  );
}
