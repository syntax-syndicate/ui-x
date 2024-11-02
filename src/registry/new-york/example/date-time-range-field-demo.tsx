import {
  DateTimeRangeField,
  DateTimeRangeFieldDays,
  DateTimeRangeFieldFrom,
  DateTimeRangeFieldMonths,
  DateTimeRangeFieldSeparator,
  DateTimeRangeFieldTo,
  DateTimeRangeFieldYears,
} from "@/registry/new-york/ui/date-time-range-field"

export default function DateTimeRangeFieldDemo() {
  return (
    <DateTimeRangeField>
      <DateTimeRangeFieldFrom>
        <DateTimeRangeFieldDays />
        <DateTimeRangeFieldSeparator>/</DateTimeRangeFieldSeparator>
        <DateTimeRangeFieldMonths />
        <DateTimeRangeFieldSeparator>/</DateTimeRangeFieldSeparator>
        <DateTimeRangeFieldYears />
      </DateTimeRangeFieldFrom>

      <DateTimeRangeFieldSeparator>-</DateTimeRangeFieldSeparator>

      <DateTimeRangeFieldTo>
        <DateTimeRangeFieldDays />
        <DateTimeRangeFieldSeparator>/</DateTimeRangeFieldSeparator>
        <DateTimeRangeFieldMonths />
        <DateTimeRangeFieldSeparator>/</DateTimeRangeFieldSeparator>
        <DateTimeRangeFieldYears />
      </DateTimeRangeFieldTo>
    </DateTimeRangeField>
  )
}
