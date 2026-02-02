export type ProgramMode = 'In-person' | 'Online' | 'Hybrid'
export type ProgramLevel = 'Foundation' | 'Intermediate' | 'Advanced'

export type Program = {
  id: string
  title: string
  track: 'IRS Officer Professional Training' | 'OT-Cell' | 'Digital Learning / LMS' | 'Life of an OT'
  mode: ProgramMode
  level: ProgramLevel
  duration: string
  audience: string
  location?: string
  summary: string
  keywords: string[]
}

export const programs: Program[] = [
  {
    id: 'p1',
    title: 'IRS (C&IT) Induction: Customs & Border Governance',
    track: 'IRS Officer Professional Training',
    mode: 'In-person',
    level: 'Foundation',
    duration: '4 weeks',
    audience: 'Officer Trainees',
    location: 'NACIN Campus',
    summary: 'Core concepts of customs administration, border processes, risk management, and compliance basics.',
    keywords: ['customs', 'border', 'risk', 'compliance']
  },
  {
    id: 'p2',
    title: 'GST Fundamentals for Field Formations',
    track: 'IRS Officer Professional Training',
    mode: 'Hybrid',
    level: 'Foundation',
    duration: '2 weeks',
    audience: 'Officer Trainees / In-service Officers',
    location: 'Blended',
    summary: 'GST law, workflows, return ecosystem, and a practical orientation to field operations.',
    keywords: ['gst', 'returns', 'workflow', 'field']
  },
  {
    id: 'p3',
    title: 'OT-Cell: Case Writing & Briefing Notes',
    track: 'OT-Cell',
    mode: 'In-person',
    level: 'Intermediate',
    duration: '3 days',
    audience: 'Officer Trainees',
    location: 'OT Cell',
    summary: 'Structured note writing, speaking points, and briefing packs for senior officers.',
    keywords: ['writing', 'briefing', 'notes', 'ot']
  },
  {
    id: 'p4',
    title: 'OT-Cell: Professional Ethics & Conduct',
    track: 'OT-Cell',
    mode: 'Online',
    level: 'Foundation',
    duration: '2 hours',
    audience: 'Officer Trainees',
    summary: 'Ethics, professionalism, and decision-making under constraints.',
    keywords: ['ethics', 'conduct', 'professional']
  },
  {
    id: 'p5',
    title: 'NACIN e-Learning: LMS Orientation',
    track: 'Digital Learning / LMS',
    mode: 'Online',
    level: 'Foundation',
    duration: '45 minutes',
    audience: 'All learners',
    summary: 'How to use the LMS: enrolment, progress tracking, assessments, certificates.',
    keywords: ['lms', 'elearning', 'orientation']
  },
  {
    id: 'p6',
    title: 'Digital Learning: Creating Micro-Modules',
    track: 'Digital Learning / LMS',
    mode: 'Online',
    level: 'Intermediate',
    duration: '1 week',
    audience: 'Faculty & Staff',
    summary: 'Design short modules with clear outcomes, quizzes, and accessibility-first content.',
    keywords: ['microlearning', 'content', 'quizzes', 'accessibility']
  },
  {
    id: 'p7',
    title: 'Life of an OT: Attachments Playbook',
    track: 'Life of an OT',
    mode: 'Online',
    level: 'Foundation',
    duration: '30 minutes',
    audience: 'Officer Trainees',
    summary: 'A practical guide to attachments: expectations, reporting, etiquette, and learning goals.',
    keywords: ['attachments', 'playbook', 'ot']
  },
  {
    id: 'p8',
    title: 'Life of an OT: Posting Readiness Toolkit',
    track: 'Life of an OT',
    mode: 'Hybrid',
    level: 'Intermediate',
    duration: '2 days',
    audience: 'Officer Trainees',
    location: 'Blended',
    summary: 'Documentation discipline, communication habits, and operational readiness for field postings.',
    keywords: ['posting', 'toolkit', 'readiness']
  }
]
