import { LegalPage } from "@/components/legal-page"
import content from "@/content/legal/terms.md"

export default function TermsPage() {
  return <LegalPage title="Terms of Use Agreement" effectiveDate="December 2025" content={content} />
}
