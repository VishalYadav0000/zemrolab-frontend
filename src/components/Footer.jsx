import { SITE, telHref } from '../siteConfig'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/zemrolabLogo.jpeg" alt="Zemora Labs & Biotech logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="text-left">
            <p className="font-semibold text-slate-900">{SITE.name}</p>
            <p className="text-xs text-slate-500">{SITE.address}</p>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-slate-600">
          <a href="#home" className="hover:text-emerald-700">Home</a>
          <a href="#about" className="hover:text-emerald-700">About</a>
          <a href="#services" className="hover:text-emerald-700">Services</a>
          <a href="#gallery" className="hover:text-emerald-700">Gallery</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
        </div>

        <a href={telHref} className="text-sm font-semibold text-emerald-700 hover:underline">
          {SITE.phone}
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
        &copy; {year} {SITE.name}. All rights reserved. GST No. {SITE.gst}
      </div>
    </footer>
  )
}

export default Footer
