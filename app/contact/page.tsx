export default function ContactPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Contact support</p>
          <h1 className="text-4xl font-black text-navy-900">Talk to the DentConnect team.</h1>
          <div className="mt-8 space-y-5 text-slate-700">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email</div>
              <div className="mt-1 text-base">support@dentconnect.in</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Phone</div>
              <div className="mt-1 text-base">+91 22 4567 8901</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Office</div>
              <div className="mt-1 text-base">12th Floor, Coral Tower, Mumbai, Maharashtra</div>
            </div>
          </div>
        </div>

        <div className="card-surface p-8">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Full name</label>
              <input className="form-input" defaultValue="Aarav Sharma" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email address</label>
              <input type="email" className="form-input" defaultValue="aarav@clinicmail.com" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Reason for contact</label>
              <select className="form-input">
                <option>Clinic onboarding</option>
                <option>Specialist registration</option>
                <option>Booking support</option>
                <option>Compliance question</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Message</label>
              <textarea rows={5} className="form-input" defaultValue="Hello, we would like to understand the specialist onboarding process and required verification steps for our clinic." />
            </div>
            <button type="button" className="primary-btn w-full">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
