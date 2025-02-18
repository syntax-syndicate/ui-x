import * as React from "react"
import { Virtualizer } from "virtua"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
} from "@/registry/default/ui/combobox"

const items = Array.from({ length: 10000 }, (_, index) => ({
  label: `Item ${index + 1}`,
  value: index.toString(),
}))

export default function VirtualizerCombobox() {
  const [inputValue, setInputValue] = React.useState("")
  const [open, setOpen] = React.useState(false)

  const scrollRef = React.useRef<HTMLDivElement>(null)

  const filtered = React.useMemo(() => {
    if (!inputValue) {
      return items
    }

    return items.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    )
  }, [inputValue])

  return (
    <Combobox
      type="single"
      open={open}
      onOpenChange={setOpen}
      inputValue={inputValue}
      onInputValueChange={setInputValue}
      shouldFilter={false}
    >
      <ComboboxInput placeholder="Search item..." />
      <ComboboxContent ref={scrollRef}>
        {filtered.length === 0 && <ComboboxEmpty>No item found.</ComboboxEmpty>}
        {filtered.length > 0 && (
          <ComboboxGroup heading="Items">
            <Virtualizer startMargin={32} scrollRef={scrollRef}>
              {filtered.map((item) => (
                <ComboboxItem key={item.value} value={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </Virtualizer>
          </ComboboxGroup>
        )}
      </ComboboxContent>
    </Combobox>
  )
}
