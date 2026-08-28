import { SITE, whatsappHref } from '../siteConfig'
import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-emerald-100 via-amber-50 to-white px-4 pt-24 sm:px-6 lg:px-12 xl:px-20"
    >
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 py-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              स्वागतम्
            </p>
          </Reveal>
          <SplitText
            as="h1"
            text={SITE.name}
            className="mt-3 bg-linear-to-r from-emerald-700 via-teal-600 to-amber-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
            staggerMs={90}
          />
          <SplitText
            as="p"
            text="ग़ाज़ीपुर में आयुर्वेदिक एवं हेमोस्टेटिक स्वास्थ्य सेवा केंद्र"
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
              ज़ेमोरा लैब बायोटेक समग्र और प्राकृतिक चिकित्सा सेवाएं प्रदान करके
              ग़ाज़ीपुर में एक विश्वसनीय स्वास्थ्य सेवा केंद्र बनने के लिए
              प्रतिबद्ध है। आयुर्वेदिक और हेमोस्टेटिक उपचारों के लिए समर्पित
              हमारा यह केंद्र गुणवत्तापूर्ण चिकित्सा पर आधारित है, जिससे आपको
              सुरक्षित और प्रभावी प्राकृतिक समाधान मिलते हैं।
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#appointment"
                className="rounded-md bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-3 text-center text-sm font-semibold text-white shadow transition duration-200 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg active:translate-y-0"
              >
                अभी अपॉइंटमेंट बुक करें
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-emerald-700 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-lg active:translate-y-0"
              >
                व्हाट्सएप पर परामर्श लें
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="animate-float">
            <img
              src="/labimage.jpeg"
              alt="ज़ेमोरा लैब बायोटेक की दुकान, आयुर्वेदिक एवं हर्बल उत्पादों से भरी हुई"
              className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-slate-200"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
