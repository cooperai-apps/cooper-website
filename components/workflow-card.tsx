export function WorkflowCard({
  title,
  description,
  badge,
  steps,
}: {
  title: string
  description: string
  badge?: string
  steps: string
}) {
  return (
    <div className="rounded-lg border bg-card p-4 transition-shadow hover:shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h4 className="font-medium text-sm leading-tight">{title}</h4>
        {badge && (
          <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-primary text-[10px] font-medium">
            {badge}
          </span>
        )}
      </div>
      <p className="mb-3 text-muted-foreground text-xs leading-relaxed">{description}</p>
      <div className="text-muted-foreground text-[10px]">{steps}</div>
    </div>
  )
}
