import { useState } from 'react'
import { SITE, telHref, whatsappHref } from '../siteConfig'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-slate-600">
            Visit our store or reach out directly — we're happy to help.
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">Store</dt>
              <dd className="text-slate-600">{SITE.name}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Address</dt>
              <dd className="text-slate-600">{SITE.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Phone</dt>
              <dd>
                <a href={telHref} className="text-emerald-700 hover:underline">
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">GST No.</dt>
              <dd className="text-slate-600">{SITE.gst}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={telHref}
              className="rounded-md bg-emerald-700 px-6 py-3 text-center text-sm font-semibold text-white shadow transition hover:bg-emerald-600"
            >
              Call Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-emerald-700 px-6 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Name
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
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
