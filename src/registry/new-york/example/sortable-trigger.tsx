import React from "react"
import { arrayMove } from "@dnd-kit/sortable"
import { GripVertical } from "lucide-react"

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
      "group flex min-w-64 cursor-default items-stretch overflow-hidden rounded-md border bg-card text-card-foreground shadow-sm transition-shadow focus-within:outline-none focus-within:ring-1 focus-within:ring-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-pressed:z-10 aria-pressed:shadow-lg",
      className
    )}
    {...props}
  >
    <SortableItemTrigger
      tabIndex={0}
      className="flex cursor-grab items-center justify-center bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none aria-pressed:cursor-grabbing"
    >
      <GripVertical className="size-4" />
    </SortableItemTrigger>
    <div className="flex flex-1 items-center gap-2 px-3 py-2 text-sm">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium">{title}</div>
        <div className="line-clamp-1 text-xs text-muted-foreground">
          {description}
        </div>
      </div>
    </div>
  </div>
))
Item.displayName = "Item"

export default function SortableTrigger() {
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
      <SortableList
        orientation="horizontal"
        items={items}
        className="flex snap-start gap-3 overflow-x-auto px-1 py-2"
      >
        {items.map((item) => (
          <SortableItem asChild key={item.id} id={item.id}>
            <Item
              title={item.title}
              description={item.description}
              tabIndex={undefined}
              className="aria-pressed:opacity-50 aria-pressed:shadow-sm"
            />
          </SortableItem>
        ))}
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
