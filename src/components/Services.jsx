import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const TREATMENTS = [
  {
    tag: 'शुगर',
    title: 'Diabetes & Sugar Management',
    description:
      'Natural herbal regimens to balance blood sugar levels and enhance pancreatic function.',
  },
  {
    tag: 'बीपी',
    title: 'Blood Pressure Regulation (High / Low BP)',
    description:
      'Long-term cardiovascular support and stress management therapies.',
  },
  {
    tag: 'साइटिका',
    title: 'Sciatica & Chronic Back Pain',
    description:
      'Targeted therapeutic solutions to relieve nerve stiffness, muscle spasms and lower back pain.',
  },
  {
    tag: 'जोड़ों का दर्द',
    title: 'Joint Pain & Arthritis Care',
    description:
      'Anti-inflammatory formulations to restore mobility, ease joint stiffness and strengthen cartilage.',
  },
  {
    tag: 'बवासीर',
    title: 'Piles & Hemorrhoids Treatment',
    description:
      'Non-invasive, soothing and effective relief for anorectal conditions without surgery.',
  },
  {
    tag: 'त्वचा रोग',
    title: 'Acne & Dermatological Care',
    description:
      'Internal blood-purification and herbal treatments for acne, pigmentation and chronic skin allergies.',
  },
  {
    tag: 'पुरुष स्वास्थ्य',
    title: "Men's Vitality & Physical Wellness",
    description:
      'Confidential care focused on stamina, strength and reproductive health.',
  },
  {
    tag: 'जटिल रोग',
    title: 'Cancer & Chronic Disease Support',
    description:
      'Immunity-boosting complementary therapies to assist bodily recovery.',
  },
  {
    tag: 'अन्य रोग',
    title: 'General Health & Digestion',
    description:
      'Fast relief for gas, acidity, indigestion and seasonal infections.',
  },
]

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SplitText
          as="h2"
          text="Treatments & Specialized Services"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <Reveal delay={150}>
          <p className="mt-4 text-center text-slate-600">
            Trusted natural care for a wide range of health concerns.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((treatment, index) => (
            <Reveal key={treatment.title} delay={(index % 3) * 80}>
              <div className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {treatment.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {treatment.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {treatment.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
