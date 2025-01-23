import { Registry } from "@/registry/schema"

export const ui: Registry = [
  {
    name: "badge-group",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/primitive",
      "@radix-ui/react-slot",
      "@radix-ui/react-toggle-group",
      "@radix-ui/react-use-controllable-state",
    ],
    files: ["ui/badge-group.tsx"],
  },
  {
    name: "calendar",
    type: "registry:ui",
    dependencies: ["react-day-picker", "date-fns"],
    registryDependencies: ["button", "select"],
    files: ["ui/calendar.tsx"],
  },
  {
    name: "combobox-primitive",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/primitive",
      "@radix-ui/react-compose-refs",
      "@radix-ui/react-popover",
      "@radix-ui/react-primitive",
      "@radix-ui/react-roving-focus",
      "@radix-ui/react-use-controllable-state",
      "cmdk",
    ],
    files: ["ui/combobox-primitive.tsx"],
  },
  {
    name: "combobox",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    registryDependencies: ["badge", "combobox-primitive", "input-base"],
    files: ["ui/combobox.tsx"],
  },
  {
    name: "confirmer",
    type: "registry:ui",
    dependencies: ["use-ask"],
    registryDependencies: ["alert-dialog", "button"],
    files: ["ui/confirmer.tsx"],
  },
  {
    name: "date-field",
    type: "registry:ui",
    registryDependencies: ["date-time-field"],
    files: ["ui/date-field.tsx"],
  },
  {
    name: "date-time-field-primitive",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-compose-refs",
      "@radix-ui/react-primitive",
      "timescape",
    ],
    files: [
      {
        path: "ui/date-time-field-primitive.tsx",
        type: "registry:ui",
      },
      {
        path: "hooks/use-timescape.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "date-time-range-field-primitive",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-compose-refs",
      "@radix-ui/react-primitive",
      "timescape",
    ],
    files: [
      {
        path: "ui/date-time-range-field-primitive.tsx",
        type: "registry:ui",
      },
      {
        path: "hooks/use-timescape.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "date-time-field",
    type: "registry:ui",
    registryDependencies: ["date-time-field-primitive", "input-base"],
    files: ["ui/date-time-field.tsx"],
  },
  {
    name: "date-time-range-field",
    type: "registry:ui",
    registryDependencies: ["date-time-range-field-primitive"],
    files: ["ui/date-time-range-field.tsx"],
  },
  {
    name: "date-picker-primitive",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/primitive",
      "@radix-ui/react-popover",
      "@radix-ui/react-primitive",
      "@radix-ui/react-slot",
      "@radix-ui/react-use-controllable-state",
      "date-fns",
      "react-day-picker",
    ],
    registryDependencies: [
      "date-time-field-primitive",
      "date-time-range-field-primitive",
    ],
    files: ["ui/date-picker-primitive.tsx"],
  },
  {
    name: "date-picker",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "calendar",
      "date-field",
      "date-picker-primitive",
      "input-base",
    ],
    files: ["ui/date-picker.tsx"],
  },
  {
    name: "description-list",
    type: "registry:ui",
    files: ["ui/description-list.tsx"],
  },
  {
    name: "dropzone-primitive",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/primitive",
      "@radix-ui/react-primitive",
      "react-dropzone",
    ],
    files: ["ui/dropzone-primitive.tsx"],
  },
  {
    name: "dropzone",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-primitive"],
    registryDependencies: ["dropzone-primitive"],
    files: ["ui/dropzone.tsx"],
  },
  {
    name: "file-list",
    type: "registry:ui",
    dependencies: ["pretty-bytes"],
    registryDependencies: ["button", "progress"],
    files: ["ui/file-list.tsx"],
  },
  {
    name: "input-base",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/primitive",
      "@radix-ui/react-compose-refs",
      "@radix-ui/react-primitive",
      "@radix-ui/react-slot",
    ],
    registryDependencies: ["button"],
    files: ["ui/input-base.tsx"],
  },
  {
    name: "kbd",
    type: "registry:ui",
    files: ["ui/kbd.tsx"],
  },
  {
    name: "native-select",
    type: "registry:ui",
    registryDependencies: ["input-base"],
    files: ["ui/native-select.tsx"],
  },
  {
    name: "time-field",
    type: "registry:ui",
    registryDependencies: ["date-time-field"],
    files: ["ui/time-field.tsx"],
  },
  {
    name: "time",
    type: "registry:ui",
    dependencies: ["date-fns"],
    files: ["ui/time.tsx"],
  },
  {
    name: "timeline",
    type: "registry:ui",
    files: ["ui/timeline.tsx"],
  },
  {
    name: "password-input-primitive",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/primitive",
      "@radix-ui/react-primitive",
      "@radix-ui/react-use-controllable-state",
    ],
    files: ["ui/password-input-primitive.tsx"],
  },
  {
    name: "password-input",
    type: "registry:ui",
    registryDependencies: ["input-base", "password-input-primitive"],
    files: ["ui/password-input.tsx"],
  },
]
