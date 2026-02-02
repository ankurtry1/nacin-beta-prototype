import Container from './Container'
import Logo from './Logo'

const links = {
  'Quick Links': ['RTI', 'Policies', 'Accessibility', 'Privacy', 'Sitemap', 'Contact'],
  'Platforms': ['Digital Learning (LMS)', 'Programs & Training', 'Research & Knowledge Hub'],
  'Engagements': ['International Engagements', 'Faculty & Leadership', 'Infrastructure'],
  'Support': ['Screen Reader Access', 'Helpdesk (Beta)', 'Feedback (Beta)']
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-900 dark:bg-slate-950">
      <Container>
        <div className="py-10">
          <div className="grid gap-8 lg:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                This is a beta prototype for pilot approval. Content and links are indicative and can be aligned to official
                information architecture post approval.
              </p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} NACIN</p>
            </div>

            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{title}</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {items.map((it) => (
                    <li key={it}>
                      <a href="#" className="hover:text-slate-900 dark:hover:text-white">
                        {it}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-900 dark:bg-slate-900/30 dark:text-slate-200">
            <div className="font-semibold">Accessibility note</div>
            <div className="mt-1">
              Built with semantic structure, keyboard navigability, and high-contrast defaults. “Screen Reader Access” is
              available in Support links.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
