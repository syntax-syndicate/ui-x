import * as React from "react"

import { cn } from "@/lib/utils"
import * as DateTimeFieldPrimitive from "@/registry/default/ui/date-time-field-primitive"
import {
  InputBase,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/default/ui/input-base"

export const DateField = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DateTimeFieldPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <DateTimeFieldPrimitive.Root ref={ref} asChild {...props}>
    <InputBase className={cn("gap-0.5", className)}>{children}</InputBase>
  </DateTimeFieldPrimitive.Root>
))
DateField.displayName = "DateField"

export const DateFieldSeparator = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DateTimeFieldPrimitive.Separator>
>(({ children = "/", className, ...props }, ref) => (
  <DateTimeFieldPrimitive.Separator
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  >
    {children}
  </DateTimeFieldPrimitive.Separator>
))
DateFieldSeparator.displayName = "DateFieldSeparator"

export const DateFieldYears = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.DateTimeFieldYears>,
  React.ComponentPropsWithoutRef<
    typeof DateTimeFieldPrimitive.DateTimeFieldYears
  >
>(({ placeholder = "yyyy", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeFieldPrimitive.DateTimeFieldYears
      ref={ref}
      asChild
      placeholder={placeholder}
      {...props}
    >
      <InputBaseInput
        className={cn(
          "box-content h-fit max-w-[calc(4ch_+_0.5rem)] flex-initial rounded-sm px-1 tabular-nums focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground",
          className
        )}
      />
    </DateTimeFieldPrimitive.DateTimeFieldYears>
  </InputBaseControl>
))
DateFieldYears.displayName = "DateFieldYears"

export const DateFieldMonths = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.DateTimeFieldMonths>,
  React.ComponentPropsWithoutRef<
    typeof DateTimeFieldPrimitive.DateTimeFieldMonths
  >
>(({ placeholder = "mm", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeFieldPrimitive.DateTimeFieldMonths
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
    </DateTimeFieldPrimitive.DateTimeFieldMonths>
  </InputBaseControl>
))
DateFieldMonths.displayName = "DateFieldMonths"

export const DateFieldDays = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldPrimitive.DateTimeFieldDays>,
  React.ComponentPropsWithoutRef<
    typeof DateTimeFieldPrimitive.DateTimeFieldDays
  >
>(({ placeholder = "dd", className, ...props }, ref) => (
  <InputBaseControl>
    <DateTimeFieldPrimitive.DateTimeFieldDays
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
    </DateTimeFieldPrimitive.DateTimeFieldDays>
  </InputBaseControl>
))
DateFieldDays.displayName = "DateFieldDays"
