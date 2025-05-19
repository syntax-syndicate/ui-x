"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { LockKeyhole } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/registry/default/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form"
import {
  PasswordInput,
  PasswordInputAdornment,
  PasswordInputAdornmentToggle,
  PasswordInputInput,
} from "@/registry/default/ui/password-input"

const FormSchema = z
  .object({
    password: z.string().min(12, {
      message: "Password must be at least 12 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export default function PasswordInputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <PasswordInput>
                <PasswordInputAdornment>
                  <LockKeyhole />
                </PasswordInputAdornment>
                <FormControl>
                  <PasswordInputInput
                    autoComplete="new-password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <PasswordInputAdornmentToggle />
              </PasswordInput>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <PasswordInput>
                <PasswordInputAdornment>
                  <LockKeyhole />
                </PasswordInputAdornment>
                <FormControl>
                  <PasswordInputInput
                    autoComplete="new-password"
                    placeholder="Confirm Password"
                    {...field}
                  />
                </FormControl>
                <PasswordInputAdornmentToggle />
              </PasswordInput>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
