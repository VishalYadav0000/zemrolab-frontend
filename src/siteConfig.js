export const SITE = {
  name: 'Zemora Lab Biotech',
  tagline: 'Ayurved Apnaye, Jivan Bachaye',
  subtitle: 'Swasthya Aur Vishwas Ka Sangam',
  doctor: 'Dr. Govind Kumar',
  doctorTitle: 'D. Pharm & Licensed Medical Practitioner',
  phone: '8795053108',
  phoneDisplay: '+91 87950 53108',
  email: 'govindkumar355555@gmail.com',
  address: 'Chaukiya Mirnapur Buzurg Road, Ghazipur, Uttar Pradesh (near Scholar Academy)',
  hours: '10:00 AM – 07:00 PM',
  gst: '09AACCZ9282A1Z3',
}

export const telHref = `tel:+91${SITE.phone}`
export const whatsappHref = `https://wa.me/91${SITE.phone}`
export const mailHref = `mailto:${SITE.email}`
export const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`
