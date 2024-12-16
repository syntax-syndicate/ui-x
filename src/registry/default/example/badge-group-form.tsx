import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/registry/default/hooks/use-toast"
import { BadgeGroup, BadgeGroupItem } from "@/registry/default/ui/badge-group"
import { Button } from "@/registry/default/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form"

const FormSchema = z.object({
  options: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .array(),
  selected: z.string().array(),
})

const flavours = [
  {
    label: "Chocolate",
    value: "chocolate",
  },
  {
    label: "Mint",
    value: "mint",
  },
  {
    label: "Strawberry",
    value: "strawberry",
  },
  {
    label: "Vanilla",
    value: "vanilla",
  },
]

export default function BadgeGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      options: flavours,
      selected: flavours.map((option) => option.value).slice(0, 2),
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

  const options = form.watch("options")

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="selected"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ice cream flavor</FormLabel>
              <FormControl>
                <BadgeGroup
                  type="multiple"
                  value={field.value}
                  onValueChange={field.onChange}
                  onRemove={(value) => {
                    form.setValue(
                      "options",
                      options.filter((option) => !value.includes(option.value))
                    )
                    field.onChange(
                      field.value.filter(
                        (selected) => !value.includes(selected)
                      )
                    )
                  }}
                >
                  {options.map((option) => (
                    <BadgeGroupItem key={option.value} value={option.value}>
                      {option.label}
                    </BadgeGroupItem>
                  ))}
                </BadgeGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
