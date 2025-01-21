import { Kbd } from "@/registry/default/ui/kbd"

export default function KbdOutline() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Kbd variant="outline">
          <span className="text-xs">⌘</span>K
        </Kbd>
        <span className="text-sm text-muted-foreground">Show command menu</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="outline">
          <span className="text-xs">⌘</span>C
        </Kbd>
        <span className="text-sm text-muted-foreground">Copy</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="outline">
          <span className="text-xs">⌘</span>V
        </Kbd>
        <span className="text-sm text-muted-foreground">Paste</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="outline">
          <span className="text-xs">⌘</span>Z
        </Kbd>
        <span className="text-sm text-muted-foreground">Undo</span>
      </div>
    </div>
  )
}
