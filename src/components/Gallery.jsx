import Reveal from './Reveal'
import SplitText from './SplitText'
import BackgroundBlobs from './BackgroundBlobs'

const GALLERY_IMAGES = [
  {
    src: '/WhatsApp Image 2026-08-28 at 8.27.13 PM.jpeg',
    alt: 'ज़ेमोरा लैब बायोटेक में मरीज़ का परामर्श एवं जांच',
    caption: 'मरीज़ परामर्श एवं जांच',
  },
  {
    src: '/WhatsApp Image 2026-08-28 at 8.27.15 PM.jpeg',
    alt: 'ज़ेमोरा लैब बायोटेक की औषधि काउंटर पर हर्बल उत्पाद',
    caption: 'औषधि काउंटर',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <BackgroundBlobs variant="alt" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SplitText
          as="h2"
          text="क्लिनिक टूर एवं लैब सुविधा"
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        />
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-linear-to-r from-amber-500 to-rose-500" />
        <Reveal delay={150}>
          <p className="mt-4 text-center text-slate-600">
            हमारे क्लिनिक बोर्ड, परामर्श कक्ष, दवा काउंटर और लैब की वास्तविक तस्वीरें।
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
