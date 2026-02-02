const KEY = 'nacin_theme'

export type ThemeMode = 'light' | 'dark' | 'system'

export function getInitialTheme(): ThemeMode {
  const stored = localStorage.getItem(KEY) as ThemeMode | null
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'system'
}

export function applyTheme(mode: ThemeMode) {
  const root = document.documentElement
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const shouldDark = mode === 'dark' || (mode === 'system' && systemDark)

  if (shouldDark) root.classList.add('dark')
  else root.classList.remove('dark')

  localStorage.setItem(KEY, mode)
}
