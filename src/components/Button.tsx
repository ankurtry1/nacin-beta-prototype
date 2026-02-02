import { Link } from 'react-router-dom'

type Props =
  | ({ as?: 'button'; href?: never } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'link'; href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: 'route'; to: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)

export default function Button(props: Props & { variant?: 'primary' | 'secondary' }) {
  const variant = props.variant ?? 'primary'
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const styles =
    variant === 'primary'
      ? 'bg-nacin-700 text-white hover:bg-nacin-800 focus-visible:outline-nacin-500'
      : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 focus-visible:outline-nacin-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900'

  if ((props as any).as === 'route') {
    const { to, ...rest } = props as any
    return (
      <Link to={to} className={`${base} ${styles}`} {...rest} />
    )
  }

  if ((props as any).as === 'link') {
    const { href, ...rest } = props as any
    return (
      <a href={href} className={`${base} ${styles}`} {...rest} />
    )
  }

  const { variant: _v, as: _a, ...rest } = props as any
  return <button className={`${base} ${styles}`} {...rest} />
}
