import * as React from "react"

import {
  DateTimeField,
  DateTimeFieldAmPm,
  DateTimeFieldHours,
  DateTimeFieldMinutes,
  DateTimeFieldSeconds,
  DateTimeFieldSeparator,
} from "@/registry/default/ui/date-time-field"

export const TimeField = DateTimeField

export const TimeFieldSeparator = React.forwardRef<
  React.ElementRef<typeof DateTimeFieldSeparator>,
  React.ComponentPropsWithoutRef<typeof DateTimeFieldSeparator>
>(({ children = ":", ...props }, ref) => (
  <DateTimeFieldSeparator ref={ref} {...props}>
    {children}
  </DateTimeFieldSeparator>
))
TimeFieldSeparator.displayName = "TimeFieldSeparator"

export const TimeFieldHours = DateTimeFieldHours

export const TimeFieldMinutes = DateTimeFieldMinutes

export const TimeFieldSeconds = DateTimeFieldSeconds

export const TimeFieldAmPm = DateTimeFieldAmPm
