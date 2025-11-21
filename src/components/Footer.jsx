export default function Footer(){
  return (
    <footer className="pt-16 pb-10 border-t border-stone-800 mt-10">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-4 gap-10">
        <div>
          <p className="text-amber-400 font-semibold text-lg">Bid Online Auction</p>
          <p className="mt-2 text-stone-300/80 text-sm">Engage shoppers with exciting auctions and turn views into sales.</p>
          <div className="mt-4 flex items-center gap-3">
            <a className="w-9 h-9 rounded-lg bg-stone-800 grid place-items-center text-stone-200" href="#"><svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.07 5.66 21.2 10.44 22v-7.02H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.92h-2.33V22C18.34 21.2 22 17.07 22 12.06z"/></svg></a>
            <a className="w-9 h-9 rounded-lg bg-stone-800 grid place-items-center text-stone-200" href="#"><svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22.46 6c-.77.35-1.6.58-2.46.69A4.25 4.25 0 0011 9.7v.95A12.06 12.06 0 013 6.54s-4 9 5 13a13.93 13.93 0 01-8 2c9 5 20 0 20-11.5 0-.18 0-.35-.01-.53.83-.6 1.55-1.35 2.12-2.21z"/></svg></a>
            <a className="w-9 h-9 rounded-lg bg-stone-800 grid place-items-center text-stone-200" href="#"><svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.04c-5.5 0-10 4.47-10 9.98 0 4.41 2.87 8.15 6.84 9.47.5.09.68-.21.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0112 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48 3.97-1.32 6.84-5.06 6.84-9.47 0-5.51-4.5-9.98-10-9.98z"/></svg></a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-stone-100">Contact</p>
          <p className="mt-2 text-stone-300/80 text-sm">123 Commerce St, Suite 100<br/>Ecom City, EC 00000</p>
          <p className="mt-2 text-stone-300/80 text-sm">support@bidonlineauction.app</p>
        </div>
        <div>
          <p className="font-semibold text-stone-100">Useful Links</p>
          <ul className="mt-2 space-y-2 text-stone-300/80 text-sm">
            <li><a href="#features" className="hover:text-amber-400">Features</a></li>
            <li><a href="#how" className="hover:text-amber-400">How it works</a></li>
            <li><a href="#pricing" className="hover:text-amber-400">Pricing</a></li>
            <li><a href="#install" className="hover:text-amber-400">Install</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-stone-100">Pages</p>
          <ul className="mt-2 space-y-2 text-stone-300/80 text-sm">
            <li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-amber-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-amber-400">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 mt-10 text-stone-400 text-sm">© {new Date().getFullYear()} Bid Online Auction. All rights reserved.</div>
    </footer>
  )
}
