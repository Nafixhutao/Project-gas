import { cn } from "@/lib/utils";
import * as React from "react";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-semibold bg-muted text-muted-foreground", className)} {...props} />;
}
