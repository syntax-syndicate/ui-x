import { experimental_VGrid as VGrid } from "virtua"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/registry/default/ui/card"

export default function VirtualizerGrid() {
  return (
    <div className="size-80">
      <VGrid row={500} col={500}>
        {({ rowIndex, colIndex }) => (
          <Card
            key={`${rowIndex}-${colIndex}`}
            className={cn(
              "m-2",
              rowIndex === 0 && "mt-0",
              rowIndex === 499 && "mb-0",
              colIndex === 0 && "ml-0",
              colIndex === 499 && "mr-0"
            )}
          >
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{`${rowIndex}/${colIndex}`}</span>
            </CardContent>
          </Card>
        )}
      </VGrid>
    </div>
  )
}
