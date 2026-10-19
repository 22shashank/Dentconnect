import Link from 'next/link';
import { notFound } from 'next/navigation';
import { specialists } from '@/data/mock-data';

export default function SpecialistProfilePage({ params }: { params: { id: string } }) {
  const specialist = specialists.find((item) => item.id === params.id);

  if (!specialist) {
    notFound();
  }

  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface overflow-hidden p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Specialist profile</p>
              <h1 className="mt-3 text-3xl font-black text-navy-900">{specialist.name}</h1>
            </div>
            <span className={`badge ${specialist.verification === 'Verified' ? 'badge-verified' : 'badge-pending'}`}>
              {specialist.verification}
            </span>
          </div>

          <div className="mt-6 rounded-[28px] bg-slate-50 p-5">
            <div className="text-sm text-slate-500">Qualification</div>
            <div className="mt-2 text-lg font-bold text-slate-900">{specialist.qualification}</div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Specialty</div>
              <div className="mt-2 font-semibold text-slate-900">{specialist.specialty}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Experience</div>
              <div className="mt-2 font-semibold text-slate-900">{specialist.experience} years</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">City</div>
              <div className="mt-2 font-semibold text-slate-900">{specialist.city}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Fee</div>
              <div className="mt-2 font-semibold text-slate-900">{specialist.fee}</div>
            </div>
          </div>
        </div>

        <div className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">Professional overview</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{specialist.summary}</p>

          <div className="mt-6">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Core focus</div>
            <div className="flex flex-wrap gap-2">
              {specialist.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Available dates</div>
            <div className="flex flex-wrap gap-2">
              {specialist.dates.map((date) => (
                <span key={date} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {date}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm text-slate-500">Service radius</div>
                <div className="mt-1 text-lg font-bold text-slate-900">{specialist.radius}</div>
              </div>
              <Link href="/register" className="primary-btn">
                Request Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
