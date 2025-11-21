import { useEffect, useState } from 'react'

function FilledLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-[0_10px_30px_-10px_rgba(234,179,8,0.6)] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" aria-hidden>
          <path d="M12 2c-1.7 0-3 .9-3.9 2.2-.6.8-.5 1.9.3 2.6l1.1.9c.5.4.6 1.1.3 1.6l-1.8 3.2c-.6 1 .2 2.3 1.4 2.3h1.4c.7 0 1.2.6 1.1 1.2L11.5 20c-.1.9.7 1.7 1.6 1.7.5 0 1-.2 1.3-.7l4.9-7.3c.9-1.4 1.4-3 .7-4.6-.9-2.1-3.5-3.1-5.6-2.2l-.8.3c-.7.3-1.5-.1-1.7-.8l-.3-1C13.2 3.2 12.7 2 12 2z"/>
        </svg>
      </div>
      <div className="leading-5">
        <p className="text-amber-400 font-semibold tracking-tight">Bid Online Auction</p>
        <p className="text-xs text-stone-300/80">Shopify App Store</p>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const nav = (
    <nav className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
      <a href="#how" className="text-stone-200/90 hover:text-amber-400 transition">How to Create</a>
      <a href="#features" className="text-stone-200/90 hover:text-amber-400 transition">Features</a>
      <a href="#pricing" className="text-stone-200/90 hover:text-amber-400 transition">Price</a>
      <a href="#install" className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-900 font-semibold shadow-[0_12px_30px_-10px_rgba(234,179,8,0.6)] hover:brightness-110 transition">Install</a>
    </nav>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-stone-900/40 bg-stone-900/70 border border-stone-700/50 rounded-2xl">
          <div className="flex items-center justify-between py-3 px-4">
            <FilledLogo />
            <div className="hidden md:block">{nav}</div>
            <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 rounded-xl bg-stone-800 text-stone-200 grid place-items-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-stone-700/50 px-4 pb-4">
              {nav}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
