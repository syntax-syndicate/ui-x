import * as React from "react"
import { faker } from "@faker-js/faker"
import {
  CustomContainerComponentProps,
  CustomItemComponentProps,
  Virtualizer,
} from "virtua"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york/ui/table"

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
>(({ children, ...props }, ref) => (
  <TableRow ref={ref} {...props}>
    {children}
  </TableRow>
))
VirtualizedTableRow.displayName = "VirtualizedTableRow"

const VirtualizedTableBody = React.forwardRef<
  React.ElementRef<typeof TableBody>,
  CustomContainerComponentProps
>(({ children, ...props }, ref) => (
  <TableBody ref={ref} className="max-h-96" {...props}>
    {children}
  </TableBody>
))
VirtualizedTableBody.displayName = "VirtualizedTableBody"

export default function VirtualizerTable() {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="h-96 overflow-y-auto" ref={scrollRef}>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Invoice</TableHead>
            <TableHead className="w-[120px]">Status</TableHead>
            <TableHead className="w-[200px]">Method</TableHead>
            <TableHead className="w-[120px] text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <Virtualizer
          as={VirtualizedTableBody}
          item={VirtualizedTableRow}
          scrollRef={scrollRef}
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
        </Virtualizer>
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
      </Table>
    </div>
  )
}
