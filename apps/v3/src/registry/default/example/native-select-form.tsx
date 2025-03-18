"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/registry/default/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form"
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectPlaceholder,
} from "@/registry/default/ui/native-select"

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

export default function NativeSelectForm() {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <NativeSelect {...field}>
                  <NativeSelectPlaceholder>
                    Select a verified email to display
                  </NativeSelectPlaceholder>
                  <NativeSelectOption value="m@example.com">
                    m@example.com
                  </NativeSelectOption>
                  <NativeSelectOption value="m@google.com">
                    m@google.com
                  </NativeSelectOption>
                  <NativeSelectOption value="m@support.com">
                    m@support.com
                  </NativeSelectOption>
                </NativeSelect>
              </FormControl>
              <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
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
