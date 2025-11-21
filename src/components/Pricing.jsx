export default function Pricing(){
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-100 tracking-tight">Flexible pricing</h2>
        <p className="mt-2 text-stone-300/80">Start risk-free. Scale as you grow.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{name:'Starter',price:'$9/mo',desc:'For new stores'},{name:'Growth',price:'$29/mo',desc:'For growing sales'},{name:'Pro',price:'$79/mo',desc:'For high volume'}].map((p,i)=> (
            <div key={i} className="relative rounded-[16px] border border-stone-700/60 bg-stone-900/60 p-6">
              <div className="absolute -inset-px rounded-[17px] bg-gradient-to-br from-amber-500/0 to-orange-600/0 hover:from-amber-500/10 hover:to-orange-600/10"></div>
              <p className="text-stone-200 font-semibold">{p.name}</p>
              <p className="mt-4 text-4xl font-extrabold text-stone-100">{p.price}</p>
              <p className="mt-2 text-stone-300/80">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-300/90">
                <li className="flex items-center gap-2"><span className="inline-grid place-items-center w-6 h-6 rounded-md bg-amber-500 text-stone-900"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg></span>Unlimited auctions</li>
                <li className="flex items-center gap-2"><span className="inline-grid place-items-center w-6 h-6 rounded-md bg-amber-500 text-stone-900"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg></span>All features</li>
                <li className="flex items-center gap-2"><span className="inline-grid place-items-center w-6 h-6 rounded-md bg-amber-500 text-stone-900"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/></svg></span>Priority support</li>
              </ul>
              <a href="#install" className="mt-6 inline-flex items-center justify-center w-full px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-900 font-semibold shadow-[0_14px_40px_-10px_rgba(234,179,8,0.6)] hover:brightness-110 transition">Start free trial</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
