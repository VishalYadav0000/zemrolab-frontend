export const SITE = {
  name: 'ज़ेमोरा लैब बायोटेक',
  tagline: 'आयुर्वेद अपनाएं, जीवन बचाएं',
  subtitle: 'स्वास्थ्य और विश्वास का संगम',
  doctor: 'डॉ. गोविंद कुमार',
  doctorTitle: 'डी. फार्मा एवं लाइसेंस प्राप्त चिकित्सा व्यवसायी',
  phone: '8795053108',
  phoneDisplay: '+91 87950 53108',
  email: 'govindkumar355555@gmail.com',
  address: 'चौकिया मिरनपुर बुजुर्ग रोड, ग़ाज़ीपुर, उत्तर प्रदेश (स्कॉलर एकेडमी के पास)',
  hours: 'सुबह 09:00 बजे से शाम 07:00 बजे तक',
  gst: '09AACCZ9282A1Z3',
}

export const telHref = `tel:+91${SITE.phone}`
export const whatsappHref = `https://wa.me/91${SITE.phone}`
export const mailHref = `mailto:${SITE.email}`
export const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`
