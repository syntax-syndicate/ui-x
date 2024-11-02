import * as React from "react"

import { cn } from "@/lib/utils"
import * as DateTimeRangeFieldPrimitive from "@/registry/new-york/ui/date-time-range-field-primitive"
import {
  InputBase,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/new-york/ui/input-base"

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

export const DateTimeRangeFieldSeparator = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DateTimeRangeFieldPrimitive.Separator
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
))
DateTimeRangeFieldSeparator.displayName = "DateTimeRangeFieldSeparator"

export const DateTimeRangeFieldYears = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Years>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Years>
>(({ placeholder = "yyyy", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeRangeFieldPrimitive.Years
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(4ch_+_0.5rem)] flex-initial rounded-sm px-0.5 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeRangeFieldPrimitive.Years>
  </InputBaseControl>
))
DateTimeRangeFieldYears.displayName = "DateTimeRangeFieldYears"

export const DateTimeRangeFieldMonths = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Months>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Months>
>(({ placeholder = "mm", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeRangeFieldPrimitive.Months
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-0.5 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeRangeFieldPrimitive.Months>
  </InputBaseControl>
))
DateTimeRangeFieldMonths.displayName = "DateTimeRangeFieldMonths"

export const DateTimeRangeFieldDays = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Days>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Days>
>(({ placeholder = "dd", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeRangeFieldPrimitive.Days
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-0.5 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeRangeFieldPrimitive.Days>
  </InputBaseControl>
))
DateTimeRangeFieldDays.displayName = "DateTimeRangeFieldDays"

export const DateTimeRangeFieldHours = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Hours>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Hours>
>(({ placeholder = "--", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeRangeFieldPrimitive.Hours
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-0.5 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeRangeFieldPrimitive.Hours>
  </InputBaseControl>
))
DateTimeRangeFieldHours.displayName = "DateTimeRangeFieldHours"

export const DateTimeRangeFieldMinutes = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Minutes>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Minutes>
>(({ placeholder = "--", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeRangeFieldPrimitive.Minutes
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-0.5 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeRangeFieldPrimitive.Minutes>
  </InputBaseControl>
))
DateTimeRangeFieldMinutes.displayName = "DateTimeRangeFieldMinutes"

export const DateTimeRangeFieldSeconds = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.Seconds>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.Seconds>
>(({ placeholder = "--", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeRangeFieldPrimitive.Seconds
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-0.5 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeRangeFieldPrimitive.Seconds>
  </InputBaseControl>
))
DateTimeRangeFieldSeconds.displayName = "DateTimeRangeFieldSeconds"

export const DateTimeRangeFieldAmPm = React.forwardRef<
  React.ElementRef<typeof DateTimeRangeFieldPrimitive.AmPm>,
  React.ComponentPropsWithoutRef<typeof DateTimeRangeFieldPrimitive.AmPm>
>(({ placeholder = "--", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeRangeFieldPrimitive.AmPm
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(2ch_+_0.5rem)] flex-initial rounded-sm px-0.5 text-center focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeRangeFieldPrimitive.AmPm>
  </InputBaseControl>
))
DateTimeRangeFieldAmPm.displayName = "DateTimeRangeFieldAmPm"
