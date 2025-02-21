import * as React from "react"
import { faker } from "@faker-js/faker"
import { CustomContainerComponentProps, CustomItemComponentProps } from "virtua"

import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import {
  Virtualized,
  VirtualizedVirtualizer,
} from "@/registry/default/ui/virtualized"

const invoices = Array.from({ length: 1000 }, (_, index) => ({
  invoice: `INV${index.toString().padStart(3, "0")}`,
  paymentStatus: faker.helpers.arrayElement(["Unpaid", "Paid", "Overdue"]),
  totalAmount: `${faker.finance.amount({
    symbol: "$",
    dec: 0,
  })}.00`,
  paymentMethod: faker.helpers.arrayElement([
    "Credit Card",
    "Debit Card",
    "Paypal",
    "Bank Transfer",
  ]),
}))

const VirtualizedTableRow = React.forwardRef<
  React.ElementRef<typeof TableRow>,
  CustomItemComponentProps
>((props, ref) => <TableRow ref={ref} {...props} />)
VirtualizedTableRow.displayName = "VirtualizedTableRow"

const VirtualizedTableBody = React.forwardRef<
  React.ElementRef<typeof TableBody>,
  CustomContainerComponentProps
>((props, ref) => <TableBody ref={ref} className="max-h-96" {...props} />)
VirtualizedTableBody.displayName = "VirtualizedTableBody"

export default function VirtualizerTable() {
  return (
    <Virtualized className="h-96 overflow-y-auto">
      <table className="w-full caption-bottom border-separate border-spacing-0 text-sm">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="sticky top-0 z-10 bg-background [&_tr>*]:border-b">
          <TableRow>
            <TableHead className="w-[120px]">Invoice</TableHead>
            <TableHead className="w-[120px]">Status</TableHead>
            <TableHead className="w-[200px]">Method</TableHead>
            <TableHead className="w-[120px] text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <VirtualizedVirtualizer
          as={VirtualizedTableBody}
          item={VirtualizedTableRow}
          startMargin={48}
        >
          {invoices.map((invoice) => (
            <React.Fragment key={invoice.invoice}>
              <TableCell className="w-[120px] font-medium">
                {invoice.invoice}
              </TableCell>
              <TableCell className="w-[120px]">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="w-[200px]">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="w-[120px] text-right">
                {invoice.totalAmount}
              </TableCell>
            </React.Fragment>
          ))}
        </VirtualizedVirtualizer>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {invoices
                .reduce(
                  (acc, invoice) =>
                    acc +
                    parseFloat(
                      invoice.totalAmount.replace("$", "").replace(".00", "")
                    ),
                  0
                )
                .toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
            </TableCell>
          </TableRow>
        </TableFooter>
      </table>
    </Virtualized>
  )
}
