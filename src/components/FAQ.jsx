import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const FAQS = [
  {
    question: 'आयुर्वेदिक और हेमोस्टेटिक केयर क्या है?',
    answer:
      'यह पौधों पर आधारित प्राकृतिक उपचार और रक्त-संचार संतुलन का एक संयोजन है, जो बीमारी को जड़ से ठीक करने में मदद करता है।',
  },
  {
    question: 'प्राकृतिक उपचार क्यों चुनें?',
    answer:
      'यह बिना किसी कठोर साइड इफ़ेक्ट या दवाओं की लत के बीमारी की पुनरावृत्ति को रोकता है।',
  },
  {
    question: 'परामर्श के लिए क्या तैयारी करें?',
    answer:
      'सटीक मूल्यांकन के लिए अपनी पिछली मेडिकल रिपोर्ट्स, ब्लड टेस्ट और वर्तमान दवाओं की पर्ची साथ लाएं।',
  },
]

function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-emerald-50/40 px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto max-w-3xl">
        <SplitText
          as="h2"
          text="अक्सर पूछे जाने वाले प्रश्न"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-emerald-500 to-amber-500" />

        <div className="mt-10 space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 80}>
              <details className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="shrink-0 text-amber-600 transition duration-300 group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
