"use client";

import * as React from "react";

import {
  ControlGroup,
  ControlGroupItem,
} from "@/registry/new-york/ui/control-group";
import {
  InputBase,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/new-york/ui/input-base";
import {
  Country,
  PhoneInput,
  PhoneInputCountrySelect,
  PhoneInputCountrySelectContent,
  PhoneInputCountrySelectOptions,
  PhoneInputCountrySelectTrigger,
  PhoneInputCountrySelectValue,
  PhoneInputFlag,
} from "@/registry/new-york/ui/phone-input";
import * as PhoneInputPrimitive from "@/registry/new-york/ui/phone-input-primitive";

export default function PhoneInputDemo() {
  const [country, setCountry] = React.useState<Country | null>(null);

  return (
    <PhoneInput country={country} onCountryChange={setCountry}>
      <ControlGroup>
        <PhoneInputCountrySelect>
          <ControlGroupItem>
            <PhoneInputCountrySelectTrigger>
              <PhoneInputCountrySelectValue
                placeholder={
                  <PhoneInputFlag country={null} title="International" />
                }
              >
                <PhoneInputFlag country={country} title={country!} />
              </PhoneInputCountrySelectValue>
            </PhoneInputCountrySelectTrigger>
          </ControlGroupItem>
          <PhoneInputCountrySelectContent>
            <PhoneInputCountrySelectOptions />
          </PhoneInputCountrySelectContent>
        </PhoneInputCountrySelect>
        <ControlGroupItem>
          <InputBase>
            <InputBaseControl>
              <PhoneInputPrimitive.Input asChild>
                <InputBaseInput />
              </PhoneInputPrimitive.Input>
            </InputBaseControl>
          </InputBase>
        </ControlGroupItem>
      </ControlGroup>
    </PhoneInput>
  );
}
