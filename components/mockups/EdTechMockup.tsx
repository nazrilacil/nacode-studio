export default function EdTechMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0f0c1f] via-[#0b0c11] to-[#08090d]">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative">
        <div className="mx-auto w-[170px] rounded-[26px] border border-white/10 bg-black p-1.5 shadow-[0_30px_80px_-20px_rgba(108,99,255,0.5)]">
          <div className="relative aspect-[9/19] overflow-hidden rounded-[20px] bg-[#0e0f15]">
            {/* top bar */}
            <div className="flex items-center justify-between px-3 pt-2.5">
              <div className="h-1 w-6 rounded-full bg-white/30" />
              <div className="h-1 w-1 rounded-full bg-white/30" />
            </div>
            {/* greeting */}
            <div className="px-3 pt-4">
              <div className="text-[7px] uppercase tracking-[0.2em] text-accent-2">
                Today
              </div>
              <div className="mt-1 text-[10px] font-medium text-white">
                Continue learning
              </div>
            </div>
            {/* progress card */}
            <div className="mx-3 mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
              <div className="flex items-center justify-between">
                <div className="h-1.5 w-12 rounded-full bg-white/30" />
                <div className="text-[7px] text-accent-2">72%</div>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-accent" />
              </div>
            </div>
            {/* list */}
            <div className="mt-3 space-y-1.5 px-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5"
                >
                  <div className="h-4 w-4 rounded bg-accent/30" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 w-3/4 rounded bg-white/25" />
                    <div className="h-1 w-1/2 rounded bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
            {/* tab bar */}
            <div className="absolute inset-x-2 bottom-2 flex justify-around rounded-full border border-white/[0.06] bg-white/[0.03] py-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-white/25"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}