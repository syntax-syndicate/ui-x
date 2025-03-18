import { Kbd } from "@/registry/new-york/ui/kbd"

export default function KbdSecondary() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Kbd variant="secondary">
          <span className="text-xs">⌘</span>K
        </Kbd>
        <span className="text-sm text-muted-foreground">Show command menu</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="secondary">
          <span className="text-xs">⌘</span>C
        </Kbd>
        <span className="text-sm text-muted-foreground">Copy</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="secondary">
          <span className="text-xs">⌘</span>V
        </Kbd>
        <span className="text-sm text-muted-foreground">Paste</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd variant="secondary">
          <span className="text-xs">⌘</span>Z
        </Kbd>
        <span className="text-sm text-muted-foreground">Undo</span>
      </div>
    </div>
  )
}
