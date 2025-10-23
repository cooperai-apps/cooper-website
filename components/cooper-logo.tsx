export function CooperLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <div className={className} style={{ aspectRatio: "1/1" }}>
      <div className="w-full h-full bg-black rounded-[20%] flex items-center justify-center">
        <span className="text-white font-sans font-bold leading-none" style={{ fontSize: "140%" }}>
          C
        </span>
      </div>
    </div>
  )
}
