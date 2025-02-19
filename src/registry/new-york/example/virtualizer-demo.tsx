import { VList } from "virtua"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/registry/new-york/ui/card"

const items = Array.from({ length: 10000 }, (_, index) => index)

export default function VirtualizerDemo() {
  return (
    <div className="size-80">
      <VList>
        {items.map((item, index) => (
          <Card
            key={item}
            className={cn("mb-4", index === items.length - 1 && "mb-0")}
          >
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{item}</span>
            </CardContent>
          </Card>
        ))}
      </VList>
    </div>
  )
}
