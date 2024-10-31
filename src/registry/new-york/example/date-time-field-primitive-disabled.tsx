import * as DateTimeFieldPrimitive from "@/registry/new-york/ui/date-time-field-primitive"

export default function DateTimeFieldPrimitiveDisabled() {
  return (
    <DateTimeFieldPrimitive.Root disabled>
      <DateTimeFieldPrimitive.DateTimeFieldSegmentYears placeholder="yyyy" />
      <DateTimeFieldPrimitive.SegmentSeparator>
        /
      </DateTimeFieldPrimitive.SegmentSeparator>
      <DateTimeFieldPrimitive.DateTimeFieldSegmentMonths placeholder="mm" />
      <DateTimeFieldPrimitive.SegmentSeparator>
        /
      </DateTimeFieldPrimitive.SegmentSeparator>
      <DateTimeFieldPrimitive.DateTimeFieldSegmentDays placeholder="dd" />
      <DateTimeFieldPrimitive.SegmentSeparator>
        ·
      </DateTimeFieldPrimitive.SegmentSeparator>
      <DateTimeFieldPrimitive.DateTimeFieldSegmentHours placeholder="hh" />
      <DateTimeFieldPrimitive.SegmentSeparator>
        :
      </DateTimeFieldPrimitive.SegmentSeparator>
      <DateTimeFieldPrimitive.DateTimeFieldSegmentMinutes placeholder="mm" />
      <DateTimeFieldPrimitive.SegmentSeparator>
        :
      </DateTimeFieldPrimitive.SegmentSeparator>
      <DateTimeFieldPrimitive.DateTimeFieldSegmentSeconds placeholder="ss" />
      <DateTimeFieldPrimitive.DateTimeFieldSegmentAmPm placeholder="am/pm" />
    </DateTimeFieldPrimitive.Root>
  )
}
