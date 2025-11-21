export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-24">
      {/* Parallax backgrounds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 w-[60rem] h-[60rem] rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/10 blur-3xl" style={{ transform: 'translateZ(-1px) scale(1.3)' }}></div>
        <div className="absolute top-40 -right-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-orange-400/20 to-rose-500/10 blur-3xl" style={{ transform: 'translateZ(-0.5px) scale(1.1)' }}></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-stone-100">
            Boost Your Sales with Exciting Auctions
          </h1>
          <p className="mt-5 text-lg md:text-xl text-stone-300/90 leading-relaxed">
            Transform your Shopify store with our powerful auction system. Engage customers, create urgency, and maximize profits with our easy-to-use auction platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#install" className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-900 font-semibold shadow-[0_14px_40px_-10px_rgba(234,179,8,0.6)] hover:brightness-110 transition">Install Now</a>
            <a href="#how" className="px-5 py-3 rounded-xl bg-stone-800 text-stone-200 hover:bg-stone-700 transition">How it works</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-[20px] overflow-hidden border border-stone-700/60 bg-stone-900 shadow-2xl">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Bid Online Auction Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-r from-amber-500/30 to-orange-600/30 blur opacity-40 -z-10"></div>
        </div>
      </div>
    </section>
  )
}
