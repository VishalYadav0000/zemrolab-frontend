import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const GALLERY_IMAGES = [
  {
    src: '/WhatsApp Image 2026-08-27 at 10.20.49 PM.jpeg',
    alt: 'Zemora Lab Biotech consultation room and clinic certification board',
    caption: 'Consultation Room & Clinic Board',
  },
  {
    src: '/WhatsApp Image 2026-08-27 at 10.20.51 PM.jpeg',
    alt: 'Medicine counter shelves stocked with herbal formulations at Zemora Lab Biotech',
    caption: 'Medicine Counter & Lab Stock',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs variant="alt" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SplitText
          as="h2"
          text="Clinic Tour & Lab Facility"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <Reveal delay={150}>
          <p className="mt-4 text-center text-slate-600">
            Real photographs of our clinic board, consultation room, medicine counter and lab.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {GALLERY_IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={index * 100}>
              <figure className="group overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-100 transition duration-200 hover:shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="bg-white px-4 py-3 text-center text-sm font-medium text-slate-700">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
