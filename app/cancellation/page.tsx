export default function CancellationPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Cancellation and refund policy</p>
        <h1 className="text-4xl font-black text-navy-900">Clear cancellation guidance for clinics and specialists.</h1>
      </div>

      <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">1. Notice periods</h2>
          <p className="mt-3">
            Cancellations should be communicated as early as possible through the platform. The parties are encouraged to agree in advance on notice periods and any rescheduling arrangements relevant to the booking.
          </p>
        </section>

        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">2. Refund handling</h2>
          <p className="mt-3">
            Refund eligibility is determined by the booking terms agreed at the time the appointment is confirmed. If a booking is cancelled for a legitimate reason, a mutually agreed refund or reschedule arrangement should be documented in the platform audit trail.
          </p>
        </section>

        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">3. Dispute resolution</h2>
          <p className="mt-3">
            Where a cancellation dispute arises, both parties may review the appointment record, agreed terms, communication history, and booking status before resolving the issue. Final treatment or legal obligations remain subject to local law and professional standards.
          </p>
        </section>
      </div>
    </div>
  );
}
