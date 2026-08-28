import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const FACILITIES = [
  {
    title: 'Outpatient Facility (OPD)',
    description: 'Dedicated consultation area for detailed diagnosis and health assessments.',
  },
  {
    title: 'Appointment Management',
    description: 'Easy appointment scheduling via phone call or WhatsApp.',
  },
  {
    title: 'Laboratory & Diagnostic Facility',
    description: 'Basic check-ups and diagnostic support to track recovery.',
  },
  {
    title: 'In-House Pharmacy & Medicine Counter',
    description: 'Genuine, standardized herbal formulations and natural remedies.',
  },
  {
    title: 'Help Desk & Patient Support',
    description: 'Quick assistance with treatment plans, follow-ups, and dietary guidance.',
  },
]

function Facilities() {
  return (
    <section id="facilities" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs variant="alt" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SplitText
          as="h2"
          text="Facilities Available"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 80}>
              <div className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
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
