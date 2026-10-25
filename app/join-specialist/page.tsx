export default function JoinSpecialistPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Join as a specialist</p>
        <h1 className="text-4xl font-black text-navy-900">Create your profile and become eligible for verified bookings.</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Full name</label>
              <input className="form-input" defaultValue="Dr. Sanjay Menon" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Qualification</label>
              <input className="form-input" defaultValue="BDS, MDS Periodontics" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Primary specialty</label>
              <select className="form-input">
                <option>Periodontics</option>
                <option>Orthodontics</option>
                <option>Endodontics</option>
                <option>Oral and Maxillofacial Surgery</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Years of experience</label>
              <input className="form-input" defaultValue="11" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current city</label>
              <input className="form-input" defaultValue="Kochi" />
            </div>
          </form>

          <div className="space-y-5">
            <div className="rounded-[28px] bg-slate-50 p-5">
              <h3 className="text-xl font-bold text-slate-900">Verification checklist</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>• Upload educational certificates and professional registration details</li>
                <li>• Add your preferred specialties and clinical availability</li>
                <li>• Set travel radius, working hours, and consultation fees</li>
                <li>• Complete compliance review before being marked as verified</li>
              </ul>
            </div>

            <div className="rounded-[28px] bg-brand-50 p-5">
              <h3 className="text-xl font-bold text-brand-700">Clinical safety requirements</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Only professionals whose credentials and eligibility have been verified can be listed as verified or made eligible for booking requests. Clinishift does not independently authorise clinical practice.
              </p>
            </div>

            <button type="button" className="primary-btn w-full">
              Submit specialist profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
