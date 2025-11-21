const faqs = [
  {q:'How do auctions work on my products?', a:'Enable auctions on any existing product, set rules, and buyers place bids directly on the product pages.'},
  {q:'Can I set reserve prices?', a:'Yes. You can set reserve and Buy Now options to ensure minimum profitability.'},
  {q:'Does it support notifications?', a:'Shoppers and admins receive email/in-app updates for bids and winners.'},
  {q:'Is it easy to install?', a:'Add the app, pick products, configure options, and go live in minutes.'},
  {q:'Is there real-time bidding?', a:'Yes. Bids update instantly so buyers always see the latest price.'},
  {q:'Do you provide support?', a:'24/7 support is included with all plans to help you succeed.'},
]

export default function FAQ(){
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-100 tracking-tight">Frequently asked questions</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f,i)=> (
            <div key={i} className="rounded-[14px] border border-stone-700/60 bg-stone-900/60 p-6">
              <div className="flex items-start gap-3">
                <span className="inline-grid place-items-center w-7 h-7 rounded-lg bg-amber-500 text-stone-900 flex-shrink-0"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm1.07-7.75l-.9.92A2 2 0 0012 12h-1v-1h1a1 1 0 00.71-1.71l-1.2-1.2 1.42-1.42 1.2 1.2a3 3 0 010 4.24A3 3 0 0112 12h-1a1 1 0 00-1 1v2h2v1H9v-3a3 3 0 013-3h1a1 1 0 000-2 1 1 0 01-.71-.29l-1.2-1.2 1.42-1.42 1.2 1.2a3 3 0 010 4.24z"/></svg></span>
                <div>
                  <p className="font-semibold text-stone-100">{f.q}</p>
                  <p className="mt-1 text-stone-300/80 text-sm">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
