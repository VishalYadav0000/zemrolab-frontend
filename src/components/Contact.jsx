import { useState } from 'react'
import { SITE, telHref, whatsappHref, mailHref, mapHref } from '../siteConfig'
import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const todayISO = new Date().toISOString().slice(0, 10)

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', reason: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = [
      `नमस्ते, मैं ${SITE.name} में अपॉइंटमेंट बुक करना चाहता/चाहती हूं।`,
      `नाम: ${formData.name}`,
      `फोन: ${formData.phone}`,
      `पसंदीदा तारीख: ${formData.date}`,
      `पसंदीदा समय: ${formData.time}`,
      `विज़िट का कारण: ${formData.reason || 'नहीं बताया गया'}`,
    ].join('\n')

    window.open(`https://wa.me/91${SITE.phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setFormData({ name: '', phone: '', date: '', time: '', reason: '' })
  }

  return (
    <section id="appointment" className="relative overflow-hidden bg-amber-50/40 px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs variant="alt" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
        <SplitText
          as="h2"
          text="विज़िट एवं संपर्क"
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <div className="mt-3 h-1 w-16 rounded-full bg-linear-to-r from-amber-500 to-rose-500" />
        <Reveal delay={150}>
          <p className="mt-4 text-slate-600">
            हमारे क्लिनिक पर आएं या सीधे संपर्क करें — हमें आपकी सहायता करने में खुशी होगी।
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">क्लिनिक</dt>
              <dd className="text-slate-600">{SITE.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">पता</dt>
              <dd className="text-slate-600">{SITE.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">समय</dt>
              <dd className="text-slate-600">{SITE.hours}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">फोन</dt>
              <dd>
                <a href={telHref} className="text-emerald-700 hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">ईमेल</dt>
              <dd>
                <a href={mailHref} className="text-emerald-700 hover:underline">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">जीएसटी नंबर</dt>
              <dd className="text-slate-600">{SITE.gst}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={telHref}
              className="rounded-md bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-3 text-center text-sm font-semibold text-white shadow transition duration-200 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg active:translate-y-0"
            >
              अभी कॉल करें
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-emerald-700 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-lg active:translate-y-0"
            >
              व्हाट्सएप
            </a>
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-amber-500 px-6 py-3 text-center text-sm font-semibold text-amber-700 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-lg active:translate-y-0"
            >
              दिशा-निर्देश पाएं
            </a>
          </div>
        </Reveal>
        </div>

        <Reveal delay={120} className="order-1 md:order-2">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">अपॉइंटमेंट बुक करें</h3>
              <p className="mt-1 text-sm text-slate-500">
                अपनी जानकारी भरें — हम व्हाट्सएप पर आपका समय स्लॉट कन्फर्म करेंगे।
              </p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                पूरा नाम
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                फोन नंबर
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="[0-9+ ]{10,15}"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-700">
                  पसंदीदा तारीख
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  min={todayISO}
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-slate-700">
                  पसंदीदा समय
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  min="09:00"
                  max="19:00"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-slate-700">
                विज़िट का कारण <span className="text-slate-400">(वैकल्पिक)</span>
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={3}
                value={formData.reason}
                onChange={handleChange}
                placeholder="जैसे: जोड़ों का दर्द, मधुमेह परामर्श, त्वचा उपचार..."
                className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow transition duration-200 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg active:translate-y-0"
            >
              व्हाट्सएप के माध्यम से अपॉइंटमेंट बुक करें
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
