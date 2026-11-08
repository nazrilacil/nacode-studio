export default function DashboardMockup() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#0a0b11] to-[#08090d]">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-[#0b0c11] shadow-[0_30px_90px_-30px_rgba(80,130,255,0.35)]">
          {/* top bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-sm bg-sky-400" />
              <div className="h-1 w-8 rounded bg-white/25" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-1 w-6 rounded bg-white/15" />
              <div className="h-1 w-6 rounded bg-white/15" />
              <div className="h-2 w-2 rounded-full bg-white/20" />
            </div>
          </div>
          {/* content */}
          <div className="grid grid-cols-[70px_1fr] gap-2 p-2.5">
            {/* sidebar */}
            <div className="space-y-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`flex items-center gap-1 rounded px-1.5 py-1 ${
                    i === 0 ? "bg-sky-400/10" : ""
                  }`}
                >
                  <div
                    className={`h-1.5 w-1.5 rounded-sm ${
                      i === 0 ? "bg-sky-400" : "bg-white/20"
                    }`}
                  />
                  <div
                    className={`h-1 flex-1 rounded ${
                      i === 0 ? "bg-sky-400/50" : "bg-white/10"
                    }`}
                  />
                </div>
              ))}
            </div>
            {/* main */}
            <div className="space-y-2">
              {/* KPI row */}
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded border border-white/[0.06] bg-white/[0.02] p-1.5"
                  >
                    <div className="h-1 w-4 rounded bg-white/20" />
                    <div className="mt-1 h-2 w-6 rounded bg-white/40" />
                    <div className="mt-1 h-1 w-3 rounded bg-emerald-400/60" />
                  </div>
                ))}
              </div>
              {/* chart */}
              <div className="rounded border border-white/[0.06] bg-white/[0.02] p-2">
                <div className="flex h-14 items-end gap-1">
                  {[35, 55, 40, 70, 50, 80, 62, 90, 74].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-sky-500/40 to-sky-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              {/* rows */}
              <div className="space-y-1">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 rounded border border-white/[0.06] bg-white/[0.02] p-1.5"
                  >
                    <div className="h-2 w-2 rounded-full bg-sky-400/60" />
                    <div className="h-1 flex-1 rounded bg-white/15" />
                    <div className="h-1 w-6 rounded bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}