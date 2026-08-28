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
          text="हमारे बारे में"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-emerald-500 to-amber-500" />

        <Reveal delay={150}>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            शुरुआत से ही हमारा उद्देश्य पुरानी और जीवनशैली से जुड़ी बीमारियों
            को जड़ से ठीक करना रहा है। पारंपरिक चिकित्सा ज्ञान और आधुनिक जांच
            पद्धतियों के समन्वय से हम प्रत्येक मरीज़ की आवश्यकता के अनुसार
            व्यक्तिगत उपचार प्रदान करते हैं।
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-8 overflow-hidden rounded-2xl bg-emerald-50 shadow-sm transition hover:shadow-md sm:grid-cols-5">
            <div className="sm:col-span-2">
              <img
                src="/WhatsApp Image 2026-08-28 at 8.27.10 PM.jpeg"
                alt="डॉ. गोविंद कुमार, ज़ेमोरा लैब बायोटेक क्लिनिक में"
                className="h-64 w-full object-cover sm:h-full"
              />
            </div>
            <div className="p-8 sm:col-span-3 sm:py-10 sm:pr-10 sm:pl-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                चिकित्सक परिचय
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {SITE.doctor}
              </h3>
              <p className="text-sm font-medium text-slate-500">{SITE.doctorTitle}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                डॉ. गोविंद कुमार हर्बल फॉर्मूलेशन, प्राकृतिक चिकित्सा और जटिल
                बीमारियों के प्रबंधन में विशेषज्ञता रखते हैं। मरीज़ों के
                स्वास्थ्य को प्राथमिकता देते हुए, हमारा क्लिनिक सुरक्षित,
                नैतिक और परिणाम-उन्मुख उपचार सुनिश्चित करता है।
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="rounded-xl bg-emerald-50 p-6 text-center shadow-sm ring-1 ring-emerald-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <p className="text-2xl font-bold text-emerald-700">D.Pharm</p>
              <p className="mt-1 text-sm text-slate-600">योग्य फार्मासिस्ट</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-xl bg-amber-50 p-6 text-center shadow-sm ring-1 ring-amber-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <p className="text-2xl font-bold text-amber-700">लाइसेंस प्राप्त</p>
              <p className="mt-1 text-sm text-slate-600">प्रमाणित चिकित्सक</p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="rounded-xl bg-rose-50 p-6 text-center shadow-sm ring-1 ring-rose-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <p className="text-2xl font-bold text-rose-700">100%</p>
              <p className="mt-1 text-sm text-slate-600">प्राकृतिक एवं सुरक्षित उत्पाद</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
