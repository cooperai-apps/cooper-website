import Image from "next/image"

export function CooperLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <div className={className} style={{ aspectRatio: "1/1" }}>
      <div className="w-full h-full bg-black rounded-[20%] flex items-center justify-center p-1">
        <div className="relative w-full h-full">
          <Image src="/cooper-flower-white.webp" alt="Cooper" fill className="object-contain" priority />
        </div>
      </div>
    </div>
  )
}
