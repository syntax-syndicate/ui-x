import React from "react"
import { arrayMove } from "@dnd-kit/sortable"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sortable,
  SortableGrid,
  SortableItem,
  SortableItemTrigger,
  SortableOverlay,
} from "@/registry/default/ui/sortable"

const Item = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { title: string; description: string }
>(({ title, description, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group flex cursor-grab items-stretch overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-pressed:z-10 aria-pressed:cursor-grabbing aria-pressed:shadow-lg",
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

export default function SortableDemo() {
  const [items, setItems] = React.useState([
    {
      id: "item-1",
      title: "Introduction to React",
      description: "Learn the basics of React and component-based architecture",
    },
    {
      id: "item-2",
      title: "State Management",
      description: "Explore different state management solutions in React",
    },
    {
      id: "item-3",
      title: "React Hooks",
      description: "Master the use of hooks for state and side effects",
    },
    {
      id: "item-4",
      title: "Performance Optimization",
      description: "Techniques to optimize React application performance",
    },
    {
      id: "item-5",
      title: "Testing React Apps",
      description: "Learn testing strategies and tools for React applications",
    },
    {
      id: "item-6",
      title: "React Router",
      description: "Implement client-side routing in React applications",
    },
    {
      id: "item-7",
      title: "Server Components",
      description:
        "Build server-rendered React components for better performance",
    },
    {
      id: "item-8",
      title: "React Query",
      description: "Manage server state and caching in React applications",
    },
  ])

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
      <SortableGrid disabled items={items} className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <SortableItem asChild key={item.id} id={item.id}>
            <SortableItemTrigger asChild>
              <Item
                title={item.title}
                description={item.description}
                className="aria-pressed:opacity-50 aria-pressed:shadow-sm"
              />
            </SortableItemTrigger>
          </SortableItem>
        ))}
      </SortableGrid>
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
