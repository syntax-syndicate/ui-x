"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/registry/default/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"
import {
  DateTimeField,
  DateTimeFieldAmPm,
  DateTimeFieldDays,
  DateTimeFieldHours,
  DateTimeFieldMinutes,
  DateTimeFieldMonths,
  DateTimeFieldSeconds,
  DateTimeFieldSeparator,
  DateTimeFieldYears,
} from "@/registry/default/ui/date-time-field"
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
  eventDate: z.date({
    required_error: "Event date is required.",
  }),
})

export default function DateTimeFieldForm() {
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
          name="eventDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event date</FormLabel>
              <DateTimeField value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <DateTimeFieldDays />
                </FormControl>
                <DateTimeFieldSeparator>/</DateTimeFieldSeparator>
                <DateTimeFieldMonths />
                <DateTimeFieldSeparator>/</DateTimeFieldSeparator>
                <DateTimeFieldYears />
                <DateTimeFieldSeparator>·</DateTimeFieldSeparator>
                <DateTimeFieldHours />
                <DateTimeFieldSeparator>:</DateTimeFieldSeparator>
                <DateTimeFieldMinutes />
                <DateTimeFieldSeparator>:</DateTimeFieldSeparator>
                <DateTimeFieldSeconds />
                <DateTimeFieldAmPm />
              </DateTimeField>
              <FormDescription>
                Schedule your event by selecting a date and time.
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
