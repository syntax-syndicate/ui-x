import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Separator } from "@/registry/new-york/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/components/sortable"
      className="group mb-2 inline-flex items-center px-0.5 text-sm font-medium focus-visible:outline-none"
    >
      <Sparkles className="size-4 fill-transparent transition-colors group-hover:fill-foreground group-focus-visible:fill-foreground" />{" "}
      <Separator orientation="vertical" className="mx-2 h-4" />
      <span className="underline-offset-4 group-hover:underline group-focus-visible:underline">
        New Sortable utility component
      </span>
      <ArrowRight className="ml-1 size-4 transition group-hover:translate-x-1 group-focus-visible:translate-x-1" />
    </Link>
  )
}
