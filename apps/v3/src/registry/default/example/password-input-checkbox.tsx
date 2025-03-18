import * as React from "react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import {
  PasswordInput,
  PasswordInputInput,
} from "@/registry/default/ui/password-input"

export default function PasswordInputCheckbox() {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="grid gap-3">
      <PasswordInput visible={visible} onVisibleChange={setVisible}>
        <PasswordInputInput />
      </PasswordInput>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="toggle-password"
          checked={visible}
          onCheckedChange={(checked) => setVisible(Boolean(checked))}
        />
        <label
          htmlFor="toggle-password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show password
        </label>
      </div>
    </div>
  )
}
