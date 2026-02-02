import logoUrl from '../assets/logo.png'

export default function Logo({ compact }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img src={logoUrl} alt="NACIN" className="h-9 w-9" />
      <div className="leading-tight">
        <div className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">
          NACIN
          <span className="ml-2 rounded-full bg-nacin-100 px-2 py-0.5 text-[10px] font-semibold text-nacin-900 dark:bg-slate-900 dark:text-slate-100">
            Beta Prototype
          </span>
        </div>
        {!compact && (
          <div className="text-xs text-slate-600 dark:text-slate-300">
            National Academy of Customs, Indirect Taxes and Narcotics
          </div>
        )}
      </div>
    </div>
  )
}
