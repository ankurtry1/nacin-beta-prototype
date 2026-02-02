import { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme, ThemeMode } from '../lib/theme'
import { track } from '../lib/analytics'

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('system')

  useEffect(() => {
    const initial = getInitialTheme()
    setMode(initial)
    applyTheme(initial)
  }, [])

  function set(next: ThemeMode) {
    setMode(next)
    applyTheme(next)
    track({ name: 'theme_change', props: { mode: next } })
  }

  return (
    <div className="hidden md:flex items-center gap-2">
      <label className="text-xs text-slate-600 dark:text-slate-300">Theme</label>
      <select
        value={mode}
        onChange={(e) => set(e.target.value as ThemeMode)}
        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
        aria-label="Theme"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}
