const values = [
  {
    title: 'Clinical trust',
    description: 'We help dental clinics and specialists connect through structured verification, clear eligibility checks, and professional accountability.',
  },
  {
    title: 'Operational flexibility',
    description: 'The platform is designed for urgent coverage, specialty consultations, short-term work, and temporary staffing across Indian clinics.',
  },
  {
    title: 'Transparent coordination',
    description: 'Every booking workflow includes review, confirmation, documentation, and payment tracking designed to keep both parties informed.',
  },
];

export default function AboutPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <section className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">About Clinishift</p>
          <h1 className="text-4xl font-black text-navy-900">A dental marketplace built for dependable, timely specialist access.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Clinishift was imagined to close a practical gap in the Indian dental healthcare ecosystem: clinics need specialist support when regular clinicians are unavailable, and qualified dental professionals want access to flexible opportunities without the friction of fragmented outreach.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1588776814546-da5a1d5f95ab?auto=format&fit=crop&w=1200&q=80"
            alt="Dental team in clinic"
            className="h-[420px] w-full rounded-[24px] object-cover"
          />
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="card-surface p-7">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-700">✦</div>
            <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{value.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-[32px] border border-slate-200 bg-slate-900 p-8 text-slate-100">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Our mission</p>
        <h2 className="mt-3 text-3xl font-black text-white">Support better care continuity for dental patients across India.</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          We help clinics access the right specialist at the right time, while enabling dental professionals to manage flexible clinical opportunities through clear workflows, documented verification, and transparent communication.
        </p>
      </section>
    </div>
  );
}
