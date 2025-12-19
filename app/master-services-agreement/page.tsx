import { LegalPage } from "@/components/legal-page"
import content from "@/content/legal/master-services-agreement.md"

export default function MasterServicesAgreementPage() {
  return (
    <LegalPage
      title="Master Services Agreement"
      effectiveDate="December 2025"
      content={content}
    />
  )
}
