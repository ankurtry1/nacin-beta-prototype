import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { notices } from '../data/notices'
import dgPhoto from '../assets/DG.JPG'
import banner1 from '../assets/Banner/1.jpg'
import banner2 from '../assets/Banner/2.jpg'
import banner3 from '../assets/Banner/3.jpg'
import banner4 from '../assets/Banner/4.jpg'
import banner5 from '../assets/Banner/5.jpg'
import banner6 from '../assets/Banner/6.jpg'
import banner7 from '../assets/Banner/7.jpg'
import banner8 from '../assets/Banner/8.jpg'
import banner9 from '../assets/Banner/9.jpg'
import banner10 from '../assets/Banner/10.jpg'
import banner11 from '../assets/Banner/11.jpg'
import banner12 from '../assets/Banner/12.jpg'
import banner13 from '../assets/Banner/13.jpg'
import banner14 from '../assets/Banner/14.jpg'
import banner15 from '../assets/Banner/15.jpg'
import banner16 from '../assets/Banner/16.jpg'
import banner17 from '../assets/Banner/17.jpg'
import campus1 from '../assets/OnCampusBeyond/1.jpg'
import campus2 from '../assets/OnCampusBeyond/2.jpg'
import campus3 from '../assets/OnCampusBeyond/3.jpg'
import campus4 from '../assets/OnCampusBeyond/4.jpg'
import campus5 from '../assets/OnCampusBeyond/5.jpg'
import campus6 from '../assets/OnCampusBeyond/6.jpg'
import campus7 from '../assets/OnCampusBeyond/7.jpg'
import campus8 from '../assets/OnCampusBeyond/8.jpg'
import { track } from '../lib/analytics'

function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-wide text-nacin-700 dark:text-nacin-300">{eyebrow}</div>}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">{title}</h2>
      {desc && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{desc}</p>}
    </div>
  )
}

