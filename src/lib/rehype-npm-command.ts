import { visit } from "unist-util-visit"

import { UnistNode, UnistTree } from "@/types/unist"

import { npmCommand } from "./npm-command"

export function rehypeNpmCommand() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return
      }

      const commands = npmCommand(node.properties?.["__rawString__"] || "")
      if (node.properties && commands) {
        node.properties["__npmCommand__"] = commands.npm
        node.properties["__yarnCommand__"] = commands.yarn
        node.properties["__pnpmCommand__"] = commands.pnpm
        node.properties["__bunCommand__"] = commands.bun
      }
    })
  }
}
