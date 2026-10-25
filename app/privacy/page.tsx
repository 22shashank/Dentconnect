export default function PrivacyPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Privacy policy</p>
        <h1 className="text-4xl font-black text-navy-900">How Clinishift handles personal and clinical information.</h1>
      </div>

      <div className="mt-10 space-y-8 text-base leading-8 text-slate-700">
        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">1. Information we collect</h2>
          <p className="mt-3">
            Clinishift collects information required to support account creation, professional verification, clinic onboarding, appointment coordination, and service delivery. This may include names, contact information, qualifications, location, work history, booking preferences, and supporting documents where applicable.
          </p>
        </section>

        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">2. Purpose of use</h2>
          <p className="mt-3">
            Information is used to provide matching services, verify credentials, manage bookings, coordinate payments, support compliance reviews, and communicate with clinics and professionals. Access is restricted to authorised personnel and protected systems.
          </p>
        </section>

        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">3. Data security</h2>
          <p className="mt-3">
            Clinishift maintains reasonable technical and organisational safeguards to reduce unauthorised access, loss, or misuse of personal and health-related information. Private documents are stored with access control and role-based permissions.
          </p>
        </section>

        <section className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">4. User responsibilities</h2>
          <p className="mt-3">
            Users are responsible for providing accurate details and ensuring that any documents or credentials uploaded are lawful, current, and appropriate to the professional or clinic profile being created.
          </p>
        </section>
      </div>
    </div>
  );
}
