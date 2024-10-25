"use client"

import * as React from "react"

import { Calendar } from "@/registry/default/ui/calendar"

export default function CalendarMultiple() {
  const [date, setDate] = React.useState<Date[] | undefined>([])

  return (
    <Calendar
      mode="multiple"
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  )
}
