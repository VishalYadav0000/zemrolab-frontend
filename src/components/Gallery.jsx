const GALLERY_IMAGES = [
  {
    src: '/WhatsApp Image 2026-08-27 at 10.20.49 PM.jpeg',
    alt: 'Zemora Labs & Biotech store interior with certified counter',
    caption: 'Our Store Interior',
  },
  {
    src: '/WhatsApp Image 2026-08-27 at 10.20.51 PM.jpeg',
    alt: 'Shelves stocked with Ayurvedic and herbal products at Zemora Labs & Biotech',
    caption: 'Wide Range of Products',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Visit Our Store
        </h2>
        <p className="mt-4 text-center text-slate-600">
          A glimpse inside Zemora Labs &amp; Biotech.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {GALLERY_IMAGES.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-100">
              <img src={image.src} alt={image.alt} className="h-72 w-full object-cover" />
              <figcaption className="bg-white px-4 py-3 text-center text-sm font-medium text-slate-700">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
