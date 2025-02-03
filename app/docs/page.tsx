import { Suspense } from "react"
import { DocsPageClient } from "./docs-page-client"

export default function DocsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DocsPageClient />
    </Suspense>
  )
} 