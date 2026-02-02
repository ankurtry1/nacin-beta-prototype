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
