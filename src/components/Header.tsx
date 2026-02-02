import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from './Container'
import Logo from './Logo'
import Button from './Button'
import { nav } from './nav'
import { track } from '../lib/analytics'
import emblemUrl from '../assets/emblem-dark.png'
import swachhUrl from '../assets/swach-bharat.png'

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const location = useLocation()
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMobileOpen(false)
    setActive(null)
  }, [location.pathname])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!headerRef.current) return
      if (!headerRef.current.contains(e.target as any)) setActive(null)
    }
    window.addEventListener('mousedown', onClickOutside)
    return () => window.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-900 dark:bg-slate-950/80">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/" onClick={() => track({ name: 'nav_logo' })} aria-label="Go to homepage">
            <Logo compact />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <nav aria-label="Primary" className="flex items-center gap-1">
              {nav.map((item, idx) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActive(idx)}
                  onMouseLeave={() => setActive(null)}
                >
                  <button
                    className={cx(
                      'rounded-lg px-3 py-2 text-sm font-semibold',
                      'text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900'
                    )}
                    onClick={() => setActive(active === idx ? null : idx)}
                    aria-haspopup={item.children ? 'menu' : undefined}
                    aria-expanded={active === idx}
                  >
                    {item.label}
                  </button>

                  {item.children && active === idx && (
                    <div
                      role="menu"
                      className="absolute left-0 mt-2 w-[420px] rounded-2xl border border-slate-200 bg-white p-3 shadow-soft dark:border-slate-800 dark:bg-slate-950"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {item.children.map((c) => (
                          <NavLink
                            key={c.label}
                            to={c.to}
                            role="menuitem"
                            className={({ isActive }) =>
                              cx(
                                'rounded-xl border px-3 py-3 text-sm',
                                'border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900',
                                isActive && 'border-nacin-300 dark:border-nacin-700'
                              )
                            }
                            onClick={() => track({ name: 'nav_click', props: { label: c.label } })}
                          >
                            <div className="font-semibold text-slate-900 dark:text-slate-50">{c.label}</div>
                            {c.desc && <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">{c.desc}</div>}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Button as="route" to="/programs" onClick={() => track({ name: 'cta_programs' })}>
              Programs & Training
            </Button>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <img src={emblemUrl} alt="Emblem of India" className="h-9 w-auto dark:invert" />
            <img src={swachhUrl} alt="Swachh Bharat" className="h-9 w-auto" />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              Menu
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-900 dark:bg-slate-950">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Navigation</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Beta Prototype</div>
              </div>

              <div className="mt-3 grid gap-2">
                {nav.map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200 p-3 dark:border-slate-900">
                    <div className="text-sm font-semibold">{item.label}</div>
                    {item.children ? (
                      <div className="mt-2 grid gap-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.label}
                            to={c.to}
                            className="rounded-lg px-2 py-2 text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    ) : item.to ? (
                      <Link to={item.to} className="mt-2 inline-block text-sm text-nacin-700">
                        Open
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Button as="route" to="/" variant="secondary">
                  Explore NACIN
                </Button>
                <Button as="route" to="/programs">
                  Programs & Training
                </Button>
              </div>

              <div className="mt-3 text-xs text-slate-600 dark:text-slate-300">
                Note: Search, language toggle, and portal links can be added post pilot approval.
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
