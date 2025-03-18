import {
  DateField,
  DateFieldDays,
  DateFieldMonths,
  DateFieldSeparator,
  DateFieldYears,
} from "@/registry/default/ui/date-field"

export default function DateFieldDemo() {
  return (
    <DateField>
      <DateFieldDays />
      <DateFieldSeparator />
      <DateFieldMonths />
      <DateFieldSeparator />
      <DateFieldYears />
    </DateField>
  )
}
