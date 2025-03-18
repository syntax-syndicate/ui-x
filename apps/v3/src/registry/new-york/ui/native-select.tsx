import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  InputBase,
  InputBaseAdornment,
  InputBaseControl,
} from "@/registry/new-york/ui/input-base"

export const NativeSelect = React.forwardRef<
  React.ElementRef<"select">,
  React.ComponentPropsWithoutRef<"select">
>(({ className, ...props }, ref) => (
  <InputBase
    className={cn(
      "relative min-h-fit p-0 [&>select]:min-h-9 [&>select]:min-w-40 [&>select]:px-3 [&>select]:py-1",
      className
    )}
  >
    <InputBaseControl>
      <select
        ref={ref}
        className="size-full flex-1 appearance-none bg-transparent text-sm focus:outline-none"
        {...props}
      />
    </InputBaseControl>
    <InputBaseAdornment className="absolute right-0 top-1/2 -translate-y-1/2 pr-3">
      <ChevronDown />
    </InputBaseAdornment>
  </InputBase>
))
NativeSelect.displayName = "NativeSelect"

export const NativeSelectGroup = React.forwardRef<
  React.ElementRef<"optgroup">,
  React.ComponentPropsWithoutRef<"optgroup">
>(({ className, ...props }, ref) => (
  <optgroup
    ref={ref}
    className={cn("bg-popover text-popover-foreground", className)}
    {...props}
  />
))
NativeSelectGroup.displayName = "NativeSelectGroup"

export const NativeSelectOption = React.forwardRef<
  React.ElementRef<"option">,
  React.ComponentPropsWithoutRef<"option">
>(({ className, ...props }, ref) => (
  <option
    ref={ref}
    className={cn("bg-popover text-popover-foreground", className)}
    {...props}
  />
))
NativeSelectOption.displayName = "NativeSelectOption"

export const NativeSelectPlaceholder = React.forwardRef<
  React.ElementRef<"option">,
  React.ComponentPropsWithoutRef<"option">
>(
  (
    { value = "", disabled = true, selected = true, hidden = true, ...props },
    ref
  ) => (
    <NativeSelectOption
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
