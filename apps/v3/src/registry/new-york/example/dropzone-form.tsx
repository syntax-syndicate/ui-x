"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { X } from "lucide-react"
import prettyBytes from "pretty-bytes"
import { ErrorCode } from "react-dropzone"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/registry/new-york/hooks/use-toast"
import { Button } from "@/registry/new-york/ui/button"
import {
  Dropzone,
  DropzoneDescription,
  DropzoneInput,
  DropzoneTitle,
  DropzoneUploadIcon,
  DropzoneZone,
} from "@/registry/new-york/ui/dropzone"
import {
  FileList,
  FileListAction,
  FileListDescription,
  FileListHeader,
  FileListIcon,
  FileListInfo,
  FileListItem,
  FileListName,
  FileListSize,
} from "@/registry/new-york/ui/file-list"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york/ui/form"

// 1 MB
const MAX_FILE_SIZE = 1e6

const FormSchema = z.object({
  files: z
    .array(
      z.object({
        file: z
          .instanceof(File)
          .refine(
            (file) => file.size <= MAX_FILE_SIZE,
            "File exceed max file size"
          ),
      })
    )
    .min(1, { message: "Minimum one file is required." }),
})

export default function DropzoneForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      files: [],
    },
  })
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "files",
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[40rem] space-y-6"
      >
        <Dropzone
          maxSize={MAX_FILE_SIZE}
          onDropAccepted={(acceptedFiles) =>
            append(acceptedFiles.map((file) => ({ file })))
          }
          onDropRejected={(fileRejections) => {
            fileRejections.forEach((fileRejection) => {
              if (
                fileRejection.errors.some(
                  (err) => err.code === ErrorCode.FileTooLarge
                )
              ) {
                toast({
                  variant: "destructive",
                  title: "File size too large.",
                  description: `File '${fileRejection.file.name}' is too large.`,
                })
              }
            })
          }}
        >
          {({ maxSize }) => (
            <FormField
              control={form.control}
              name="files"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File upload</FormLabel>
                  <DropzoneZone className="flex justify-center">
                    <FormControl>
                      <DropzoneInput
                        disabled={field.disabled}
                        name={field.name}
                        onBlur={field.onBlur}
                        ref={field.ref}
                      />
                    </FormControl>
                    <div className="flex items-center gap-6">
                      <DropzoneUploadIcon />
                      <div className="grid gap-0.5">
                        <DropzoneTitle>
                          Browse to upload your file
                        </DropzoneTitle>
                        <DropzoneDescription>
                          {`Maximum file size: ${prettyBytes(maxSize ?? 0)}`}
                        </DropzoneDescription>
                      </div>
                    </div>
                  </DropzoneZone>
                  <FormDescription>Drag and drop is supported.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </Dropzone>
        {!!fields.length && (
          <div className="grid gap-4">
            <h6 className="font-semibold leading-none tracking-tight">{`Files (${fields.length})`}</h6>
            <FileList>
              {fields.map((field, index) => (
                <FileListItem key={field.id}>
                  <FileListHeader>
                    <FileListIcon />
                    <FileListInfo>
                      <FileListName>{field.file.name}</FileListName>
                      <FileListDescription>
                        <FileListSize>{field.file.size}</FileListSize>
                      </FileListDescription>
                    </FileListInfo>
                    <FileListAction onClick={() => remove(index)}>
                      <X />
                      <span className="sr-only">Remove</span>
                    </FileListAction>
                  </FileListHeader>
                </FileListItem>
              ))}
            </FileList>
          </div>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
