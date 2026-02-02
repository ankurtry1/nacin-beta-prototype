import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from '../components/Container'
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
      {/* Updates ticker */}
      <div id="notices" className="border-b border-slate-200 bg-slate-50 dark:border-slate-900 dark:bg-slate-950">
        <Container>
          <div className="py-3">
            <div className="flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-900 dark:bg-slate-950">
              <div className="shrink-0 text-xs font-semibold uppercase tracking-wide text-nacin-700 dark:text-nacin-300">
                News & Updates
              </div>
              <div className="ticker-mask min-w-0 flex-1 overflow-hidden">
                <div className="ticker-track flex gap-8 whitespace-nowrap text-sm text-slate-700 dark:text-slate-200">
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
            </div>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-nacin-50 to-white dark:from-slate-950 dark:to-slate-950">
        <div className="w-full border-y border-slate-200 bg-white/70 shadow-soft dark:border-slate-900 dark:bg-slate-950/80">
          <div className="relative h-[320px] overflow-hidden ring-1 ring-slate-200/60 sm:h-[420px] lg:h-[520px] dark:ring-slate-900/60">
            {heroImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="NACIN training and campus moments"
                className={[
                  'hero-slide absolute inset-0 h-full w-full object-cover',
                  idx === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                ].join(' ')}
              />
            ))}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-30">
              <Container>
                <div className="pb-6 pt-12">
                  <h1 className="max-w-4xl text-left text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    National Academy of Customs, Indirect Taxes & Narcotics
                  </h1>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <Container>
          <div className="py-0" />
        </Container>
      </div>

      {/* About */}
      <Container>
        <div className="py-8">
          <SectionTitle
            eyebrow="About Us"
            title="NACIN: Advancing capability in customs, indirect taxes, and enforcement"
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
              <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-900/40">
                <img src={dgPhoto} alt="Director General, NACIN" className="h-72 w-full rounded-lg object-contain" />
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-50">Director General</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Leadership focused on professional excellence and institutional capability.
              </div>
            </div>
          </div>
        </div>
      </Container>

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
