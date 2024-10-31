import * as React from "react"
import { useComposedRefs } from "@radix-ui/react-compose-refs"
import { Primitive } from "@radix-ui/react-primitive"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { Options, useTimescape } from "timescape/react"

export type DateTimeFieldContextProps = {
  disabled?: boolean
} & Omit<ReturnType<typeof useTimescape>, "update" | "_manager">

const DateTimeFieldContext = React.createContext<DateTimeFieldContextProps>({
  getInputProps: () => ({ ref: () => null }),
  getRootProps: () => ({ ref: () => null }),
  options: {},
  disabled: false,
})

export const useDateTimeFieldContext = () =>
  React.useContext(DateTimeFieldContext)

export interface DateTimeFieldProps
  extends Omit<Options, "date" | "onChangeDate">,
    Omit<
      React.ComponentPropsWithoutRef<typeof Primitive.div>,
      "value" | "defaultValue"
    > {
  value?: Date | null
  defaultValue?: Date
  onValueChange?: (value: Date | null) => void
  disabled?: boolean
}

export const DateTimeField = React.forwardRef<
  React.ElementRef<typeof Primitive.div>,
  DateTimeFieldProps
>(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      disabled,
      digits,
      hour12,
      maxDate,
      minDate,
      snapToStep,
      wheelControl,
      wrapAround,
      children,
    },
    ref
  ) => {
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange,
    })

    const { update, ...timescape } = useTimescape({
      date: !value ? undefined : value, // This is the initial value.
      onChangeDate: setValue,
      digits,
      hour12,
      maxDate,
      minDate,
      snapToStep,
      wheelControl,
      wrapAround,
    })

    React.useEffect(() => {
      update((prevOptions) => ({
        ...prevOptions,
        date: !value ? undefined : value,
      }))
    }, [value, update])

    React.useEffect(() => {
      update((prevOptions) => ({ ...prevOptions, digits }))
    }, [digits, update])

    React.useEffect(() => {
      update((prevOptions) => ({ ...prevOptions, hour12 }))
    }, [hour12, update])

    React.useEffect(() => {
      update((prevOptions) => ({ ...prevOptions, maxDate }))
    }, [maxDate, update])

    React.useEffect(() => {
      update((prevOptions) => ({ ...prevOptions, minDate }))
    }, [minDate, update])

    React.useEffect(() => {
      update((prevOptions) => ({ ...prevOptions, snapToStep }))
    }, [snapToStep, update])

    React.useEffect(() => {
      update((prevOptions) => ({ ...prevOptions, wheelControl }))
    }, [wheelControl, update])

    React.useEffect(() => {
      update((prevOptions) => ({ ...prevOptions, wrapAround }))
    }, [wrapAround, update])

    const { ref: rootRef, ...rootProps } = timescape.getRootProps()

    const composedRefs = useComposedRefs(ref, (node) => rootRef(node)!)

    return (
      <DateTimeFieldContext.Provider value={{ ...timescape, disabled }}>
        <Primitive.div
          ref={composedRefs}
          data-disabled={disabled}
          {...rootProps}
        >
          {children}
        </Primitive.div>
      </DateTimeFieldContext.Provider>
    )
  }
)
DateTimeField.displayName = "DateTimeField"

export const DateTimeFieldSegmentSeparator = React.forwardRef<
  React.ElementRef<typeof Primitive.span>,
  React.ComponentPropsWithoutRef<typeof Primitive.span>
>((props, ref) => {
  const { disabled } = useDateTimeFieldContext()

  return (
    <Primitive.span
      ref={ref}
      aria-hidden="true"
      data-disabled={disabled}
      {...props}
    />
  )
})
DateTimeFieldSegmentSeparator.displayName = "DateTimeFieldSegmentSeparator"

export const DateTimeFieldSegmentYears = React.forwardRef<
  React.ElementRef<typeof Primitive.input>,
  React.ComponentPropsWithoutRef<typeof Primitive.input>
>(({ disabled: disabledProp, ...props }, ref) => {
  const { getInputProps, disabled } = useDateTimeFieldContext()

  const { ref: inputRef, ...inputProps } = getInputProps("years")

  const composedRefs = useComposedRefs(ref, inputRef)

  return (
    <Primitive.input
      ref={composedRefs}
      {...inputProps}
      disabled={disabled || disabledProp}
      {...props}
    />
  )
})
DateTimeFieldSegmentYears.displayName = "DateTimeFieldSegmentYears"

export const DateTimeFieldSegmentMonths = React.forwardRef<
  React.ElementRef<typeof Primitive.input>,
  React.ComponentPropsWithoutRef<typeof Primitive.input>
