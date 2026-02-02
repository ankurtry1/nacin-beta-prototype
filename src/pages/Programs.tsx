import { useEffect, useMemo, useState } from 'react'
import Container from '../components/Container'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { programs as allPrograms, Program, ProgramLevel, ProgramMode } from '../data/programs'
import { track } from '../lib/analytics'

const tracks: Array<Program['track']> = [
  'IRS Officer Professional Training',
  'OT-Cell',
  'Digital Learning / LMS',
  'Life of an OT'
]

function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
    </div>
  )
}

function ProgramCard({ p }: { p: Program }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-900 dark:bg-slate-950">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{p.track}</Badge>
        <Badge>{p.mode}</Badge>
        <Badge>{p.level}</Badge>
        {p.location && <Badge>{p.location}</Badge>}
      </div>

      <div className="mt-4 text-base font-bold text-slate-900 dark:text-slate-50">{p.title}</div>
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.summary}</div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-200">
        <div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Duration</div>
          <div className="font-semibold">{p.duration}</div>
        </div>
        <div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Audience</div>
          <div className="font-semibold">{p.audience}</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.keywords.slice(0, 4).map((k) => (
          <span
            key={k}
            className="rounded-full bg-nacin-50 px-2 py-1 text-xs font-semibold text-nacin-900 dark:bg-slate-900 dark:text-slate-100"
          >
            {k}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-nacin-700 hover:text-nacin-800 dark:text-nacin-300 dark:hover:text-white">
          View details (Beta)
        </a>
        <Button as="link" href="#" variant="secondary" onClick={() => track({ name: 'program_enquire', props: { id: p.id } })}>
          Enquire (Beta)
        </Button>
      </div>
    </div>
  )
}

export default function Programs() {
  const [activeTrack, setActiveTrack] = useState<Program['track']>('IRS Officer Professional Training')
  const [q, setQ] = useState('')
  const [mode, setMode] = useState<ProgramMode | 'Any'>('Any')
  const [level, setLevel] = useState<ProgramLevel | 'Any'>('Any')

  useEffect(() => {
    // jump-to-anchor support
    const hash = window.location.hash.replace('#', '')
    if (hash === 'irs') setActiveTrack('IRS Officer Professional Training')
    if (hash === 'otcell') setActiveTrack('OT-Cell')
    if (hash === 'lms') setActiveTrack('Digital Learning / LMS')
    if (hash === 'life') setActiveTrack('Life of an OT')
  }, [])

  const filtered = useMemo(() => {
    const nq = q.trim().toLowerCase()
    return allPrograms
      .filter((p) => p.track === activeTrack)
      .filter((p) => (mode === 'Any' ? true : p.mode === mode))
      .filter((p) => (level === 'Any' ? true : p.level === level))
      .filter((p) => {
        if (!nq) return true
        const hay = (p.title + ' ' + p.summary + ' ' + p.keywords.join(' ')).toLowerCase()
        return hay.includes(nq)
      })
  }, [activeTrack, q, mode, level])

  return (
    <div className="bg-white dark:bg-slate-950">
      <Container>
        <div className="py-10">
          <SectionHeader
            title="Programs & Training"
            desc="A searchable, filterable training catalog prototype designed for pilot approval. Tracks shown here are indicative and can be aligned to official catalog structure post approval."
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {tracks.map((t) => (
              <button
                key={t}
                className={[
                  'rounded-full px-4 py-2 text-sm font-semibold',
                  activeTrack === t
                    ? 'bg-nacin-700 text-white'
                    : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-900 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900'
                ].join(' ')}
                onClick={() => {
                  setActiveTrack(t)
                  track({ name: 'track_change', props: { track: t } })
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-900/20 lg:grid-cols-4 lg:items-end">
            <div className="lg:col-span-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Search</label>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search programs, keywords, summaries..."
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Mode</label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as any)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              >
                <option value="Any">Any</option>
                <option value="In-person">In-person</option>
                <option value="Online">Online</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Level</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as any)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              >
                <option value="Any">Any</option>
                <option value="Foundation">Foundation</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className="lg:col-span-4 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-600 dark:text-slate-300">
                Showing <span className="font-semibold">{filtered.length}</span> program(s) under{' '}
                <span className="font-semibold">{activeTrack}</span>
              </div>
              <button
                className="text-sm font-semibold text-nacin-700 hover:text-nacin-800 dark:text-nacin-300 dark:hover:text-white"
                onClick={() => {
                  setQ('')
                  setMode('Any')
                  setLevel('Any')
                  track({ name: 'filters_reset' })
                }}
              >
                Reset filters
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {filtered.map((p) => (
              <ProgramCard key={p.id} p={p} />
            ))}
          </div>

          <div id="admissions" className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-900 dark:bg-slate-950">
            <div className="text-xs font-semibold uppercase tracking-wide text-nacin-700 dark:text-nacin-300">
              Admissions & Nominations (Beta)
            </div>
            <div className="mt-2 text-lg font-bold text-slate-900 dark:text-slate-50">A structured nomination journey</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Prototype placeholder to demonstrate how the nomination lifecycle can be made visible: eligibility, timelines, required documents, and
              contact points. This can be aligned with official SOPs post approval.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Eligibility</Badge>
              <Badge>Timelines</Badge>
              <Badge>Documents</Badge>
              <Badge>Contact points</Badge>
            </div>
            <div className="mt-5">
              <Button as="link" href="#" variant="secondary">
                View nomination flow (Beta)
              </Button>
            </div>
          </div>

          <div className="mt-10 text-xs text-slate-500 dark:text-slate-400">
            Analytics placeholder: page views and key CTA clicks can be captured once an approved analytics provider is plugged in.
          </div>
        </div>
      </Container>
    </div>
  )
}
