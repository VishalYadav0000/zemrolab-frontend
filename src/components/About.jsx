import { SITE } from '../siteConfig'

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          About {SITE.doctor}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
          {SITE.doctor} is a D.Pharma qualified practitioner and the founder
          of {SITE.name}, a licensed Ayurvedic, Homeopathic &amp; Unani
          healthcare centre in {SITE.address}. Backed by an official company
          license, {SITE.doctor} brings together traditional herbal wisdom
          and modern diagnostic support to guide patients toward safe,
          natural and lasting relief.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-6">
            <p className="text-2xl font-bold text-emerald-700">D.Pharma</p>
            <p className="mt-1 text-sm text-slate-600">Qualified Pharmacist</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-6">
            <p className="text-2xl font-bold text-emerald-700">Licensed</p>
            <p className="mt-1 text-sm text-slate-600">Company Certified</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-6">
            <p className="text-2xl font-bold text-emerald-700">100%</p>
            <p className="mt-1 text-sm text-slate-600">Natural &amp; Safe Products</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
