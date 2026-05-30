import { assets } from './assets.js'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '2017', label: 'Established', suffix: '' },
  { value: '5+', label: 'Years of Excellence', suffix: '' },
  { value: '10+', label: 'Notable Projects', suffix: '' },
  { value: '100', label: 'Client Satisfaction', suffix: '%' },
]

export const coreValues = [
  {
    letter: 'B',
    title: 'Brilliance in Workmanship',
    description:
      'We deliver quality craftsmanship and excellence in every project we handle.',
  },
  {
    letter: 'U',
    title: 'Unity and Teamwork',
    description:
      'We believe strong collaboration creates stronger structures and successful outcomes.',
  },
  {
    letter: 'I',
    title: 'Integrity and Accountability',
    description:
      'We conduct business with honesty, transparency, and responsibility.',
  },
  {
    letter: 'L',
    title: 'Leadership in Service',
    description:
      'We lead through professionalism, innovation, and commitment to client satisfaction.',
  },
  {
    letter: 'D',
    title: 'Dedication to Safety and Growth',
    description:
      'We prioritize safety while continuously improving our skills, services, and company standards.',
  },
]

export const services = [
  {
    category: 'Construction Services',
    icon: 'Building2',
    image: assets.services.construction,
    items: [
      'General Contracting',
      'Civil Works & Demolitions',
      'Commercial Renovations & Fit-outs',
      'Roll-up & Accordion Installation',
      'Structural Repairs & Maintenance',
    ],
  },
  {
    category: 'Mechanical Services',
    icon: 'Wrench',
    image: assets.services.mechanical,
    items: [
      'HVAC Installation',
      'Piping & Plumbing',
      'Welding Services',
      'Equipment Maintenance',
    ],
  },
  {
    category: 'Commercial Specialization',
    icon: 'Store',
    image: assets.services.commercial,
    items: [
      'Active commercial site renovations',
      'Restaurant & retail fit-outs',
      'Office & warehouse maintenance',
      'Phased construction schedules',
    ],
  },
]

export const whyChooseUs = [
  {
    icon: 'Clock',
    title: 'Minimal Disruption',
    description:
      'We utilize phased construction schedules and conduct high-impact works during off-hours so your business operations continue safely.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Strict Quality Control',
    description:
      'Structured step-by-step approval process, regular engineer inspections, and comprehensive final punch listings guarantee durable workmanship.',
  },
  {
    icon: 'HardHat',
    title: 'Uncompromising Safety',
    description:
      'Comprehensive risk assessments, mandatory daily toolbox meetings, complete PPE enforcement, and SO3-certified personnel on every site.',
  },
  {
    icon: 'Truck',
    title: 'Scalable Resources',
    description:
      'Company-owned tools for precision plus leased heavy machinery for scalability — cost-efficient and timely execution.',
  },
]

export const clients = [
  { name: "Max's Group", logo: assets.clients.maxs },
  { name: 'Jamba Juice', logo: assets.clients.jamba },
  { name: 'Krispy Kreme', logo: assets.clients.krispyKreme },
]

export const projects = [
  {
    name: "Max's SM Fairview Renovation",
    year: '2025',
    image: assets.projects.maxsFairview,
  },
  {
    name: 'Krispy Kreme Tomas Morato Renovation',
    year: '2025',
    image: assets.projects.krispyKremeTomasMorato,
  },
  {
    name: 'Krispy Kreme Iloilo (SM City) Renovation',
    year: '2026',
    image: assets.projects.krispyKremeIloilo,
  },
]

export const team = [
  {
    name: 'Ronelin R. Frias',
    role: 'Managing Director',
    image: assets.team.ronelin,
    description:
      'Oversees overall company operations, business development, and client relations.',
  },
  {
    name: 'Donato P. Frias',
    role: 'Project Manager',
    image: assets.team.donato,
    description:
      'Responsible for planning and execution, ensuring timelines, budgets, and quality standards are strictly met.',
  },
  {
    name: 'Keanne Orquiola',
    role: 'Supervisor & Safety Officer III (SO3)',
    image: assets.team.keanne,
    description:
      'Manages on-site supervision and ensures absolute compliance with industry safety protocols.',
  },
  {
    name: 'Eduardo Pura',
    role: 'Team Leader',
    image: assets.team.eduardo,
    description:
      'Coordinates our skilled workforce of carpenters, masons, welders, and painters for efficient daily execution.',
  },
]

export const contactInfo = {
  address: '1163 Riverside St., Brgy. Commonwealth, Quezon City, Philippines',
  phone: '09551266247',
  email: 'umecs.rhonnafrias@gmail.com',
  serviceArea:
    'We primarily serve Metro Manila and surrounding provinces, with the capacity to undertake commercial projects nationwide.',
  hours: 'Mon – Sat: 8:00 AM – 6:00 PM',
}

export const certifications = [
  'TESDA NC II Welding',
  'Safety Officer 3 (SO3)',
  'Philippine Construction Regulations',
]

export { assets }
