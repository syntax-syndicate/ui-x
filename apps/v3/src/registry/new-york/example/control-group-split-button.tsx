import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  ControlGroup,
  ControlGroupItem,
} from "@/registry/new-york/ui/control-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

export default function ControlGroupSplitButton() {
  const [mergeMethod, setMergeMethod] = React.useState("Create a merge commit")

  return (
    <ControlGroup>
      <ControlGroupItem>
        <Button variant="outline">{mergeMethod}</Button>
      </ControlGroupItem>
      <DropdownMenu>
        <ControlGroupItem>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
        </ControlGroupItem>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onSelect={() => setMergeMethod("Create a merge commit")}
          >
            Create a merge commit
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setMergeMethod("Squash and merge")}>
            Squash and merge
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setMergeMethod("Rebase and merge")}>
            Rebase and merge
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ControlGroup>
  )
}
