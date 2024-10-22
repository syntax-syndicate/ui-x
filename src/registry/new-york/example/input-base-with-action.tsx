import { Info, Mail } from "lucide-react"

import {
  InputBase,
  InputBaseAdornment,
  InputBaseAdornmentButton,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/new-york/ui/input-base"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

export default function InputBaseWithAction() {
  return (
    <InputBase>
      <InputBaseAdornment>
        <Mail />
      </InputBaseAdornment>
      <InputBaseControl>
        <InputBaseInput type="email" placeholder="Email" />
      </InputBaseControl>
      <TooltipProvider>
        <Tooltip>
          <InputBaseAdornment>
            <InputBaseAdornmentButton asChild>
              <TooltipTrigger>
                <Info />
              </TooltipTrigger>
            </InputBaseAdornmentButton>
          </InputBaseAdornment>
          <TooltipContent>
            <p>Email must be unique.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </InputBase>
  )
}
