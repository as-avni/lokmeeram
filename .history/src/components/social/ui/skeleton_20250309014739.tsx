import * as React from "react"

import { cn } from "@/lib/utils"

const Skeleton = React.forwardRef<
  React.HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "animate-pulse rounded-md bg-slate-200 dark:bg-slate-800",
      className
    )}
    {...props}
    ref={ref}
  />
))
Skeleton.displayName = "Skeleton"

export { Skeleton }