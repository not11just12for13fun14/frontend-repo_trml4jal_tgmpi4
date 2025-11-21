const features = [
  'Auction on Existing Products',
  'Customizable Bid Increment',
  'Reserve & Buy Now Options',
  'Start/End Scheduling',
  'Real-time Bid Updates',
  'Email & In-app Notifications',
  'Auto-extend Last-minute Bids',
  'Detailed Analytics'
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08),transparent_60%)]"/>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-100 tracking-tight">Powerful features built for sales</h2>
        <p className="mt-3 text-stone-300/80">Everything you need to run high-converting auctions on Shopify.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-[14px] border border-stone-700/60 bg-stone-900/60 p-5 hover:bg-stone-900 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-stone-900 grid place-items-center mb-3 shadow-[0_12px_30px_-10px_rgba(234,179,8,0.6)]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg>
              </div>
              <p className="text-stone-200 font-medium">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
