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
      `Hi, I would like to book an appointment at ${SITE.name}.`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Preferred Date: ${formData.date}`,
      `Preferred Time: ${formData.time}`,
      `Reason for Visit: ${formData.reason || 'Not specified'}`,
    ].join('\n')

    window.open(`https://wa.me/91${SITE.phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setFormData({ name: '', phone: '', date: '', time: '', reason: '' })
  }

  return (
    <section id="appointment" className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs variant="alt" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
        <SplitText
          as="h2"
          text="Visit & Contact"
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <Reveal delay={150}>
          <p className="mt-4 text-slate-600">
            Visit our clinic or reach out directly — we're happy to help.
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">Clinic</dt>
              <dd className="text-slate-600">{SITE.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Address</dt>
              <dd className="text-slate-600">{SITE.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Timings</dt>
              <dd className="text-slate-600">{SITE.hours}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Phone</dt>
              <dd>
                <a href={telHref} className="text-emerald-700 hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Email</dt>
              <dd>
                <a href={mailHref} className="text-emerald-700 hover:underline">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">GST No.</dt>
              <dd className="text-slate-600">{SITE.gst}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={telHref}
              className="rounded-md bg-emerald-700 px-6 py-3 text-center text-sm font-semibold text-white shadow transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg active:translate-y-0"
            >
              Call Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-emerald-700 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-lg active:translate-y-0"
            >
              WhatsApp
            </a>
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg active:translate-y-0"
            >
              Get Directions
            </a>
          </div>
        </Reveal>
        </div>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Book an Appointment</h3>
              <p className="mt-1 text-sm text-slate-500">
                Fill in your details — we'll confirm your slot on WhatsApp.
              </p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Full Name
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
                Phone Number
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
                  Preferred Date
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
                  Preferred Time
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  min="10:00"
                  max="19:00"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-slate-700">
                Reason for Visit <span className="text-slate-400">(optional)</span>
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={3}
                value={formData.reason}
                onChange={handleChange}
                placeholder="e.g. Joint pain, diabetes consultation, skin care..."
                className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg active:translate-y-0"
            >
              Book Appointment via WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
