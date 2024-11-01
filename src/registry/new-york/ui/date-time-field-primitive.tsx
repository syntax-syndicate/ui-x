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

export const DateTimeFieldSeparator = React.forwardRef<
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
DateTimeFieldSeparator.displayName = "DateTimeFieldSeparator"

export const DateTimeFieldYears = React.forwardRef<
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
DateTimeFieldYears.displayName = "DateTimeFieldYears"

export const DateTimeFieldMonths = React.forwardRef<
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
DateTimeFieldMonths.displayName = "DateTimeFieldMonths"

export const DateTimeFieldDays = React.forwardRef<
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
DateTimeFieldDays.displayName = "DateTimeFieldDays"

export const DateTimeFieldHours = React.forwardRef<
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
DateTimeFieldHours.displayName = "DateTimeFieldHours"

export const DateTimeFieldMinutes = React.forwardRef<
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
DateTimeFieldMinutes.displayName = "DateTimeFieldMinutes"

export const DateTimeFieldSeconds = React.forwardRef<
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
DateTimeFieldSeconds.displayName = "DateTimeFieldSeconds"

export const DateTimeFieldAmPm = React.forwardRef<
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
DateTimeFieldAmPm.displayName = "DateTimeFieldAmPm"

const Root = DateTimeField
const Separator = DateTimeFieldSeparator
const Days = DateTimeFieldDays
const Months = DateTimeFieldMonths
const Years = DateTimeFieldYears
const Hours = DateTimeFieldHours
const Minutes = DateTimeFieldMinutes
const Seconds = DateTimeFieldSeconds
const AmPm = DateTimeFieldAmPm

export { Root, Separator, Days, Months, Years, Hours, Minutes, Seconds, AmPm }
