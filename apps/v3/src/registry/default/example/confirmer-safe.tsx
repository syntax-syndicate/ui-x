"use client"

import { useToast } from "@/registry/default/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"
import { safeConfirm } from "@/registry/default/ui/confirmer"

export default function ConfirmerSafe() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={async () => {
        const { ok } = await safeConfirm({
          title: "Are you absolutely sure?",
          description:
            "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
        })
        if (!ok) {
          return
        }

        toast({
          description: "Your account has been deleted.",
        })
      }}
    >
      Show Dialog
    </Button>
  )
}
