import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Find Specialists', href: '/find-specialists' },
  { label: 'For Clinics', href: '/for-clinics' },
  { label: 'For Doctors', href: '/for-doctors' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Login', href: '/login' },
  { label: 'Get Started', href: '/register' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-lg font-bold text-white shadow-lg shadow-brand-500/20">
            D
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-navy-900">DentConnect</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              The Right Specialist. At the Right Time.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="secondary-btn">
            Login
          </Link>
          <Link href="/register" className="primary-btn">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
