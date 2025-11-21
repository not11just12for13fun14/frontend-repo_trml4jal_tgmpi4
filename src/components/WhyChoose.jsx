const items = [
  { title: 'Drives Urgency', desc: 'Auctions create FOMO that motivates shoppers to act fast.', icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-6a1 1 0 011 1v2h-2V3a1 1 0 011-1zm9 7a1 1 0 01-1 1h-2V8h2a1 1 0 011 1zM6 10H4a1 1 0 010-2h2v2zm.22 8.36l-1.42 1.42A1 1 0 013.36 18.8l1.42-1.42A1 1 0 016.22 18.36zM20.64 5.2l-1.42 1.42A1 1 0 0117.8 5.2l1.42-1.42a1 1 0 011.42 1.42zM18 20h-2v-2h2a1 1 0 010 2z"/></svg>
  ) },
  { title: 'Boosts Engagement', desc: 'Interactive bidding keeps customers on your site longer.', icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4 8.28 4 9.94 5.09 11 6.58 12.06 5.09 13.72 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  ) },
  { title: 'Higher Conversions', desc: 'Encourage more purchases with competitive pricing.', icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12 3l1.9 3.86L18 8l-3 2.91.7 4.09L12 13.77 8.3 15.99 9 11.91 6 9l4.1-.14L12 3z"/></svg>
  ) },
  { title: 'Easy Management', desc: 'Simple controls to create, schedule, and monitor auctions.', icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M19.14 12.94a1.5 1.5 0 00.11-.55 1.5 1.5 0 00-.11-.55l2.03-1.58a.5.5 0 000-.8l-1.92-1.92a.5.5 0 00-.8 0L16.6 8.62c-.17-.09-.36-.17-.55-.22l-.31-2.59a.5.5 0 00-.5-.43h-2.84a.5.5 0 00-.5.43l-.31 2.59c-.19.05-.38.13-.55.22L6.45 6.49a.5.5 0 00-.8 0L3.73 8.41a.5.5 0 000 .8l2.03 1.58c-.07.18-.1.36-.11.55s.04.37.11.55L3.73 12.96a.5.5 0 000 .8l1.92 1.92a.5.5 0 00.8 0l2.1-1.63c.17.09.36.17.55.22l.31 2.59a.5.5 0 00.5.43h2.84a.5.5 0 00.5-.43l.31-2.59c.19-.05.38-.13.55-.22l2.1 1.63a.5.5 0 00.8 0l1.92-1.92a.5.5 0 000-.8l-2.03-1.58z"/></svg>
  ) },
  { title: 'Secure & Reliable', desc: 'Robust infrastructure keeps auctions fair and stable.', icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12 1l8 4v6c0 5-3.33 9.74-8 11-4.67-1.26-8-6-8-11V5l8-4zm0 6a3 3 0 100 6 3 3 0 000-6z"/></svg>
  ) },
  { title: '24/7 Support', desc: 'We’re here to help you succeed at any time.', icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12 2a9 9 0 00-9 9v3a4 4 0 004 4h1v-6H6v-1a6 6 0 1112 0v1h-2v6h1a4 4 0 004-4v-3a9 9 0 00-9-9z"/></svg>
  ) }
]

export default function WhyChoose() {
  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-100 tracking-tight">Why choose Bid Online Auction?</h2>
        <p className="mt-3 text-stone-300/80">Six reasons merchants love using our auction app.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group relative rounded-[14px] border border-stone-700/60 bg-stone-900/60 p-6 hover:bg-stone-900 transition">
              <div className="absolute -inset-px rounded-[15px] bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-orange-600/0 group-hover:from-amber-500/10 group-hover:to-orange-600/10"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-stone-900 grid place-items-center shadow-[0_12px_30px_-10px_rgba(234,179,8,0.6)]">{it.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-stone-100">{it.title}</h3>
              <p className="mt-2 text-sm text-stone-300/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
