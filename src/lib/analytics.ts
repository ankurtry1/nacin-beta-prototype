type AnalyticsEvent = {
  name: string
  props?: Record<string, string | number | boolean | null>
}

export function track(event: AnalyticsEvent) {
  // Placeholder. Wire to approved analytics later.
  // For demo: keep silent unless enabled.
  const cfg = (window as any).__NACIN_ANALYTICS__
  if (!cfg?.enabled) return
  // eslint-disable-next-line no-console
  console.log('[analytics]', event)
}
