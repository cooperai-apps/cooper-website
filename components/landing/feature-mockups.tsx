function CheckmarkIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

// Mockup wrapper for consistent styling
function MockupWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-muted/50 p-4 md:p-8">
      <div className="rounded-xl border bg-background shadow-xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}

function MockupHeader({ title, subtitle, badge }: { title: string; subtitle: string; badge?: React.ReactNode }) {
  return (
    <div className="border-b bg-muted/30 px-4 py-3 flex items-center justify-between">
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
      {badge}
    </div>
  )
}

// Incoming Documents Mockup (Feature 1)
export function IncomingDocumentsMockup() {
  const extractedFields = [
    { label: "Named Insured", value: "ABC Trucking LLC" },
    { label: "Policy Period", value: "01/15/2025 - 01/15/2026" },
    { label: "Coverage Lines", value: "Auto, GL, Cargo" },
    { label: "Limits", value: "$1M CSL / $2M Aggregate" },
  ]

  const sourceDocuments = ["ACORD 125", "Loss Runs", "Email"]

  return (
    <MockupWrapper>
      <div className="border-b bg-muted/30 px-4 py-3">
        <div className="text-sm font-medium">Incoming Documents</div>
        <div className="text-xs text-muted-foreground">4 files processed • 12 fields extracted</div>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          {extractedFields.map((field) => (
            <div key={field.label} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{field.label}</span>
              <span className="font-medium">{field.value}</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <div className="text-xs font-medium text-muted-foreground mb-2">SOURCE DOCUMENTS</div>
          <div className="flex flex-wrap gap-2">
            {sourceDocuments.map((doc) => (
              <span key={doc} className="inline-flex items-center gap-1.5 rounded bg-green-50 text-green-700 px-2 py-1 text-xs">
                <CheckmarkIcon />
                {doc}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">!</span>
            <span className="text-muted-foreground">Missing: Driver schedule, Vehicle list</span>
          </div>
        </div>
      </div>
    </MockupWrapper>
  )
}

// Policy Comparison Mockup (Feature 2)
export function PolicyComparisonMockup() {
  const comparisons = [
    {
      field: "BI/PD LIMIT",
      status: "Increased",
      statusColor: "text-green-700",
      oldValue: "$500K CSL",
      newValue: "$1M CSL",
    },
    {
      field: "DEDUCTIBLE",
      status: "Changed",
      statusColor: "text-amber-700",
      oldValue: "$1,000",
      newValue: "$2,500",
    },
    {
      field: "HIRED AUTO",
      status: "Removed",
      statusColor: "text-red-600",
      oldValue: "Included",
      newValue: "Not included",
    },
  ]

  return (
    <MockupWrapper>
      <MockupHeader
        title="Policy Comparison"
        subtitle="Current vs. Proposed"
        badge={<span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded">3 differences</span>}
      />
      <div className="p-4 space-y-4">
        <div className="space-y-3">
          {comparisons.map((item) => (
            <div key={item.field} className="rounded-lg bg-muted/50 p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-muted-foreground">{item.field}</span>
                <span className={`text-xs ${item.statusColor}`}>
                  {item.status === "Increased" && "↑ "}
                  {item.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground line-through">{item.oldValue}</span>
                <span className="font-medium">{item.newValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockupWrapper>
  )
}

// Compliance Check Mockup (Feature 3)
export function ComplianceCheckMockup() {
  const checks = [
    {
      title: "Fleet Size",
      status: "Pass",
      statusBg: "bg-green-100",
      statusText: "text-green-700",
      borderColor: "border-green-200",
      bgColor: "bg-green-50/50",
      description: "24 units within 10-50 unit requirement",
    },
    {
      title: "Driver Experience",
      status: "Pass",
      statusBg: "bg-green-100",
      statusText: "text-green-700",
      borderColor: "border-green-200",
      bgColor: "bg-green-50/50",
      description: "Average 5.2 years, minimum 2 years met",
    },
    {
      title: "Loss Ratio",
      status: "Review",
      statusBg: "bg-yellow-100",
      statusText: "text-yellow-700",
      borderColor: "border-yellow-200",
      bgColor: "bg-yellow-50/50",
      description: "62% slightly above 60% guideline, may need referral",
    },
    {
      title: "Operating Radius",
      status: "Pass",
      statusBg: "bg-green-100",
      statusText: "text-green-700",
      borderColor: "border-green-200",
      bgColor: "bg-green-50/50",
      description: "Regional (500mi) within acceptable range",
    },
  ]

  return (
    <MockupWrapper>
      <div className="border-b bg-muted/30 px-4 py-3">
        <div className="text-sm font-medium">Compliance Check</div>
        <div className="text-xs text-muted-foreground">Underwriting Guidelines • Commercial Auto</div>
      </div>
      <div className="p-4 space-y-3">
        {checks.map((check) => (
          <div key={check.title} className={`rounded-lg border ${check.borderColor} ${check.bgColor} p-3`}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sm">{check.title}</span>
              <span className={`text-xs ${check.statusText} ${check.statusBg} px-2 py-0.5 rounded font-medium`}>
                {check.status}
              </span>
            </div>
            <div className="text-xs text-muted-foreground">{check.description}</div>
          </div>
        ))}
      </div>
    </MockupWrapper>
  )
}
