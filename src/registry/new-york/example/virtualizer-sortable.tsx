import React from "react"
import { arrayMove } from "@dnd-kit/sortable"
import { GripVertical } from "lucide-react"
import { VList } from "virtua"

import { cn } from "@/lib/utils"
import {
  Sortable,
  SortableItem,
  SortableItemTrigger,
  SortableList,
  SortableOverlay,
} from "@/registry/new-york/ui/sortable"

const Item = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { title: string; description: string }
>(({ title, description, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group flex cursor-grab items-stretch overflow-hidden rounded-md border bg-card text-card-foreground shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-pressed:z-10 aria-pressed:cursor-grabbing aria-pressed:shadow-lg",
      className
    )}
    {...props}
  >
    <div className="flex cursor-grab items-center justify-center bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground aria-pressed:cursor-grabbing">
      <GripVertical className="size-4" />
    </div>
    <div className="flex flex-1 items-center gap-2 px-3 py-2 text-sm">
      <div className="flex flex-col gap-1">
        <div className="line-clamp-1 text-sm font-medium">{title}</div>
        <div className="line-clamp-1 text-xs text-muted-foreground">
          {description}
        </div>
      </div>
    </div>
  </div>
))
Item.displayName = "Item"

export default function VirtualizerSortable() {
  const [items, setItems] = React.useState(
    Array.from({ length: 1000 }, (_, index) => ({
      id: `item-${index}`,
      title: `Item ${index + 1}`,
      description: `Description ${index}`,
    }))
  )

  return (
    <Sortable
      onDragEnd={(event) => {
        const { active, over } = event

        if (over && active.id !== over.id) {
          const oldIndex = items.findIndex((item) => item.id === active.id)
          const newIndex = items.findIndex((item) => item.id === over.id)

          setItems((prevItems) => arrayMove(prevItems, oldIndex, newIndex))
        }
      }}
    >
      <SortableList items={items} className="flex size-80 flex-col gap-3">
        <VList>
          {items.map((item, index) => (
            <SortableItem asChild key={item.id} id={item.id}>
              <SortableItemTrigger asChild>
                <Item
                  title={item.title}
                  description={item.description}
                  className={cn(
                    "mb-4 aria-pressed:opacity-50 aria-pressed:shadow-sm",
                    index === items.length - 1 && "mb-0"
                  )}
                />
              </SortableItemTrigger>
            </SortableItem>
          ))}
        </VList>
      </SortableList>
      <SortableOverlay>
        {(activeId) => {
          const activeItem = items.find((item) => item.id === activeId)
          if (!activeItem) {
            return null
          }

          return (
            <Item
              title={activeItem.title}
              description={activeItem.description}
              className="cursor-grabbing shadow-lg"
            />
          )
        }}
      </SortableOverlay>
    </Sortable>
  )
}
