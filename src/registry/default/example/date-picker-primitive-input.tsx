import * as DatePickerPrimitive from "@/registry/new-york/ui/date-picker-primitive"

export default function DatePickerPrimitiveInput() {
  return (
    <DatePickerPrimitive.Root mode="single">
      <DatePickerPrimitive.Anchor>
        <DatePickerPrimitive.Input />
        <DatePickerPrimitive.Clear>&#215;</DatePickerPrimitive.Clear>
        <DatePickerPrimitive.Trigger>&#8595;</DatePickerPrimitive.Trigger>
      </DatePickerPrimitive.Anchor>
      <DatePickerPrimitive.Portal>
        <DatePickerPrimitive.Content>
          <DatePickerPrimitive.Calendar />
        </DatePickerPrimitive.Content>
      </DatePickerPrimitive.Portal>
    </DatePickerPrimitive.Root>
  )
}
