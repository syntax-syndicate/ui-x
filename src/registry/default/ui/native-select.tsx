import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  InputBase,
  InputBaseAdornment,
  InputBaseControl,
} from "@/registry/default/ui/input-base"

export const NativeSelect = React.forwardRef<
  React.ElementRef<"select">,
  React.ComponentPropsWithoutRef<"select">
>(({ className, ...props }, ref) => (
  <InputBase className="relative min-h-fit p-0">
    <InputBaseControl>
      <select
        ref={ref}
        className={cn(
          "size-full min-h-10 min-w-40 flex-1 appearance-none bg-transparent px-3 py-2 text-sm focus:outline-none",
          className
        )}
        {...props}
      />
    </InputBaseControl>
    <InputBaseAdornment className="absolute right-0 top-1/2 -translate-y-1/2 pr-3">
      <ChevronDown />
    </InputBaseAdornment>
  </InputBase>
))
NativeSelect.displayName = "NativeSelect"

export const NativeSelectOption = React.forwardRef<
  React.ElementRef<"option">,
  React.ComponentPropsWithoutRef<"option">
>((props, ref) => <option ref={ref} {...props} />)
NativeSelectOption.displayName = "NativeSelectOption"

export const NativeSelectPlaceholder = React.forwardRef<
  React.ElementRef<"option">,
  React.ComponentPropsWithoutRef<"option">
>(
  (
    { value = "", disabled = true, selected = true, hidden = true, ...props },
    ref
  ) => (
    <option
      ref={ref}
      value={value}
      disabled={disabled}
      selected={selected}
      hidden={hidden}
      {...props}
    />
  )
)
NativeSelectPlaceholder.displayName = "NativeSelectPlaceholder"
