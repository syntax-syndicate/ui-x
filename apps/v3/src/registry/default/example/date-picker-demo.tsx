import {
  DatePicker,
  DatePickerCalendar,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/default/ui/date-picker"

export default function DatePickerDemo() {
  return (
    <DatePicker mode="single">
      <DatePickerTrigger className="w-[280px]">
        <DatePickerValue placeholder="Pick a date" />
      </DatePickerTrigger>
      <DatePickerContent>
        <DatePickerCalendar />
      </DatePickerContent>
    </DatePicker>
  )
}
