import Image from "next/image"

export function CooperLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/cooper-logo.webp"
        alt="Cooper"
        width={64}
        height={64}
        className="h-full w-full"
        priority
      />
    </div>
  )
}
