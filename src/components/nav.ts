export type NavItem = { label: string; to?: string; children?: { label: string; to: string; desc?: string }[] }

export const nav: NavItem[] = [
  {
    label: 'About',
    children: [
      { label: 'About NACIN', to: '/', desc: 'Mandate, role, and institutional overview' },
      { label: 'Leadership & Faculty', to: '/', desc: 'Key people and academic leadership' },
      { label: 'Infrastructure', to: '/', desc: 'Campuses, facilities, and training spaces' }
    ]
  },
  {
    label: 'Programs & Training',
    to: '/programs',
    children: [
      { label: 'IRS Officer Professional Training', to: '/programs#irs', desc: 'Induction and professional modules' },
      { label: 'OT-Cell', to: '/programs#otcell', desc: 'OT tools, ethics, and professional skills' },
      { label: 'Admissions & Nominations', to: '/programs#admissions', desc: 'Nomination pathways and timelines (beta)' }
    ]
  },
  {
    label: 'Digital Learning',
    children: [
      { label: 'LMS Overview', to: '/programs#lms', desc: 'Digital learning ecosystem and catalog' },
      { label: 'Micro-Modules', to: '/programs#lms', desc: 'Short courses and self-paced learning' }
    ]
  },
  {
    label: 'International Engagements',
    children: [
      { label: 'Collaborations', to: '/', desc: 'Training partnerships and engagements' },
      { label: 'Visitors & Programs', to: '/', desc: 'International training and exchanges' }
    ]
  },
  {
    label: 'Know Your Officer',
    children: [
      { label: 'Officer Directory', to: '/', desc: 'Directory and journeys (beta)' },
      { label: 'Alumni Network', to: '/', desc: 'Inspiration and career journeys (beta)' }
    ]
  },
  {
    label: 'News & Updates',
    children: [
      { label: 'Notices', to: '/#notices', desc: 'Latest notices and circulars' },
      { label: 'Events Calendar', to: '/', desc: 'Upcoming events (beta)' }
    ]
  }
]
