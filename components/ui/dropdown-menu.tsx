"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export function DropdownMenu({ trigger, children }: { trigger: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)}>{trigger}</button>
      {open ? <div className={cn("absolute right-0 z-50 mt-2 min-w-40 rounded-md border bg-white p-1 shadow-md")}>{children}</div> : null}
    </div>
  );
}

export function DropdownMenuItem({ children }: { children: ReactNode }) {
  return <div className="cursor-pointer rounded px-3 py-2 text-sm hover:bg-muted">{children}</div>;
}
