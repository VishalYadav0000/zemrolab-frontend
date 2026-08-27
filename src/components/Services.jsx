const SERVICES = [
  {
    title: 'Joint & Body Pain',
    description:
      'Ayurvedic care for arthritis, slip disc, sciatica and everyday joint or back pain.',
  },
  {
    title: 'Lifestyle Disorders',
    description:
      'Natural support for high BP, diabetes (sugar), thyroid problems and obesity.',
  },
  {
    title: 'Neuro & Stress Care',
    description:
      'Herbal support for migraine, memory loss, chronic fatigue and stress management.',
  },
  {
    title: 'Liver, Kidney & Digestion',
    description:
      'Ayurvedic solutions for liver, kidney stones and digestive health.',
  },
  {
    title: "Women's & Children's Health",
    description:
      'Dedicated Ayurvedic care for women\'s health issues and childhood ailments.',
  },
  {
    title: 'Ayurvedic, Homeopathic & Unani Products',
    description:
      '100% natural, trusted quality medicines and herbal formulations under one roof.',
  },
]

function Services() {
  return (
    <section id="services" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-center text-slate-600">
          Trusted natural care for a wide range of health concerns.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
