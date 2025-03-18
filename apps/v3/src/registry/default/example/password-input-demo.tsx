import {
  PasswordInput,
  PasswordInputAdornmentToggle,
  PasswordInputInput,
} from "@/registry/default/ui/password-input"

export default function PasswordInputDemo() {
  return (
    <PasswordInput>
      <PasswordInputInput placeholder="Password" />
      <PasswordInputAdornmentToggle />
    </PasswordInput>
  )
}
