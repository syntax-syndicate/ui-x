import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Virtualizer, VirtualizerHandle } from "virtua"

import { cn } from "@/lib/utils"
import {
  Select,
  SelectItem,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

const items = Array.from({ length: 10000 }, (_, index) => ({
  label: `Item ${index + 1}`,
  value: index.toString(),
}))

export default function VirtualizerSelect() {
  const [value, setValue] = React.useState("")
  const [open, setOpen] = React.useState(false)

  const ref = React.useRef<VirtualizerHandle>(null)

  const activeIndex = React.useMemo(
    () => items.findIndex((item) => item.value === value),
    [value]
  )

  React.useLayoutEffect(() => {
    if (!open || !value || activeIndex === -1) return

    setTimeout(() => {
      // Recover scroll position.
      ref.current?.scrollToIndex(activeIndex, { align: "end" })

      const checkedElement = document.querySelector(
        "[data-radix-select-viewport] [data-state=checked]"
      ) as HTMLElement

      // Recover focus.
      checkedElement?.focus({ preventScroll: true })
    })
  }, [open, value, activeIndex])

  return (
    <Select
      open={open}
      onOpenChange={setOpen}
      value={value}
      onValueChange={setValue}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an item" />
      </SelectTrigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={cn(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
          )}
          position="popper"
        >
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport
            className={cn(
              "p-1",
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            )}
          >
            <Virtualizer
              ref={ref}
              keepMounted={activeIndex !== -1 ? [activeIndex] : undefined}
              overscan={2}
            >
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </Virtualizer>
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </Select>
  )
}
