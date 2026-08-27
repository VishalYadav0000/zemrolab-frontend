import { SITE, telHref, whatsappHref } from '../siteConfig'

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-linear-to-b from-emerald-50 to-white px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 py-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            {SITE.name} &middot; {SITE.address}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            Ayurvedic, Homeopathic &amp; Unani care under one roof — 100%
            natural products, trusted quality and guidance from {SITE.doctor}
            , D.Pharma, at Jeevan Jyoti Herbal Life.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href={telHref}
              className="rounded-md bg-emerald-700 px-6 py-3 text-center text-sm font-semibold text-white shadow transition hover:bg-emerald-600"
            >
              Call Now: {SITE.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-emerald-700 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div>
          <img
            src="/labimage.jpeg"
            alt="Zemora Labs & Biotech store, fully stocked with Ayurvedic and herbal products"
            className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-slate-200"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
