export default function CTA(){
  return (
    <section id="install" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[16px] border border-stone-700/60 bg-gradient-to-r from-amber-500 to-orange-600 p-8">
          <div className="absolute -inset-1 rounded-[18px] bg-amber-500/40 blur-2xl opacity-30"></div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">Ready to boost your sales?</h3>
            <p className="mt-2 text-stone-900/80">Install Bid Online Auction and start running engaging auctions today.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="#" className="px-5 py-3 rounded-xl bg-stone-900 text-amber-400 font-semibold">Install on Shopify</a>
              <a href="#pricing" className="px-5 py-3 rounded-xl bg-stone-900/20 text-stone-900 font-semibold border border-stone-900/30">See pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
