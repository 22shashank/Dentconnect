import Link from 'next/link';

const doctorBenefits = [
  'Create a professional profile with education, specialties, and availability settings',
  'Receive clinic booking requests in your preferred city, travel radius, and time slots',
  'Track appointments, payment status, and earnings from a clear specialist dashboard',
  'Only verified professionals are marked eligible for clinical bookings',
];

export default function ForDoctorsPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">For specialists</p>
          <h1 className="text-4xl font-black text-navy-900">Grow your dental practice with flexible, curated opportunities.</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            DentConnect helps qualified dental professionals find part-time work, temporary coverage, and specialist consultation opportunities across India while maintaining compliance and professional standards.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/join-specialist" className="primary-btn">
              Join as a specialist
            </Link>
            <Link href="/dashboard" className="secondary-btn">
              View dashboard demo
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
            alt="Dentist professional in clinic"
            className="h-[420px] w-full rounded-[24px] object-cover"
          />
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {doctorBenefits.map((benefit) => (
          <div key={benefit} className="card-surface p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">•</div>
            <p className="text-base leading-7 text-slate-700">{benefit}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">Professional onboarding form</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Professional name</label>
              <input className="form-input" defaultValue="Dr. Asha Mehta" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Qualification</label>
              <input className="form-input" defaultValue="BDS, MDS Orthodontics" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Specialty</label>
                <select className="form-input">
                  <option>Orthodontics</option>
                  <option>Endodontics</option>
                  <option>Prosthodontics</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Availability</label>
                <input className="form-input" defaultValue="Tue, Thu, Sat" />
              </div>
            </div>
            <button type="button" className="primary-btn w-full">
              Submit profile
            </button>
          </form>
        </div>

        <div className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">What specialists can manage</h2>
          <ul className="mt-6 space-y-5 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">✓</span>
              <div>
                <div className="font-semibold text-slate-900">Set your availability</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Adjust dates, working hours, and travel radius to match the kind of opportunities you can support.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">✓</span>
              <div>
                <div className="font-semibold text-slate-900">Manage bookings</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Accept or decline requests, review agreed terms, and keep an audit trail for each appointment.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">✓</span>
              <div>
                <div className="font-semibold text-slate-900">Track payments</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Keep an eye on session fees, payment status, and booking history from one secure dashboard.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
