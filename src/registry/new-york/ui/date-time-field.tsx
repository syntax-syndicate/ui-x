import * as React from "react"

import { cn } from "@/lib/utils"
import {
  DateFieldDays,
  DateFieldMonths,
  DateFieldYears,
} from "@/registry/new-york/ui/date-field"
import * as DateTimeFieldPrimitive from "@/registry/new-york/ui/date-time-field-primitive"
import { InputBase } from "@/registry/new-york/ui/input-base"
import {
  TimeFieldAmPm,
  TimeFieldHours,
  TimeFieldMinutes,
  TimeFieldSeconds,
} from "@/registry/new-york/ui/time-field"

export const DateTimeField = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DateTimeFieldPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <DateTimeFieldPrimitive.Root ref={ref} asChild {...props}>
    <InputBase className={cn("gap-0.5", className)}>{children}</InputBase>
  </DateTimeFieldPrimitive.Root>
))
DateTimeField.displayName = "DateTimeField"

export const DateTimeFieldSeparator = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DateTimeFieldPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DateTimeFieldPrimitive.Separator
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
))
DateTimeFieldSeparator.displayName = "DateTimeFieldSeparator"

export const DateTimeFieldYears = DateFieldYears

export const DateTimeFieldMonths = DateFieldMonths

export const DateTimeFieldDays = DateFieldDays

export const DateTimeFieldHours = TimeFieldHours

export const DateTimeFieldMinutes = TimeFieldMinutes

export const DateTimeFieldSeconds = TimeFieldSeconds

export const DateTimeFieldAmPm = TimeFieldAmPm
