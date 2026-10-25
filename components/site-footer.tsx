import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="section-shell grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-lg font-bold text-white">
              C
            </div>
            <div>
              <div className="text-xl font-bold text-white">Clinishift</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                The Right Specialist. At the Right Time.
              </div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            A modern marketplace helping Indian dental clinics access verified specialists and healthcare professionals for flexible coverage, specialist consultations, and temporary support.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Company</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">For Clinics</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/for-clinics">Clinic Services</Link></li>
            <li><Link href="/find-specialists">Find a Specialist</Link></li>
            <li><Link href="/register">Register Clinic</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">For Doctors</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/join-specialist">Join as Specialist</Link></li>
            <li><Link href="/for-doctors">Doctor Portal</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="section-shell flex flex-col gap-3 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Clinishift. Built for India’s dental care ecosystem.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cancellation">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
