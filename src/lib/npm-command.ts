type PackageManagerCommands = {
  npm: string
  yarn: string
  pnpm: string
  bun: string
}

export function npmCommand(command: string): PackageManagerCommands | null {
  // npm install.
  if (command.startsWith("npm install")) {
    return {
      npm: command,
      yarn: command.replaceAll("npm install", "yarn add"),
      pnpm: command.replaceAll("npm install", "pnpm add"),
      bun: command.replaceAll("npm install", "bun add"),
    }
  }

  // npx create.
  if (command.startsWith("npx create-")) {
    return {
      npm: command,
      yarn: command.replaceAll("npx create-", "yarn create "),
      pnpm: command.replaceAll("npx create-", "pnpm create "),
      bun: command.replaceAll("npx", "bunx --bun"),
    }
  }

  // npx.
  if (command.startsWith("npx") && !command.startsWith("npx create-")) {
    return {
      npm: command,
      yarn: command,
      pnpm: command.replaceAll("npx", "pnpm dlx"),
      bun: command.replaceAll("npx", "bunx --bun"),
    }
  }

  // Return null if the command doesn't match any known patterns
  return null
}
