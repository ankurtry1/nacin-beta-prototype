import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <Container>
      <div className="py-16">
        <div className="text-sm font-semibold text-nacin-700 dark:text-nacin-300">404</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          This is a beta prototype. Some pages are placeholders and may not exist yet.
        </p>
        <div className="mt-6 flex gap-3">
          <Button as="route" to="/" variant="secondary">Go home</Button>
          <Link to="/programs" className="text-sm font-semibold text-nacin-700">Programs & Training →</Link>
        </div>
      </div>
    </Container>
  )
}
