"use client";

import { RoleContext } from "@/context/RoleContext";
import { useContext } from "react";

export type Tab = "Deal Seekers" | "Business";


export default function RoleToggle() {

  const {role, setRole} = useContext(RoleContext);
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex text-sm w-55 h-9 p-1 bg-[#FF5A00] rounded-sm items-center cursor-pointer border-[#FF5A00]">

        {/* Sliding Background Indicator */}
        <div
          className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-sm transition-all duration-300 ease-in-out shadow-sm ${
            role === "Business" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        {/* Deal Seekers Tab */}
        <button
          type="button"
          onClick={() => setRole("Deal Seekers")}
          className={`relative z-10 flex-1 font-semibold transition-colors ${
            role === "Deal Seekers" ? "text-black" : "text-white"
          }`}
        >
          Deal Seekers
        </button>

        {/* Business Tab */}
        <button
          type="button"
          onClick={() => setRole("Business")}
          className={`relative z-10 flex-1 font-semibold transition-colors ${
            role === "Business" ? "text-black" : "text-white"
          }`}
        >
          Business
        </button>
      </div>
    </div>
  );
}
