import { useState } from 'react'
import { SITE, telHref } from '../siteConfig'

const NAV_LINKS = [
  { label: 'होम', href: '#home' },
  { label: 'हमारे बारे में', href: '#about' },
  { label: 'सुविधाएं', href: '#facilities' },
  { label: 'उपचार', href: '#services' },
  { label: 'गैलरी', href: '#gallery' },
  { label: 'सामान्य प्रश्न', href: '#faq' },
  { label: 'अपॉइंटमेंट', href: '#appointment' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-12 xl:px-20">
        <a href="#home" className="flex items-center gap-3 transition duration-200 hover:opacity-80">
          <img src="/zemrolabLogo.jpeg" alt="ज़ेमोरा लैब बायोटेक लोगो" className="h-11 w-11 rounded-full object-cover" />
          <span className="text-lg font-bold leading-tight text-slate-900 sm:text-xl">
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-4 lg:gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-slate-600 transition hover:text-emerald-700"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-700 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={telHref}
          className="hidden rounded-md bg-linear-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition duration-200 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-teal-500 hover:shadow-lg md:inline-block"
        >
          अभी कॉल करें
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={telHref}
              className="block rounded-md bg-linear-to-r from-emerald-600 to-teal-600 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              अभी कॉल करें
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
