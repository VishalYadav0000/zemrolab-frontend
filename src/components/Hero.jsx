import { SITE, whatsappHref } from '../siteConfig'
import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-b from-emerald-50 to-white px-4 pt-24 sm:px-6 lg:px-12 xl:px-20"
    >
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 py-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Welcome to
            </p>
          </Reveal>
          <SplitText
            as="h1"
            text={SITE.name}
            className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            staggerMs={90}
          />
          <SplitText
            as="p"
            text="Centre for Ayurvedic & Haemostatic Healthcare in Ghazipur"
            className="mt-2 text-lg font-medium text-emerald-800 sm:text-xl"
            staggerMs={35}
            startDelay={350}
          />
          <Reveal delay={550}>
            <p className="mt-1 text-sm italic text-slate-500">
              {SITE.tagline} &middot; {SITE.subtitle}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              We are committed to being the trusted healthcare destination in
              Ghazipur, offering comprehensive and holistic medical care.
              Our specialized centre for Ayurvedic and Haemostatic treatments
              is built on a strong foundation of quality care, ensuring you
              receive the safest and most effective natural solutions.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#appointment"
                className="rounded-md bg-emerald-700 px-6 py-3 text-center text-sm font-semibold text-white shadow transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg active:translate-y-0"
              >
                Book Appointment Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-emerald-700 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-lg active:translate-y-0"
              >
                Consult on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="animate-float">
            <img
              src="/labimage.jpeg"
              alt="Zemora Lab Biotech store, fully stocked with Ayurvedic and herbal products"
              className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-slate-200"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
