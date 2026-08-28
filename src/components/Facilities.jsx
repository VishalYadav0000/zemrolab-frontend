import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const ACCENTS = ['border-emerald-500', 'border-amber-500', 'border-rose-500', 'border-sky-500', 'border-violet-500']

const FACILITIES = [
  {
    title: 'ओपीडी परामर्श (OPD Facility)',
    description: 'विस्तृत जांच और स्वास्थ्य मूल्यांकन के लिए समर्पित परामर्श कक्ष।',
  },
  {
    title: 'अपॉइंटमेंट सुविधा',
    description: 'फोन कॉल या व्हाट्सएप के माध्यम से आसानी से अपॉइंटमेंट बुक करने की व्यवस्था।',
  },
  {
    title: 'पैथोलॉजी एवं डायग्नोस्टिक सहायता',
    description: 'स्वास्थ्य सुधार पर नज़र रखने के लिए प्राथमिक जांच और डायग्नोस्टिक सुविधाएं।',
  },
  {
    title: 'इन-हाउस फार्मेसी',
    description: 'प्रमाणित, उच्च गुणवत्ता वाली हर्बल दवाएं और प्राकृतिक उपचार उत्पाद।',
  },
  {
    title: 'हेल्प डेस्क एवं मरीज़ सहायता',
    description: 'उपचार योजना, फॉलो-अप और खान-पान से जुड़े मार्गदर्शन के लिए त्वरित सहायता।',
  },
]

function Facilities() {
  return (
    <section id="facilities" className="relative overflow-hidden bg-emerald-50/40 px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs variant="alt" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SplitText
          as="h2"
          text="उपलब्ध सुविधाएं"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-emerald-500 to-amber-500" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 80}>
              <div className={`h-full rounded-xl border-l-4 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md ${ACCENTS[index % ACCENTS.length]}`}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {facility.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {facility.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities
