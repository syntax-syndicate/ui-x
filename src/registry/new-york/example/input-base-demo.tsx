import * as React from "react"
import { Info } from "lucide-react"

import {
  InputBase,
  InputBaseAdornment,
  InputBaseAdornmentButton,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/new-york/ui/input-base"

export default function InputBaseDemo() {
  return (
    <InputBase>
      <InputBaseControl>
        <InputBaseInput type="email" placeholder="Email" />
      </InputBaseControl>
      <InputBaseAdornment>
        <InputBaseAdornmentButton>
          <Info />
        </InputBaseAdornmentButton>
      </InputBaseAdornment>
    </InputBase>
  )
}
