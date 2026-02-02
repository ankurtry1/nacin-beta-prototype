export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6">{children}</div>
}
