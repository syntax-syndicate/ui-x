import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { Virtualizer } from "virtua"

import { cn } from "@/lib/utils"
import { ScrollBar } from "@/registry/new-york/ui/scroll-area"
import { Separator } from "@/registry/new-york/ui/separator"

const tags = Array.from({ length: 10000 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function VirtualizerScrollArea() {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  return (
    <ScrollAreaPrimitive.Root
      className={cn("relative overflow-hidden", "h-72 w-48 rounded-md border")}
    >
      <ScrollAreaPrimitive.Viewport
        ref={scrollRef}
        className="size-full rounded-[inherit]"
      >
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          <Virtualizer startMargin={30} scrollRef={scrollRef}>
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </Virtualizer>
        </div>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}
