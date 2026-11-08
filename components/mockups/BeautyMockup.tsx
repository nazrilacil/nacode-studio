export default function BeautyMockup() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1016] via-[#0d0b11] to-[#08090d]">
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[340px] overflow-hidden rounded-lg border border-white/10 bg-[#0d0a0f] shadow-[0_30px_90px_-30px_rgba(220,140,180,0.28)]">
          {/* top nav */}
          <div className="flex items-center justify-between px-4 py-2.5">
            <div className="text-[7px] tracking-[0.28em] text-white/80">
              BEAUTY
            </div>
            <div className="flex gap-2 text-[6px] text-white/50">
              <span>About</span>
              <span>Services</span>
              <span>Book</span>
            </div>
          </div>
          {/* editorial hero */}
          <div className="relative px-4 py-5">
            <div className="text-[6px] uppercase tracking-[0.3em] text-rose-200/70">
              Est. 2018
            </div>
            <div className="mt-1.5 font-serif text-[15px] italic leading-tight text-white/95">
              Elegance, redefined.
            </div>
            <div className="mt-1 text-[6px] text-white/40">
              A studio for modern beauty rituals.
            </div>
            <div className="mt-3 h-6 w-16 rounded-full border border-rose-200/40" />
          </div>
          {/* image row */}
          <div className="grid grid-cols-3 gap-1 px-4 pb-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-sm bg-gradient-to-br from-rose-300/20 to-rose-500/5 border border-white/[0.06]"
              />
            ))}
          </div>
          {/* footer */}
          <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2">
            <div className="text-[6px] text-white/40">Jakarta · Bali</div>
            <div className="text-[6px] text-rose-200/70">Book now →</div>
          </div>
        </div>
      </div>
    </div>
  );
}