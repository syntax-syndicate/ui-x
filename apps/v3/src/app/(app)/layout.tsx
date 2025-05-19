import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SiteMain } from "@/components/site-main"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <SiteMain>{children}</SiteMain>
      <SiteFooter />
    </>
  )
}
