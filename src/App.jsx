import { useEffect } from 'react'

function App() {
  // Smooth scroll for same-page links
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')?.slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-300 selection:text-stone-900">
      {/* Parallax hero background */}
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(245,158,11,0.15),transparent_60%)]"
        aria-hidden
      />
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(900px_500px_at_0%_20%,rgba(244,114,182,0.10),transparent_60%)]"
        aria-hidden
      />

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-stone-950/60 bg-stone-900/70 border-b border-amber-500/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            {/* Warm filled logo */}
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-[0_8px_24px_rgba(245,158,11,0.35)]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-stone-900" aria-hidden>
                <path d="M12 2c.7 0 1.37.36 1.75.97l1.22 1.9c.2.31.48.56.82.7l2.1.84c1.32.53 1.71 2.22.75 3.31l-1.5 1.73c-.24.28-.39.63-.43 1l-.26 2.26c-.16 1.4-1.72 2.22-3 1.55l-2-1.03a2.02 2.02 0 0 0-1.86 0l-2 1.03c-1.28.67-2.84-.15-3-1.55l-.26-2.26a2 2 0 0 0-.43-1L3.36 9.72c-.96-1.09-.57-2.78.75-3.31l2.1-.84c.34-.14.62-.39.82-.7l1.22-1.9C10.63 2.36 11.3 2 12 2Z"/>
              </svg>
            </span>
            <div className="leading-tight">
              <span className="block font-semibold tracking-tight">Bid Online Auction</span>
              <span className="block text-xs text-stone-300/80">for Shopify</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-sm text-stone-200 hover:text-amber-400 transition">How to Create</a>
            <a href="#features" className="text-sm text-stone-200 hover:text-amber-400 transition">Features</a>
            <a href="#pricing" className="text-sm text-stone-200 hover:text-amber-400 transition">Price</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#install" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 px-4 py-2 text-sm font-semibold text-stone-900 shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:brightness-110 active:brightness-95 transition">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-stone-900" aria-hidden>
                <path d="M12 2a1 1 0 0 1 1 1v9h3a1 1 0 0 1 .7 1.7l-4 4a1 1 0 0 1-1.4 0l-4-4A1 1 0 0 1 8 12h3V3a1 1 0 0 1 1-1Zm-7 18a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"/>
              </svg>
              Install
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with parallax layers */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"
          style={{ backgroundAttachment: 'fixed' }}
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-stone-950/70" aria-hidden />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-stone-800/70 px-3 py-1 text-xs text-stone-200 ring-1 ring-amber-500/20">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                Live product auctions for Shopify
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-50">
                Boost Your Sales with Exciting Auctions
              </h1>
              <p className="mt-5 text-lg text-stone-200/90 max-w-xl">
                Transform your Shopify store with our powerful auction system. Engage customers, create urgency, and maximize profits with our easy-to-use auction platform.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#install" className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 px-5 py-3 font-semibold text-stone-900 shadow-[0_12px_36px_rgba(245,158,11,0.35)] hover:brightness-110 active:brightness-95 transition">Install on Shopify</a>
                <a href="#features" className="rounded-2xl px-5 py-3 font-semibold text-amber-300 hover:text-amber-200 transition">Explore features</a>
              </div>
            </div>

            {/* YouTube video */}
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-amber-500/20 shadow-[0_40px_80px_-20px_rgba(245,158,11,0.25)]">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Bid Online Auction Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why" className="relative py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_80%_0%,rgba(245,158,11,0.12),transparent_60%)]" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why choose Bid Online Auction</h2>
            <p className="mt-3 text-stone-300/90">Six reasons merchants love our auction app.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Increase Conversion', desc: 'Auctions create urgency that drives faster purchase decisions.' },
              { title: 'Clear Inventory', desc: 'Move slow stock with time-bound competitive bidding.' },
              { title: 'Easy to Manage', desc: 'Create and monitor auctions from a clean, intuitive dashboard.' },
              { title: 'Mobile Ready', desc: 'Seamless bidding on phones and tablets with responsive UI.' },
              { title: 'Secure Payments', desc: 'Winners pay confidently with your existing checkout flow.' },
              { title: '24/7 Support', desc: 'We’re here to help you launch and optimize auctions.' },
            ].map((c, i) => (
              <div key={i} className="group rounded-2xl bg-stone-900/60 p-6 ring-1 ring-amber-500/10 hover:ring-amber-500/30 transition shadow-[0_20px_60px_-20px_rgba(245,158,11,0.20)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-stone-900">
                  {/* Filled icon: spark */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-stone-900" aria-hidden>
                    <path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-stone-300/90 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(244,114,182,0.10),transparent_60%)]" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to run auctions</h2>
            <p className="mt-3 text-stone-300/90">Feature-rich, merchant-friendly, and built for growth.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Auction on Existing Products',
              'Customizable Bid Increment',
              'Reserve Price & Buy Now',
              'Start/End Scheduling',
              'Auto-Bid & Proxy Bidding',
              'Real-time Bid Updates',
              'Winner Notifications',
              'Multi-currency Support',
            ].map((title, i) => (
              <div key={i} className="rounded-2xl bg-stone-900/60 p-6 ring-1 ring-amber-500/10 hover:ring-amber-500/30 transition">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
                  {/* Filled check icon */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-stone-900" aria-hidden>
                    <path d="M9.5 16.5 5 12l1.5-1.5 3 3 8-8L19 7l-9.5 9.5z"/>
                  </svg>
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Create / Simple Setup */}
      <section id="how" className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple setup process</h2>
            <p className="mt-3 text-stone-300/90">Get started with auctions in minutes.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[{
              step: '1',
              title: 'Install the app',
              desc: 'Connect your Shopify store and grant permissions in one click.'
            },{
              step: '2',
              title: 'Create an auction',
              desc: 'Pick an existing product, set start/end, reserve price, and increments.'
            },{
              step: '3',
              title: 'Launch & monitor',
              desc: 'Publish, watch bids in real-time, and let the winner check out.'
            }].map((s, i) => (
              <div key={i} className="rounded-2xl bg-stone-900/60 p-6 ring-1 ring-amber-500/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-stone-900 font-extrabold">{s.step}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-stone-300/90 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_280px_at_50%_0%,rgba(245,158,11,0.12),transparent_60%)]" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple pricing</h2>
            <p className="mt-3 text-stone-300/90">Choose a plan that fits your store size. No hidden fees.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[{
              name: 'Starter', price: '$9/mo', perks: ['Up to 5 active auctions', 'Email support', 'Basic analytics']
            },{
              name: 'Growth', price: '$29/mo', perks: ['Unlimited auctions', 'Priority support', 'Advanced analytics']
            },{
              name: 'Scale', price: '$79/mo', perks: ['Unlimited auctions', 'SLA support', 'Custom features']
            }].map((p, i) => (
              <div key={i} className={`rounded-2xl p-6 ring-1 transition ${i===1 ? 'bg-gradient-to-br from-amber-500/10 to-orange-600/10 ring-amber-500/40 shadow-[0_30px_80px_-20px_rgba(245,158,11,0.35)]' : 'bg-stone-900/60 ring-amber-500/10'}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <div className="text-2xl font-extrabold text-amber-400">{p.price}</div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-stone-200/90">
                  {p.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-amber-500">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-stone-900" aria-hidden>
                          <path d="M9.5 16.5 5 12l1.5-1.5 3 3 8-8L19 7l-9.5 9.5z"/>
                        </svg>
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a href="#install" className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-4 py-2 font-semibold text-stone-900 ${i===1 ? 'bg-gradient-to-br from-amber-500 to-orange-600' : 'bg-amber-500 hover:brightness-110'} transition`}>Start free trial</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">FAQs</h2>
            <p className="mt-3 text-stone-300/90">Quick answers to common questions.</p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              { q: 'Can I run auctions on existing products?', a: 'Yes. Select any product from your catalog and turn it into an auction without duplicates.' },
              { q: 'How do bid increments work?', a: 'Set fixed or percentage-based increments. You can change them per auction.' },
              { q: 'Do customers need accounts?', a: 'Customers place bids with their store account so you can manage winners securely.' },
              { q: 'Is there a free trial?', a: 'All plans start with a free trial so you can test before committing.' },
              { q: 'What happens when an auction ends?', a: 'The winner receives a checkout link automatically with their winning bid price.' },
              { q: 'Does it support multiple currencies?', a: 'Yes, we follow your store currency and formatting.' },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-stone-900/60 p-6 ring-1 ring-amber-500/10">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-xl bg-orange-500">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-stone-900" aria-hidden>
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z"/>
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold">{f.q}</h3>
                    <p className="mt-2 text-sm text-stone-300/90">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with parallax background */}
      <section id="install" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"
          style={{ backgroundAttachment: 'fixed' }}
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-950/80 to-stone-950/90" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Start your first auction today</h2>
          <p className="mt-4 text-stone-200/90 max-w-2xl mx-auto">Bring excitement to your storefront and turn browsers into bidders.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#" className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 px-6 py-3 font-semibold text-stone-900 shadow-[0_12px_36px_rgba(245,158,11,0.35)] hover:brightness-110 transition">Install on Shopify</a>
            <a href="#how" className="rounded-2xl px-6 py-3 font-semibold text-amber-300 hover:text-amber-200 transition">See how it works</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-stone-900" aria-hidden>
                    <path d="M12 2c.7 0 1.37.36 1.75.97l1.22 1.9c.2.31.48.56.82.7l2.1.84c1.32.53 1.71 2.22.75 3.31l-1.5 1.73c-.24.28-.39.63-.43 1l-.26 2.26c-.16 1.4-1.72 2.22-3 1.55l-2-1.03a2.02 2.02 0 0 0-1.86 0l-2 1.03c-1.28.67-2.84-.15-3-1.55l-.26-2.26a2 2 0 0 0-.43-1L3.36 9.72c-.96-1.09-.57-2.78.75-3.31l2.1-.84c.34-.14.62-.39.82-.7l1.22-1.9C10.63 2.36 11.3 2 12 2Z"/>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold">Bid Online Auction</p>
                  <p className="text-xs text-stone-400">for Shopify</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-stone-300/80 max-w-xs">Contact us to bring the thrill of auctions to your store.</p>
              <div className="mt-4 space-y-1 text-sm text-stone-300/80">
                <p>123 Commerce Ave, Suite 200</p>
                <p>hello@bidonline.app</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                {/* Filled social icons */}
                <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 hover:bg-stone-800 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-stone-100" aria-hidden>
                    <path d="M22 5.8c-.7.3-1.5.5-2.2.6.8-.5 1.4-1.2 1.7-2.2-.7.4-1.6.8-2.5 1-1.4-1.5-3.8-1.2-5 0-1 1-1.3 2.4-.8 3.7-3-.2-5.7-1.6-7.6-3.9-1 1.8-.5 4 1.1 5.2-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.7 3.4 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 3 4 3-1.6 1.3-3.6 2-5.7 2h-.7c2 1.2 4.4 1.9 6.9 1.9 8.3 0 12.9-7 12.9-13.1v-.6c.9-.6 1.6-1.3 2.2-2.1Z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 hover:bg-stone-800 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-stone-100" aria-hidden>
                    <path d="M13 10h3l-.4 3H13v9h-3v-9H8V10h2V8.2C10 6 11.4 5 13.9 5H16v3h-1.4c-1 0-1.6.5-1.6 1.5V10Z"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 hover:bg-stone-800 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-stone-100" aria-hidden>
                    <path d="M23.5 7.1a4.5 4.5 0 0 0-3.2-3.2C18.4 3.3 12 3.3 12 3.3s-6.3 0-8.3.6A4.5 4.5 0 0 0 .5 7.1 47 47 0 0 0 0 12a47 47 0 0 0 .5 4.9 4.5 4.5 0 0 0 3.2 3.2c2 .6 8.3.6 8.3.6s6.4 0 8.3-.6a4.5 4.5 0 0 0 3.2-3.2c.4-1.6.5-3.3.5-4.9a47 47 0 0 0-.5-4.9ZM9.8 15.3V8.7L15.8 12l-6 3.3Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3">Useful Links</p>
              <ul className="space-y-2 text-sm text-stone-300/90">
                <li><a href="#features" className="hover:text-amber-300 transition">Features</a></li>
                <li><a href="#how" className="hover:text-amber-300 transition">How to Create</a></li>
                <li><a href="#pricing" className="hover:text-amber-300 transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-amber-300 transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-3">Pages</p>
              <ul className="space-y-2 text-sm text-stone-300/90">
                <li><a href="#" className="hover:text-amber-300 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-300 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-amber-300 transition">Support</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-3">Contact</p>
              <form className="space-y-3">
                <input type="email" placeholder="Your email" className="w-full rounded-2xl bg-stone-900 px-4 py-2 text-sm placeholder:text-stone-500 ring-1 ring-stone-700 focus:outline-none focus:ring-amber-500/50" />
                <textarea placeholder="Message" rows={3} className="w-full rounded-2xl bg-stone-900 px-4 py-2 text-sm placeholder:text-stone-500 ring-1 ring-stone-700 focus:outline-none focus:ring-amber-500/50" />
                <button className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-900 hover:brightness-110 transition" type="button">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-stone-900" aria-hidden>
                    <path d="M2 12 22 2l-5 20-6-6-4 4 1-6-6-2Z"/>
                  </svg>
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-stone-800 text-sm text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Bid Online Auction. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-amber-300 transition">Privacy</a>
              <a href="#" className="hover:text-amber-300 transition">Terms</a>
              <a href="#" className="hover:text-amber-300 transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
