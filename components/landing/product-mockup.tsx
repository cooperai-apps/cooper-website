import type React from "react"
import { CooperLogo } from "@/components/cooper-logo"
import { POPULAR_WORKFLOWS, WORKFLOW_CATEGORIES } from "@/lib/landing-data"

// Icon components for the mockup
function HomeIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function WorkflowsIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  )
}

function VaultIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  )
}

function LibraryIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ChevronRightIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg className="h-4 w-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg className="h-4 w-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="h-4 w-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function DriverIcon() {
  return (
    <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    </svg>
  )
}

function VehicleIcon() {
  return (
    <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  )
}

function CompareIcon() {
  return (
    <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const WORKFLOW_ICONS: Record<string, () => React.ReactNode> = {
  "Process Submissions": DocumentIcon,
  "Extract IFTAs": ChartIcon,
  "Generate UW Email": EmailIcon,
}

const CATEGORY_ICONS: Record<string, () => React.ReactNode> = {
  "Extract Driver Data": DriverIcon,
  "Extract Vehicle List": VehicleIcon,
  "Compare Quotes": CompareIcon,
  "Check Appetite": CheckIcon,
}

function SidebarItem({
  icon: Icon,
  label,
  active,
  hasChevron
}: {
  icon: () => React.ReactNode
  label: string
  active: boolean
  hasChevron: boolean
}) {
  return (
    <div className={`rounded-lg px-3 py-2 flex items-center ${active ? "bg-foreground/5 font-medium" : "text-muted-foreground"} ${hasChevron ? "justify-between" : "gap-2"}`}>
      {hasChevron ? (
        <>
          <span className="flex items-center gap-2">
            <Icon />
            {label}
          </span>
          <ChevronRightIcon />
        </>
      ) : (
        <>
          <Icon />
          {label}
        </>
      )}
    </div>
  )
}

function WorkflowCard({ title, description, steps, popular }: {
  title: string
  description: string
  steps: number
  popular: boolean
}) {
  const Icon = WORKFLOW_ICONS[title] || DocumentIcon

  return (
    <div className="rounded-xl border bg-background p-4 hover:border-foreground/30 transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
          <Icon />
        </div>
        {popular && (
          <span className="text-[10px] font-medium bg-foreground/5 px-2 py-0.5 rounded">Popular</span>
        )}
      </div>
      <div className="font-medium text-sm mb-1">{title}</div>
      <div className="text-xs text-muted-foreground mb-3 line-clamp-2">{description}</div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{steps} steps</span>
        <span className="flex items-center gap-1 font-medium text-foreground">
          Start <ChevronRightIcon />
        </span>
      </div>
    </div>
  )
}

function CategoryItem({ title, description, steps }: {
  title: string
  description: string
  steps: number
}) {
  const Icon = CATEGORY_ICONS[title] || DocumentIcon

  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-background cursor-pointer">
      <Icon />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground truncate">{description}</div>
      </div>
      <span className="text-xs text-muted-foreground">{steps} steps</span>
    </div>
  )
}

// Compact workflow card for mobile
function WorkflowCardCompact({ title, steps }: { title: string; steps: number }) {
  const Icon = WORKFLOW_ICONS[title] || DocumentIcon

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-background p-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
        <Icon />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm truncate">{title}</div>
        <div className="text-xs text-muted-foreground">{steps} steps</div>
      </div>
      <ChevronRightIcon className="h-4 w-4 text-muted-foreground shrink-0" />
    </div>
  )
}

export function ProductMockup() {
  const SIDEBAR_ICONS = [HomeIcon, WorkflowsIcon, VaultIcon, LibraryIcon, HistoryIcon]

  return (
    <div className="mx-auto mt-12 md:mt-16 max-w-5xl px-4 md:px-0">
      <div className="overflow-hidden rounded-xl border bg-background shadow-2xl">
        {/* Window controls */}
        <div className="flex items-center gap-2 border-b bg-muted/30 px-3 py-2 md:px-4 md:py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-muted-foreground/20" />
            <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-muted-foreground/20" />
            <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-muted-foreground/20" />
          </div>
        </div>

        <div className="flex">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden w-48 border-r bg-[#FBFBFB] md:block">
            <div className="p-3">
              <div className="mb-4 flex items-center gap-2 px-2">
                <CooperLogo className="h-5 w-5" />
                <span className="font-semibold">Cooper</span>
              </div>
              <div className="space-y-0.5 text-sm">
                {["Home", "Workflows", "Vault", "Library", "History"].map((label, index) => (
                  <SidebarItem
                    key={label}
                    icon={SIDEBAR_ICONS[index]}
                    label={label}
                    active={label === "Home"}
                    hasChevron={["Workflows", "Vault", "History"].includes(label)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 md:p-8 bg-[#FFFFFF]">
            {/* Mobile Header with Logo */}
            <div className="flex items-center gap-2 mb-3 md:hidden">
              <CooperLogo className="h-5 w-5" />
              <span className="font-semibold">Cooper</span>
            </div>

            <h2 className="mb-1 text-lg font-semibold md:text-2xl">Hey, ready to dive in?</h2>
            <p className="mb-4 md:mb-6 text-xs md:text-sm text-muted-foreground">Launch a workflow and let Cooper handle the manual work for you</p>

            {/* Popular Workflows - Compact list on mobile, grid on desktop */}
            <div className="hidden md:grid gap-3 md:grid-cols-3 mb-6">
              {POPULAR_WORKFLOWS.map((workflow) => (
                <WorkflowCard key={workflow.title} {...workflow} />
              ))}
            </div>

            {/* Mobile: Compact workflow list */}
            <div className="space-y-2 mb-4 md:hidden">
              {POPULAR_WORKFLOWS.slice(0, 3).map((workflow) => (
                <WorkflowCardCompact key={workflow.title} title={workflow.title} steps={workflow.steps} />
              ))}
            </div>

            {/* Workflow Categories - Hidden on mobile */}
            <div className="hidden md:block space-y-4">
              {WORKFLOW_CATEGORIES.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{category.name}</span>
                    <span className="text-xs text-muted-foreground">See All →</span>
                  </div>
                  <div className="space-y-1">
                    {category.items.map((item) => (
                      <CategoryItem key={item.title} {...item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Ask Cooper Input */}
            <div className="mt-4 md:mt-6 relative">
              <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2.5 md:px-4 md:py-3">
                <CooperLogo className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs md:text-sm text-muted-foreground">Ask Cooper anything...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
