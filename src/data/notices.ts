export type Notice = { id: string; title: string; date: string; tag?: string }

export const notices: Notice[] = [
  { id: 'n1', date: '2026-02-01', title: 'Schedule update: Induction programme briefing (Batch orientation)', tag: 'Notice' },
  { id: 'n2', date: '2026-01-25', title: 'Circular: Nomination timelines for specialised modules (Q1)', tag: 'Circular' },
  { id: 'n3', date: '2026-01-12', title: 'New: Digital Learning module catalogue published (beta)', tag: 'Update' },
  { id: 'n4', date: '2025-12-20', title: 'Call for papers: Research & Knowledge Hub submissions', tag: 'Research' },
  { id: 'n5', date: '2025-12-05', title: 'International engagement: training collaboration webinar', tag: 'International' }
]
