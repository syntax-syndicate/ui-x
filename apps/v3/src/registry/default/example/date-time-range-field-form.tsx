"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DateRange } from "react-day-picker"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/registry/default/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"
import {
  DateTimeRangeField,
  DateTimeRangeFieldDays,
  DateTimeRangeFieldFrom,
  DateTimeRangeFieldMonths,
  DateTimeRangeFieldSeparator,
  DateTimeRangeFieldTo,
  DateTimeRangeFieldYears,
} from "@/registry/default/ui/date-time-range-field"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form"

const FormSchema = z.object({
  eventPeriod: z
    .object(
      {
        from: z.date().optional(),
        to: z.date().optional(),
      },
      {
        required_error: "Event period is required.",
      }
    )
    .superRefine((data, ctx) => {
      if (!data.from || !data.to) {
        ctx.addIssue({
          message: "Event period is required.",
          code: "custom",
        })
      }
    }),
})

export default function DateTimeRangeFieldForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="eventPeriod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event period</FormLabel>
              <DateTimeRangeField
                value={field.value as DateRange}
                onValueChange={field.onChange}
              >
                <DateTimeRangeFieldFrom>
                  <FormControl>
                    <DateTimeRangeFieldDays />
                  </FormControl>
                  <DateTimeRangeFieldSeparator>/</DateTimeRangeFieldSeparator>
                  <DateTimeRangeFieldMonths />
                  <DateTimeRangeFieldSeparator>/</DateTimeRangeFieldSeparator>
                  <DateTimeRangeFieldYears />
                </DateTimeRangeFieldFrom>
                <DateTimeRangeFieldSeparator>-</DateTimeRangeFieldSeparator>
                <DateTimeRangeFieldTo>
                  <DateTimeRangeFieldDays />
                  <DateTimeRangeFieldSeparator>/</DateTimeRangeFieldSeparator>
                  <DateTimeRangeFieldMonths />
                  <DateTimeRangeFieldSeparator>/</DateTimeRangeFieldSeparator>
                  <DateTimeRangeFieldYears />
                </DateTimeRangeFieldTo>
              </DateTimeRangeField>
              <FormDescription>
                Schedule your event by selecting a start and end date.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
