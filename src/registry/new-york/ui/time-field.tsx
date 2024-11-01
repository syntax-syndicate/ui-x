import * as React from "react"

import { cn } from "@/lib/utils"
import * as DateTimeFieldPrimitive from "@/registry/new-york/ui/date-time-field-primitive"
import {
  InputBase,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/new-york/ui/input-base"

export const TimeField = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DateTimeFieldPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <DateTimeFieldPrimitive.Root ref={ref} asChild {...props}>
    <InputBase className={cn("gap-0.5", className)}>{children}</InputBase>
  </DateTimeFieldPrimitive.Root>
))
TimeField.displayName = "TimeField"

export const TimeFieldSeparator = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DateTimeFieldPrimitive.Separator>
>(({ children = ":", className, ...props }, ref) => (
  <DateTimeFieldPrimitive.Separator
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  >
    {children}
  </DateTimeFieldPrimitive.Separator>
))
TimeFieldSeparator.displayName = "TimeFieldSeparator"

export const TimeFieldHours = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.DateTimeFieldHours>,
  React.ComponentPropsWithoutRef<
    typeof DateTimeFieldPrimitive.DateTimeFieldHours
  >
>(({ placeholder = "--", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeFieldPrimitive.DateTimeFieldHours
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-1 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeFieldPrimitive.DateTimeFieldHours>
  </InputBaseControl>
))
TimeFieldHours.displayName = "TimeFieldHours"

export const TimeFieldMinutes = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.DateTimeFieldMinutes>,
  React.ComponentPropsWithoutRef<
    typeof DateTimeFieldPrimitive.DateTimeFieldMinutes
  >
>(({ placeholder = "--", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeFieldPrimitive.DateTimeFieldMinutes
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-1 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeFieldPrimitive.DateTimeFieldMinutes>
  </InputBaseControl>
))
TimeFieldMinutes.displayName = "TimeFieldMinutes"

export const TimeFieldSeconds = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.DateTimeFieldSeconds>,
  React.ComponentPropsWithoutRef<
    typeof DateTimeFieldPrimitive.DateTimeFieldSeconds
  >
>(({ placeholder = "--", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeFieldPrimitive.DateTimeFieldSeconds
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-1 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeFieldPrimitive.DateTimeFieldSeconds>
  </InputBaseControl>
))
TimeFieldSeconds.displayName = "TimeFieldSeconds"

export const TimeFieldAmPm = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.DateTimeFieldAmPm>,
  React.ComponentPropsWithoutRef<
    typeof DateTimeFieldPrimitive.DateTimeFieldAmPm
  >
>(({ placeholder = "--", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeFieldPrimitive.DateTimeFieldAmPm
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-1 text-center focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeFieldPrimitive.DateTimeFieldAmPm>
  </InputBaseControl>
))
TimeFieldAmPm.displayName = "TimeFieldAmPm"
