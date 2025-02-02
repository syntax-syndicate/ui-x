import {
  ControlGroup,
  ControlGroupItem,
} from "@/registry/default/ui/control-group"
import {
  InputBase,
  InputBaseAdornment,
  InputBaseControl,
  InputBaseInput,
} from "@/registry/default/ui/input-base"

export default function ControlGroupDemo() {
  return (
    <ControlGroup>
      <ControlGroupItem>
        <InputBase>
          <InputBaseAdornment>https://</InputBaseAdornment>
        </InputBase>
      </ControlGroupItem>
      <ControlGroupItem>
        <InputBase>
          <InputBaseControl>
            <InputBaseInput defaultValue="ui-x.junwen-k.dev" />
          </InputBaseControl>
        </InputBase>
      </ControlGroupItem>
    </ControlGroup>
  )
}
