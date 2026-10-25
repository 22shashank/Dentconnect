import Link from 'next/link';

const clinicBenefits = [
  'Rapid access to specialists for temporary coverage and emergency support',
  'Custom requirement posting with specialty, date, duration, and budget filters',
  'Verified profiles and transparent booking terms before any clinical commitment',
  'Audit trail for compliance, payment, and professional coordination',
];

export default function ForClinicsPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">For clinics</p>
          <h1 className="text-4xl font-black text-navy-900">Find the right dental specialist without disrupting patient care.</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Clinishift helps clinics fill short-term gaps, cover absence periods, and access specialist expertise for restorative, surgical, orthodontic, and periodontal care.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="primary-btn">
              Register clinic
            </Link>
            <Link href="/find-specialists" className="secondary-btn">
              Browse specialists
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1588776814546-da5a1d5f95ab?auto=format&fit=crop&w=1200&q=80"
            alt="Dental clinic consultation room"
            className="h-[420px] w-full rounded-[24px] object-cover"
          />
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {clinicBenefits.map((benefit) => (
          <div key={benefit} className="card-surface p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">✓</div>
            <p className="text-base leading-7 text-slate-700">{benefit}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">Post a specialist requirement</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Specialty</label>
              <select className="form-input">
                <option>Orthodontics</option>
                <option>Endodontics</option>
                <option>Periodontics</option>
                <option>Oral and Maxillofacial Surgery</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Location</label>
              <input className="form-input" defaultValue="Mumbai, Maharashtra" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Date</label>
                <input type="date" className="form-input" defaultValue="2026-10-20" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Session duration</label>
                <select className="form-input">
                  <option>Half-day</option>
                  <option>Full-day</option>
                  <option>2 hours</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Budget</label>
              <input className="form-input" defaultValue="₹15,000" />
            </div>
            <button type="button" className="primary-btn w-full">
              Submit requirement
            </button>
          </form>
        </div>

        <div className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">Clinic compliance workflow</h2>
          <ul className="mt-6 space-y-5 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">1</span>
              <div>
                <div className="font-semibold text-slate-900">Create clinic profile</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Capture facility details, contact information, and operating hours for review.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">2</span>
              <div>
                <div className="font-semibold text-slate-900">Upload documents</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Clinic registration, authorisation documents, and safety policies are reviewed before active booking access.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">3</span>
              <div>
                <div className="font-semibold text-slate-900">Review matches and confirm terms</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Compare specialists by location, availability, fee, and credentials before sending a booking request.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
