import Image from "next/image"

export function CooperLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <div className={className} style={{ aspectRatio: "1/1" }}>
      <div className="relative h-full w-full">
        <Image src="/cooper-logo.png" alt="Cooper" fill className="object-contain" priority />
      </div>
    </div>
  )
}
