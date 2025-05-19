"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/registry/default/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"
import {
  ControlGroup,
  ControlGroupItem,
} from "@/registry/default/ui/control-group"
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
  InputBase,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/default/ui/input-base"

const FormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string(),
  })
  .refine(({ lastName }) => z.string().min(2).safeParse(lastName).success, {
    message: "Last name must be at least 2 characters.",
    path: ["firstName"],
  })

export default function ControlGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <ControlGroup>
                <ControlGroupItem>
                  <InputBase>
                    <InputBaseControl>
                      <FormControl>
                        <InputBaseInput placeholder="First Name" {...field} />
                      </FormControl>
                    </InputBaseControl>
                  </InputBase>
                </ControlGroupItem>
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <ControlGroupItem>
                      <InputBase>
                        <InputBaseControl>
                          <InputBaseInput placeholder="Last Name" {...field} />
                        </InputBaseControl>
                      </InputBase>
                    </ControlGroupItem>
                  )}
                />
                <ControlGroupItem>
                  <Button type="submit">Submit</Button>
                </ControlGroupItem>
              </ControlGroup>
              <FormDescription>
                Enter your legal name as it appears on your government-issued
                ID.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
