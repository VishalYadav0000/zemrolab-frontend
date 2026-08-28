import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const TAG_COLORS = [
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
  'bg-sky-100 text-sky-700',
  'bg-violet-100 text-violet-700',
]

const TREATMENTS = [
  {
    tag: 'शुगर',
    title: 'मधुमेह एवं शुगर नियंत्रण',
    description:
      'ब्लड शुगर को संतुलित करने और पैनक्रियाज की कार्यप्रणाली सुधारने के लिए हर्बल उपचार।',
  },
  {
    tag: 'बीपी',
    title: 'ब्लड प्रेशर नियमन (हाई/लो बीपी)',
    description:
      'हृदय स्वास्थ्य में सुधार और तनाव प्रबंधन के लिए दीर्घकालिक प्राकृतिक समाधान।',
  },
  {
    tag: 'साइटिका',
    title: 'साइटिका एवं कमर दर्द',
    description:
      'नसों के खिंचाव, मांसपेशियों की ऐंठन और पीठ दर्द से राहत के लिए लक्षित थेरेपी।',
  },
  {
    tag: 'जोड़ों का दर्द',
    title: 'जोड़ों का दर्द एवं गठिया (Arthritis)',
    description:
      'जोड़ों की सूजन कम करने, लचीलापन बढ़ाने और कार्टिलेज को मजबूत करने वाली हर्बल दवाएं।',
  },
  {
    tag: 'बवासीर',
    title: 'बवासीर (Piles) उपचार',
    description:
      'बिना सर्जरी के गुदा रोगों से राहत दिलाने वाले सुरक्षित और प्रभावी उपचार।',
  },
  {
    tag: 'त्वचा रोग',
    title: 'त्वचा रोग एवं मुंहासे (Dermatology)',
    description:
      'रक्त-शोधन और हर्बल उपचार द्वारा पिंपल्स, पिगमेंटेशन और एलर्जी का समाधान।',
  },
  {
    tag: 'पुरुष स्वास्थ्य',
    title: 'पुरुष स्वास्थ्य एवं जीवन शक्ति',
    description:
      'शारीरिक सहनशक्ति, ताकत और समग्र स्वास्थ्य के लिए गोपनीय परामर्श और देखभाल।',
  },
  {
    tag: 'जटिल रोग',
    title: 'गंभीर एवं पुरानी बीमारियों में सहायक उपचार',
    description:
      'रोग प्रतिरोधक क्षमता बढ़ाने और रिकवरी में मदद के लिए पूरक थेरेपी।',
  },
  {
    tag: 'अन्य रोग',
    title: 'पाचन तंत्र एवं सामान्य स्वास्थ्य',
    description:
      'गैस, एसिडिटी, अपच और मौसमी संक्रमणों से त्वरित राहत।',
  },
]

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-amber-50/40 px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SplitText
          as="h2"
          text="प्रमुख उपचार एवं विशिष्ट सेवाएं"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-emerald-500 to-amber-500" />
        <Reveal delay={150}>
          <p className="mt-4 text-center text-slate-600">
            स्वास्थ्य संबंधी विभिन्न समस्याओं के लिए विश्वसनीय प्राकृतिक उपचार।
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((treatment, index) => (
            <Reveal key={treatment.title} delay={(index % 3) * 80} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${TAG_COLORS[index % TAG_COLORS.length]}`}>
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
