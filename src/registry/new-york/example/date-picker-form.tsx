"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DateRange } from "react-day-picker"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/registry/new-york/hooks/use-toast"
import { Button } from "@/registry/new-york/ui/button"
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerContent,
  DatePickerInput,
} from "@/registry/new-york/ui/date-picker"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form"

const FormSchema = z.object({
  eventPeriod: z
    .object(
      {
        from: z.date().optional(),
        to: z.date().optional(),
      },
      {
        required_error: "Event period is required ",
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

export default function DatePickerForm() {
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
              <DatePicker
                mode="range"
                value={field.value as DateRange}
                onValueChange={field.onChange}
              >
                <FormControl>
                  <DatePickerInput className="w-[280px]" />
                </FormControl>
                <DatePickerContent>
                  <DatePickerCalendar hideNavigation captionLayout="dropdown" />
                </DatePickerContent>
              </DatePicker>
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
