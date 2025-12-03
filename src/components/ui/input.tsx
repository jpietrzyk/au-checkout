import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 px-3 py-2 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          // left icon padding helper (apply 'has-left-icon' on parent if icon is present)
          "[&:has(+_i)]:pl-10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
