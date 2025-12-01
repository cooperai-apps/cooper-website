const VALUE_METRICS = [
  {
    value: "25",
    unit: "hours",
    description: "Saved monthly per producer",
  },
  {
    value: "17%",
    unit: "",
    description: "More bound premium per producer",
  },
  {
    value: "98%",
    unit: "",
    description: "Data extraction accuracy",
  },
]

export function ValueSection() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-5xl italic tracking-tight">
            Built for results
          </h2>
          <p className="text-lg text-background/70 leading-relaxed">
            Cooper delivers measurable impact from day one.
          </p>
        </div>
        <div className="mx-auto max-w-4xl grid md:grid-cols-3 gap-8 md:gap-12">
          {VALUE_METRICS.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="mb-3">
                <span className="text-5xl md:text-6xl font-bold tracking-tight">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="text-2xl md:text-3xl font-medium ml-1">
                    {metric.unit}
                  </span>
                )}
              </div>
              <p className="text-background/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
