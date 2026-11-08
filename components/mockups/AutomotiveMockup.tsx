export default function AutomotiveMockup() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#14100a] via-[#0c0d12] to-[#08090d]">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-[#0b0c11] shadow-[0_30px_90px_-30px_rgba(255,180,80,0.28)]">
          {/* nav */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <div className="text-[8px] font-medium tracking-[0.18em] text-white">
              PANGANDARAN
            </div>
            <div className="flex gap-2 text-[6px] text-muted">
              <span>Service</span>
              <span>Booking</span>
              <span>Contact</span>
            </div>
            <div className="h-3 w-10 rounded-sm bg-orange-400/80" />
          </div>
          {/* hero */}
          <div className="grid grid-cols-2 gap-3 p-3">
            <div className="space-y-1.5">
              <div className="text-[6px] uppercase tracking-[0.22em] text-orange-300/80">
                Auto Service
              </div>
              <div className="h-2 w-full rounded bg-white/25" />
              <div className="h-2 w-3/4 rounded bg-white/15" />
              <div className="h-2 w-1/2 rounded bg-white/10" />
              <div className="mt-2 h-3 w-14 rounded-sm bg-orange-400/90" />
            </div>
            <div className="aspect-[4/3] rounded border border-white/[0.08] bg-gradient-to-br from-orange-500/15 to-transparent">
              <div className="flex h-full items-center justify-center">
                <div className="h-6 w-10 rounded-sm bg-white/10" />
              </div>
            </div>
          </div>
          {/* strip */}
          <div className="grid grid-cols-3 gap-2 border-t border-white/[0.06] px-3 py-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-1">
                <div className="h-1 w-6 rounded bg-white/25" />
                <div className="h-1 w-full rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}