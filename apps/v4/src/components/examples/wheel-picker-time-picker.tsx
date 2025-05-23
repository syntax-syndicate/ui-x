"use client";

import { getHours, getMinutes, setHours, setMinutes } from "date-fns";
import { ClockIcon } from "lucide-react";
import * as React from "react";

import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { InputBaseAdornmentButton } from "@/registry/new-york/ui/input-base";
import {
  TimeField,
  TimeFieldAmPm,
  TimeFieldHours,
  TimeFieldMinutes,
  TimeFieldSeconds,
  TimeFieldSeparator,
} from "@/registry/new-york/ui/time-field";
import {
  WheelPicker,
  WheelPickerOption,
  WheelPickerWrapper,
} from "@/registry/new-york/ui/wheel-picker";

const hours: WheelPickerOption[] = Array.from({ length: 24 }, (_, i) => ({
  value: i.toString(),
  label: i.toString().padStart(2, "0"),
}));

const minutes: WheelPickerOption[] = Array.from({ length: 60 }, (_, i) => ({
  value: i.toString(),
  label: i.toString().padStart(2, "0"),
}));

const periods: WheelPickerOption[] = [
  { value: "AM", label: "AM" },
  { value: "PM", label: "PM" },
];

export default function WheelPickerTimePicker() {
  const [date, setDate] = React.useState(new Date());

  const hour = getHours(date);
  const minute = getMinutes(date);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;

  return (
    <Popover>
      <PopoverAnchor>
        <TimeField
          hour12
          value={date}
          onValueChange={(value) => setDate(value ?? new Date())}
        >
          <TimeFieldHours />
          <TimeFieldSeparator />
          <TimeFieldMinutes />
          <TimeFieldSeparator />
          <TimeFieldSeconds />
          <TimeFieldAmPm />
          <PopoverTrigger asChild>
            <InputBaseAdornmentButton>
              <ClockIcon />
            </InputBaseAdornmentButton>
          </PopoverTrigger>
        </TimeField>
      </PopoverAnchor>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="border-none p-0 shadow-none"
      >
        <WheelPickerWrapper>
          <WheelPicker
            options={hours.slice(1, 13)}
            value={hour12.toString()}
            onValueChange={(value) => {
              const newHour = parseInt(value) + (period === "PM" ? 12 : 0);
              setDate(setHours(date, newHour));
            }}
          />
          <WheelPicker
            options={minutes}
            value={minute.toString()}
            onValueChange={(value) => {
              setDate(setMinutes(date, parseInt(value)));
            }}
          />
          <WheelPicker
            options={periods}
            value={period}
            onValueChange={(value) => {
              const newHour = (hour % 12) + (value === "PM" ? 12 : 0);
              setDate(setHours(date, newHour));
            }}
          />
        </WheelPickerWrapper>
      </PopoverContent>
    </Popover>
  );
}
