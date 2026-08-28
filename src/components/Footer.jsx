import { SITE, telHref, mailHref } from '../siteConfig'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-10 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/zemrolabLogo.jpeg" alt="Zemora Lab Biotech logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="text-left">
            <p className="font-semibold text-slate-900">{SITE.name}</p>
            <p className="text-xs text-slate-500">{SITE.address}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <a href="#home" className="hover:text-emerald-700">Home</a>
          <a href="#about" className="hover:text-emerald-700">About</a>
          <a href="#facilities" className="hover:text-emerald-700">Facilities</a>
          <a href="#services" className="hover:text-emerald-700">Treatments</a>
          <a href="#gallery" className="hover:text-emerald-700">Gallery</a>
          <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          <a href="#appointment" className="hover:text-emerald-700">Appointment</a>
        </div>

        <div className="text-center text-sm sm:text-right">
          <a href={telHref} className="block font-semibold text-emerald-700 hover:underline">
            {SITE.phoneDisplay}
          </a>
          <a href={mailHref} className="block text-slate-500 hover:underline">
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
        {SITE.name} &bull; Ghazipur, Uttar Pradesh &bull; Contact: {SITE.phoneDisplay}
        <br />
        &copy; {year} {SITE.name}. All rights reserved. GST No. {SITE.gst}
      </div>
    </footer>
  )
}

export default Footer
