import { bookingWorkflow } from '@/data/mock-data';

const steps = [
  {
    title: 'Create a profile',
    description: 'Clinics and specialists create verified profiles with credentials, specialties, requirements, and availability details.',
  },
  {
    title: 'Search and match',
    description: 'The platform filters by specialty, location, availability, and service preferences to surface the right professionals or clinic needs.',
  },
  {
    title: 'Request and confirm',
    description: 'Booking requests are sent, acceptance is recorded, and the session terms are reviewed before the appointment takes place.',
  },
  {
    title: 'Complete and track',
    description: 'Appointments are completed with payment updates, audit notes, and status tracking for final documentation.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">How it works</p>
        <h1 className="text-4xl font-black text-navy-900">From requirement to completed session in a few simple steps.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="card-surface p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl font-bold text-brand-700">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[32px] border border-slate-200 bg-white p-7 shadow-soft">
        <h2 className="text-2xl font-bold text-slate-900">Booking workflow</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bookingWorkflow.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">✓</span>
              <span className="text-sm leading-6 text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
