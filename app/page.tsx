import Link from 'next/link';
import { specialists, trustPoints } from '@/data/mock-data';

const steps = [
  {
    title: 'Post a requirement',
    description: 'Clinics outline the specialty, date, duration, and location needed for a specialist consult or temporary coverage.',
  },
  {
    title: 'Review verified matches',
    description: 'DentConnect surfaces matching specialists by expertise, city, travel radius, and availability.',
  },
  {
    title: 'Confirm and complete',
    description: 'Request a booking, accept the terms, and manage status updates, payments, and documentation throughout the appointment.',
  },
];

export default function HomePage() {
  const featured = specialists.slice(0, 3);

  return (
    <div className="pb-20">
      <section className="section-shell grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Trusted dental coverage network
          </div>
          <h1 className="max-w-xl text-4xl font-black leading-tight text-navy-900 sm:text-5xl">
            Expert Dental Care, Right When You Need It.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
            Connect dental clinics with qualified specialists for flexible, part-time clinical opportunities and specialist appointments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/find-specialists" className="primary-btn">
              Find a Specialist
            </Link>
            <Link href="/join-specialist" className="secondary-btn">
              Join as a Specialist
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Modern dental clinic consultation"
              className="h-[540px] w-full rounded-[24px] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-6 right-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Book a specialist</h3>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">Verified network</span>
            </div>

            <div className="grid gap-3 md:grid-cols-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Specialty</label>
                <select className="form-input py-2.5">
                  <option>Orthodontics</option>
                  <option>Endodontics</option>
                  <option>Periodontics</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Location</label>
                <select className="form-input py-2.5">
                  <option>Mumbai</option>
                  <option>Delhi NCR</option>
                  <option>Bengaluru</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Available date</label>
                <input type="date" className="form-input py-2.5" defaultValue="2026-10-20" />
              </div>
              <div className="flex items-end">
                <button className="primary-btn w-full">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/70">
        <div className="section-shell grid gap-6 py-8 md:grid-cols-2 xl:grid-cols-4">
          {trustPoints.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 h-11 w-11 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center text-xl">✓</div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">How it works</p>
          <h2 className="text-3xl font-black text-navy-900">Built for faster specialist access and more resilient clinics.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="card-surface p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-lg font-bold text-brand-700">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Featured specialists</p>
              <h2 className="text-3xl font-black text-white">Flexible support across leading dental specialties.</h2>
            </div>
            <Link href="/find-specialists" className="secondary-btn border-slate-700 bg-slate-900 text-white hover:text-brand-300">
              View all specialists
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((specialist) => (
              <div key={specialist.id} className="rounded-[28px] border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{specialist.name}</h3>
                    <p className="text-sm text-brand-200">{specialist.specialty}</p>
                  </div>
                  <span className="badge badge-verified">{specialist.verification}</span>
                </div>
                <p className="mt-4 text-sm text-slate-300">{specialist.qualification}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="rounded-full bg-slate-800 px-2.5 py-1">{specialist.city}</span>
                  <span className="rounded-full bg-slate-800 px-2.5 py-1">{specialist.experience}+ years</span>
                  <span className="rounded-full bg-slate-800 px-2.5 py-1">{specialist.fee}</span>
                </div>
                <div className="mt-5 flex gap-3">
                  <Link href={`/specialists/${specialist.id}`} className="secondary-btn w-full border-slate-700 bg-slate-900 text-white hover:text-brand-300">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="card-surface overflow-hidden p-8 sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Ready to get started?</p>
            <h2 className="text-3xl font-black text-navy-900">Design a smarter dental staffing plan for your clinic.</h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 lg:mt-0">
            <Link href="/register" className="primary-btn">Register Clinic</Link>
            <Link href="/join-specialist" className="secondary-btn">Apply as Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
