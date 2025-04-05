import * as React from "react"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-500 dark:bg-slate-700",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})
Avatar.displayName = "Avatar"

export { Avatar }