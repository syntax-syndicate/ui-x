import * as React from "react"

import { cn } from "@/lib/utils"
import {
  DateTimeFieldAmPm,
  DateTimeFieldDays,
  DateTimeFieldHours,
  DateTimeFieldMinutes,
  DateTimeFieldMonths,
  DateTimeFieldSeconds,
  DateTimeFieldSeparator,
  DateTimeFieldYears,
} from "@/registry/new-york/ui/date-time-field"
import * as DateTimeRangeFieldPrimitive from "@/registry/new-york/ui/date-time-range-field-primitive"
import { InputBase } from "@/registry/new-york/ui/input-base"

export const DateTimeRangeField = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <DateTimeRangeFieldPrimitive.Root ref={ref} asChild {...props}>
    <InputBase className={cn("gap-1.5", className)}>{children}</InputBase>
  </DateTimeRangeFieldPrimitive.Root>
))
DateTimeRangeField.displayName = "DateTimeRangeField"

export const DateTimeRangeFieldFrom = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.From>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.From>
>(({ className, ...props }, ref) => (
  <DateTimeRangeFieldPrimitive.From
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  />
))
DateTimeRangeFieldFrom.displayName = "DateTimeRangeFieldFrom"

export const DateTimeRangeFieldTo = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.To>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.To>
>(({ className, ...props }, ref) => (
  <DateTimeRangeFieldPrimitive.To
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  />
))
DateTimeRangeFieldTo.displayName = "DateTimeRangeFieldTo"

export const DateTimeRangeFieldSeparator = DateTimeFieldSeparator

export const DateTimeRangeFieldYears = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Years>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Years>
>((props, ref) => (
  <DateTimeRangeFieldPrimitive.Years ref={ref} asChild {...props}>
    <DateTimeFieldYears />
  </DateTimeRangeFieldPrimitive.Years>
))
DateTimeRangeFieldYears.displayName = "DateTimeRangeFieldYears"

export const DateTimeRangeFieldMonths = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Months>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Months>
>((props, ref) => (
  <DateTimeRangeFieldPrimitive.Months ref={ref} asChild {...props}>
    <DateTimeFieldMonths />
  </DateTimeRangeFieldPrimitive.Months>
))
DateTimeRangeFieldMonths.displayName = "DateTimeRangeFieldMonths"

export const DateTimeRangeFieldDays = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Days>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Days>
>((props, ref) => (
  <DateTimeRangeFieldPrimitive.Days ref={ref} asChild {...props}>
    <DateTimeFieldDays />
  </DateTimeRangeFieldPrimitive.Days>
))
DateTimeRangeFieldDays.displayName = "DateTimeRangeFieldDays"

export const DateTimeRangeFieldHours = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Hours>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Hours>
>((props, ref) => (
  <DateTimeRangeFieldPrimitive.Hours ref={ref} asChild {...props}>
    <DateTimeFieldHours />
  </DateTimeRangeFieldPrimitive.Hours>
))
DateTimeRangeFieldHours.displayName = "DateTimeRangeFieldHours"

export const DateTimeRangeFieldMinutes = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Minutes>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Minutes>
>((props, ref) => (
  <DateTimeRangeFieldPrimitive.Minutes ref={ref} asChild {...props}>
    <DateTimeFieldMinutes />
  </DateTimeRangeFieldPrimitive.Minutes>
))
DateTimeRangeFieldMinutes.displayName = "DateTimeRangeFieldMinutes"

export const DateTimeRangeFieldSeconds = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Seconds>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Seconds>
>((props, ref) => (
  <DateTimeRangeFieldPrimitive.Seconds ref={ref} asChild {...props}>
    <DateTimeFieldSeconds />
  </DateTimeRangeFieldPrimitive.Seconds>
))
DateTimeRangeFieldSeconds.displayName = "DateTimeRangeFieldSeconds"

export const DateTimeRangeFieldAmPm = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.AmPm>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.AmPm>
>((props, ref) => (
  <DateTimeRangeFieldPrimitive.AmPm ref={ref} asChild {...props}>
    <DateTimeFieldAmPm />
  </DateTimeRangeFieldPrimitive.AmPm>
))
DateTimeRangeFieldAmPm.displayName = "DateTimeRangeFieldAmPm"
