import { SITE } from '../siteConfig'
import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto max-w-5xl">
        <SplitText
          as="h2"
          text={`About ${SITE.name}`}
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <Reveal delay={150}>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Since the inception of our healthcare centre, our mission has been
            to provide personalized, root-cause healing for chronic and
            lifestyle disorders. By combining traditional medical knowledge
            with modern diagnostic evaluations, we deliver exceptional care
            tailored to every patient's needs.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 rounded-2xl bg-emerald-50 p-8 shadow-sm transition hover:shadow-md sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Meet the Doctor
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              {SITE.doctor}
            </h3>
            <p className="text-sm font-medium text-slate-500">{SITE.doctorTitle}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {SITE.doctor} brings expertise in herbal formulation, natural
              therapeutics, and chronic disease management. With a dedicated
              patient-first approach, the clinic provides safe, ethical, and
              result-oriented treatments.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <p className="text-2xl font-bold text-emerald-700">D.Pharm</p>
              <p className="mt-1 text-sm text-slate-600">Qualified Pharmacist</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <p className="text-2xl font-bold text-emerald-700">Licensed</p>
              <p className="mt-1 text-sm text-slate-600">Certified Practitioner</p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <p className="text-2xl font-bold text-emerald-700">100%</p>
              <p className="mt-1 text-sm text-slate-600">Natural &amp; Safe Products</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
