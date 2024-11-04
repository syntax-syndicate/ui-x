"use client"

import { useToast } from "@/registry/new-york/hooks/use-toast"
import { Button } from "@/registry/new-york/ui/button"
import { confirm } from "@/registry/new-york/ui/confirmer"

export default function ConfirmerDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        confirm({
          title: "Are you absolutely sure?",
          description:
            "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
        })
          .then(() =>
            toast({
              description: "Your account has been deleted.",
            })
          )
          .catch(() => {})
      }}
    >
      Show Dialog
    </Button>
  )
}
