import { Registry } from "@/registry/schema"

export const hooks: Registry = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-timescape",
    type: "registry:hook",
    dependencies: [
      "@radix-ui/react-use-controllable-state",
      "react-day-picker",
      "timescape",
    ],
    files: [
      {
        path: "hooks/use-timescape.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-toast",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-toast.ts",
        type: "registry:hook",
      },
    ],
  },
]
