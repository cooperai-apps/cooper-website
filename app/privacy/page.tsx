import { LegalPage } from "@/components/legal-page"
import content from "@/content/legal/privacy.md"

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" effectiveDate="December 2025" content={content} />
}