>(({ disabled: disabledProp, ...props }, ref) => {
  const { getInputProps, disabled } = useDateTimeFieldContext()

  const { ref: inputRef, ...inputProps } = getInputProps("months")

  const composedRefs = useComposedRefs(ref, inputRef)

  return (
    <Primitive.input
      ref={composedRefs}
      {...inputProps}
      disabled={disabled || disabledProp}
      {...props}
    />
  )
})
DateTimeFieldSegmentMonths.displayName = "DateTimeFieldSegmentMonths"

export const DateTimeFieldSegmentDays = React.forwardRef<
  React.ElementRef<typeof Primitive.input>,
  React.ComponentPropsWithoutRef<typeof Primitive.input>
>(({ disabled: disabledProp, ...props }, ref) => {
  const { getInputProps, disabled } = useDateTimeFieldContext()

  const { ref: inputRef, ...inputProps } = getInputProps("days")

  const composedRefs = useComposedRefs(ref, inputRef)

  return (
    <Primitive.input
      ref={composedRefs}
      {...inputProps}
      disabled={disabled || disabledProp}
      {...props}
    />
  )
})
DateTimeFieldSegmentDays.displayName = "DateTimeFieldSegmentDays"

export const DateTimeFieldSegmentHours = React.forwardRef<
  React.ElementRef<typeof Primitive.input>,
  React.ComponentPropsWithoutRef<typeof Primitive.input>
>(({ disabled: disabledProp, ...props }, ref) => {
  const { getInputProps, disabled } = useDateTimeFieldContext()

  const { ref: inputRef, ...inputProps } = getInputProps("hours")

  const composedRefs = useComposedRefs(ref, inputRef)

  return (
    <Primitive.input
      ref={composedRefs}
      {...inputProps}
      disabled={disabled || disabledProp}
      {...props}
    />
  )
})
DateTimeFieldSegmentHours.displayName = "DateTimeFieldSegmentHours"

export const DateTimeFieldSegmentMinutes = React.forwardRef<
  React.ElementRef<typeof Primitive.input>,
  React.ComponentPropsWithoutRef<typeof Primitive.input>
>(({ disabled: disabledProp, ...props }, ref) => {
  const { getInputProps, disabled } = useDateTimeFieldContext()

  const { ref: inputRef, ...inputProps } = getInputProps("minutes")

  const composedRefs = useComposedRefs(ref, inputRef)

  return (
    <Primitive.input
      ref={composedRefs}
      {...inputProps}
      disabled={disabled || disabledProp}
      {...props}
    />
  )
})
DateTimeFieldSegmentMinutes.displayName = "DateTimeFieldSegmentMinutes"

export const DateTimeFieldSegmentSeconds = React.forwardRef<
  React.ElementRef<typeof Primitive.input>,
  React.ComponentPropsWithoutRef<typeof Primitive.input>
>(({ disabled: disabledProp, ...props }, ref) => {
  const { getInputProps, disabled } = useDateTimeFieldContext()

  const { ref: inputRef, ...inputProps } = getInputProps("seconds")

  const composedRefs = useComposedRefs(ref, inputRef)

  return (
    <Primitive.input
      ref={composedRefs}
      {...inputProps}
      disabled={disabled || disabledProp}
      {...props}
    />
  )
})
DateTimeFieldSegmentSeconds.displayName = "DateTimeFieldSegmentSeconds"

export const DateTimeFieldSegmentAmPm = React.forwardRef<
  React.ElementRef<typeof Primitive.input>,
  React.ComponentPropsWithoutRef<typeof Primitive.input>
>(({ disabled: disabledProp, ...props }, ref) => {
  const { getInputProps, disabled, options } = useDateTimeFieldContext()

  const { ref: inputRef, ...inputProps } = getInputProps("am/pm")

  const composedRefs = useComposedRefs(ref, inputRef)

  if (!options?.hour12) {
    return null
  }

  return (
    <Primitive.input
      ref={composedRefs}
      {...inputProps}
      disabled={disabled || disabledProp}
      {...props}
    />
  )
})
DateTimeFieldSegmentAmPm.displayName = "DateTimeFieldSegmentAmPm"

const Root = DateTimeField
const SegmentSeparator = DateTimeFieldSegmentSeparator
const SegmentDays = DateTimeFieldSegmentDays
const SegmentMonths = DateTimeFieldSegmentMonths
const SegmentYears = DateTimeFieldSegmentYears
const SegmentHours = DateTimeFieldSegmentHours
const SegmentMinutes = DateTimeFieldSegmentMinutes
const SegmentSeconds = DateTimeFieldSegmentSeconds
const SegmentAmPm = DateTimeFieldSegmentAmPm

export {
  Root,
  SegmentSeparator,
  SegmentDays,
  SegmentMonths,
  SegmentYears,
  SegmentHours,
  SegmentMinutes,
  SegmentSeconds,
  SegmentAmPm,
}
