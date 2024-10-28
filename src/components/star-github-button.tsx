import Link from "next/link"
import { Octokit } from "@octokit/core"
import { Star } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/registry/new-york/ui/button"

const octokit = new Octokit()

export async function StarGitHubButton(
  props: React.ComponentProps<typeof Button>
) {
  let stargazers_count = 0

  try {
    ;({
      data: { stargazers_count },
    } = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: "junwen-k",
      repo: "ui-x",
    }))
  } catch {
    //
  }

  return (
    <Button asChild {...props}>
      <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
        Star on GitHub<span>·</span>
        {stargazers_count}
        <Star className="fill-yellow-500 text-yellow-500" />
      </Link>
    </Button>
  )
}
