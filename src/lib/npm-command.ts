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
      yarn: command.replace("npm install", "yarn add"),
      pnpm: command.replace("npm install", "pnpm add"),
      bun: command.replace("npm install", "bun add"),
    }
  }

  // npx create.
  if (command.startsWith("npx create-")) {
    return {
      npm: command,
      yarn: command.replace("npx create-", "yarn create "),
      pnpm: command.replace("npx create-", "pnpm create "),
      bun: command.replace("npx", "bunx --bun"),
    }
  }

  // npx.
  if (command.startsWith("npx") && !command.startsWith("npx create-")) {
    return {
      npm: command,
      yarn: command,
      pnpm: command.replace("npx", "pnpm dlx"),
      bun: command.replace("npx", "bunx --bun"),
    }
  }

  // Return null if the command doesn't match any known patterns
  return null
}
