const steps = [
  { t: 'Install the app', d: 'Add Bid Online Auction from Shopify App Store.' },
  { t: 'Choose products', d: 'Pick existing products to enable auctions.' },
  { t: 'Set rules', d: 'Define start/end time, reserve, increments.' },
  { t: 'Go live', d: 'Publish and watch bids roll in with real-time updates.' }
]

export default function Process() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-[16px] border border-stone-700/60 bg-stone-900/60 p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 grid place-items-center text-stone-900 shadow-[0_12px_30px_-10px_rgba(234,179,8,0.6)]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"/></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-100 tracking-tight">Simple setup process</h2>
          </div>
          <p className="mt-2 text-stone-300/80">Get started with auctions in minutes.</p>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 counter-decimal">
            {steps.map((s, i) => (
              <li key={i} className="relative rounded-[14px] border border-stone-700/60 bg-stone-900 p-5">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-stone-900 grid place-items-center font-bold shadow-[0_12px_30px_-10px_rgba(234,179,8,0.6)]">{i+1}</div>
                <p className="font-semibold text-stone-100">{s.t}</p>
                <p className="mt-1 text-sm text-stone-300/80">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
