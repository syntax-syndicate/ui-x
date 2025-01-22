import { npmCommand } from "@/lib/npm-command"
import { useConfig } from "@/hooks/use-config"
import { CodeBlockCommand } from "@/components/code-block-command"

interface InstallCodeBlockCommandProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: (style: "new-york" | "default") => string
}

export function InstallCodeBlockCommand({
  children,
}: InstallCodeBlockCommandProps) {
  const [config] = useConfig()

  const commands = npmCommand(children(config.style))

  return (
    <CodeBlockCommand
      __npmCommand__={commands?.npm}
      __yarnCommand__={commands?.yarn}
      __pnpmCommand__={commands?.pnpm}
      __bunCommand__={commands?.bun}
    />
  )
}