export default function Home() {
  const heroImages = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    banner10,
    banner11,
    banner12,
    banner13,
    banner14,
    banner15,
    banner16,
    banner17
  ]
  const campusImages = [campus1, campus2, campus3, campus4, campus5, campus6, campus7, campus8]
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => window.clearInterval(timer)
  }, [heroImages.length])

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-b from-nacin-50 to-white dark:from-slate-950 dark:to-slate-950">
        <Container>
          <div className="grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:py-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                <span className="h-2 w-2 rounded-full bg-nacin-600" />
                Modern Government • Beta Prototype
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                Building capability for customs, indirect taxes, and enforcement through world-class training.
              </h1>

              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                A modern, mobile-first front door for NACIN: clear navigation, structured programs, and a scalable knowledge hub.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button as="route" to="/" variant="secondary" onClick={() => track({ name: 'home_cta_explore' })}>
                  Explore NACIN
                </Button>
                <Button as="route" to="/programs" onClick={() => track({ name: 'home_cta_programs' })}>
                  Programs & Training
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>Admissions & Nominations (Beta)</Badge>
                <Badge>Research & Knowledge Hub (Beta)</Badge>
                <Badge>International Engagements (Beta)</Badge>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-soft dark:border-slate-900 dark:bg-slate-950">
              <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[360px]">
                {heroImages.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt="NACIN training and campus moments"
                    className={[
                      'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
                      idx === heroIndex ? 'opacity-100' : 'opacity-0'
                    ].join(' ')}
                  />
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-600 dark:text-slate-300">
                Live event and campus imagery from NACIN programs.
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* About */}
      <Container>
        <div className="py-12">
          <SectionTitle
            eyebrow="About"
            title="National Academy of Customs, Indirect Taxes and Narcotics"
            desc="The National Academy of Customs, Indirect Taxes and Narcotics (NACIN) serves as the premier training and knowledge institution for officers of the Central Board of Indirect Taxes and Customs (CBIC). Through structured training programmes, research initiatives, and digital learning platforms, NACIN supports professional excellence and institutional capacity in the fields of customs, indirect taxation, and enforcement."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[2fr,1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: 'Training Programs', d: 'Induction, in-service, and specialised modules across domains.' },
                { t: 'Centres of Excellence', d: 'Deep expertise across key thematic areas and capability building.' },
                { t: 'Digital Learning (LMS)', d: 'Self-paced learning, progress tracking, and certification pathways.' },
                { t: 'Research & Publications', d: 'Briefs, studies, and knowledge resources supporting governance.' }
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-900 dark:bg-slate-950">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{c.t}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.d}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-900 dark:bg-slate-950">
              <img src={dgPhoto} alt="Director General, NACIN" className="h-56 w-full rounded-xl object-cover" />
              <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-50">Director General</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Leadership focused on professional excellence and institutional capability.
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Notices ticker */}
      <div id="notices" className="border-y border-slate-200 bg-slate-50 dark:border-slate-900 dark:bg-slate-950">
        <Container>
          <div className="py-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-nacin-700 dark:text-nacin-300">
                  News & Updates
                </div>
                <div className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-50">Latest notices (ticker)</div>
              </div>
              <Link to="#" className="text-sm font-semibold text-nacin-700 hover:text-nacin-800 dark:text-nacin-300 dark:hover:text-white">
                View all (Beta)
              </Link>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-900 dark:bg-slate-950">
              <div className="flex gap-8 whitespace-nowrap px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
                {notices.concat(notices).map((n, i) => (
                  <div key={`${n.id}-${i}`} className="inline-flex items-center gap-3">
                    <span className="rounded-full bg-nacin-100 px-2 py-0.5 text-xs font-semibold text-nacin-900 dark:bg-slate-900 dark:text-slate-100">
                      {n.tag ?? 'Update'}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">{n.date}</span>
                    <span className="font-semibold">{n.title}</span>
                    <span className="text-slate-400">•</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Note: ticker is static in prototype; can be wired to CMS/notice board post approval.
            </div>
          </div>
        </Container>
      </div>

      {/* Featured pathways */}
      <Container>
        <div className="py-12">
          <SectionTitle
            eyebrow="Flagship"
            title="A program catalog that feels like a future platform"
            desc="The prototype demonstrates a searchable, filterable training catalog to support pilot approval and future scale."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              { t: 'IRS Officer Professional Training', d: 'Induction and professional tracks designed for operational readiness.', a: '/programs#irs' },
              { t: 'OT-Cell', d: 'Professional skills: briefing notes, ethics, writing, and practical operating habits.', a: '/programs#otcell' },
              { t: 'Digital Learning / LMS', d: 'Self-paced learning, assessments, and certificates across programs.', a: '/programs#lms' }
            ].map((c) => (
              <Link
                key={c.t}
                to={c.a}
                onClick={() => track({ name: 'home_feature_open', props: { title: c.t } })}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:bg-slate-50 dark:border-slate-900 dark:bg-slate-950 dark:hover:bg-slate-900/40"
              >
                <div className="text-base font-bold text-slate-900 dark:text-slate-50">{c.t}</div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.d}</div>
                <div className="mt-4 text-sm font-semibold text-nacin-700 group-hover:text-nacin-800 dark:text-nacin-300 dark:group-hover:text-white">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom callouts */}
      <div className="bg-slate-50 dark:bg-slate-950">
        <Container>
          <div className="py-12">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { t: 'Research & Knowledge Hub', d: 'Publications, briefs, and research initiatives (beta-ready structure).' },
                { t: 'International Cooperation', d: 'A clear pathway for engagements, visitors, and collaborations.' },
                { t: 'Know Your Officer', d: 'A future-ready concept for officer journeys and alumni inspiration.' }
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-900 dark:bg-slate-950">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{c.t}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.d}</div>
                  <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">Planned for post-pilot expansion.</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* On Campus & Beyond */}
      <Container>
        <div className="py-12">
          <SectionTitle
            eyebrow="Campus Life"
            title="On campus & beyond"
            desc="Snapshots from NACIN campuses, training spaces, and field engagements."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {campusImages.map((src) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft dark:border-slate-900 dark:bg-slate-950">
                <img src={src} alt="NACIN campus and training facilities" className="h-40 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
