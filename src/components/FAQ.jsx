import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const FAQS = [
  {
    question: 'What is Ayurvedic & Haemostatic Care?',
    answer:
      'A treatment method combining natural plant-based therapies with circulation balance to treat diseases from their root cause.',
  },
  {
    question: 'Why choose natural treatments?',
    answer:
      'It helps prevent recurrence without harsh chemical side effects or long-term dependency.',
  },
  {
    question: 'How to prepare for a consultation?',
    answer:
      'Bring previous medical reports, blood test results and current prescriptions for a precise assessment.',
  },
]

function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto max-w-3xl">
        <SplitText
          as="h2"
          text="Frequently Asked Questions"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />

        <div className="mt-10 space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 80}>
              <details className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="shrink-0 text-emerald-700 transition duration-300 group-open:rotate-45">+</span>
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
