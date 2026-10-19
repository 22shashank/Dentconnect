export default function TermsPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Terms of service</p>
        <h1 className="text-4xl font-black text-navy-900">DentConnect platform terms and responsibilities.</h1>
      </div>

      <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">1. Eligibility</h2>
          <p className="mt-3">
            Users of DentConnect must provide current and accurate information when creating accounts, and they must comply with all applicable laws, regulations, and professional standards relevant to their role as a clinic or dental professional.
          </p>
        </section>

        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">2. Booking and appointments</h2>
          <p className="mt-3">
            DentConnect enables clinics and professionals to coordinate bookings. The platform does not independently set patient treatment plans or authorise clinical performance. All final arrangements, treatment scope, and operations remain the responsibility of the participating clinic or professional.
          </p>
        </section>

        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">3. Compliance</h2>
          <p className="mt-3">
            Users remain responsible for compliance with professional registration requirements, patient consent, emergency arrangements, data privacy, and records retention obligations as applicable under Indian law and professional regulations.
          </p>
        </section>
      </div>
    </div>
  );
}
