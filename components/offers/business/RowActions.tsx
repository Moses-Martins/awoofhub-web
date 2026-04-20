import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";

export default function RowActions() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((p) => !p)}
        className={cn(
          "cursor-pointer p-2 rounded-xl",
          open ? "bg-black text-white" : "bg-white text-black"
        )}
      >
        <BsThreeDots size={20} />
      </button>

      {open && (
        <div className="absolute right-10 top-0 w-40 bg-white rounded-xl shadow-md z-50">
          <Link
            href="/delete"
            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 font-semibold"
          >
            <MdOutlineReport size={18} />
            Delete
          </Link>
        </div>
      )}
    </div>
  );
}