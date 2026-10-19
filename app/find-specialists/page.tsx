'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { specialties, specialists } from '@/data/mock-data';

export default function FindSpecialistsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All specialties');
  const [selectedCity, setSelectedCity] = useState('All cities');

  const filteredSpecialists = useMemo(() => {
    return specialists.filter((specialist) => {
      const matchesSpecialty =
        selectedSpecialty === 'All specialties' || specialist.specialty === selectedSpecialty;
      const matchesCity = selectedCity === 'All cities' || specialist.city === selectedCity;
      return matchesSpecialty && matchesCity;
    });
  }, [selectedCity, selectedSpecialty]);

  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Find specialists</p>
          <h1 className="text-4xl font-black text-navy-900">Search skilled dental professionals</h1>
        </div>
        <div className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
          {filteredSpecialists.length} specialist profiles available
        </div>
      </div>

      <div className="card-surface p-5 lg:p-7">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Specialty</label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="form-input"
            >
              <option>All specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="form-input"
            >
              <option>All cities</option>
              {[...new Set(specialists.map((specialist) => specialist.city))].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Available date</label>
            <input type="date" defaultValue="2026-10-20" className="form-input" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredSpecialists.length > 0 ? (
          filteredSpecialists.map((specialist) => (
            <div key={specialist.id} className="card-surface p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{specialist.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">{specialist.qualification}</p>
                </div>
                <span className={`badge ${specialist.verification === 'Verified' ? 'badge-verified' : 'badge-pending'}`}>
                  {specialist.verification}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                  {specialist.specialty}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  {specialist.experience}+ years
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">{specialist.summary}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">City</div>
                  <div className="mt-1 font-semibold text-slate-800">{specialist.city}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Service radius</div>
                  <div className="mt-1 font-semibold text-slate-800">{specialist.radius}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Fee</div>
                  <div className="mt-1 font-semibold text-slate-800">{specialist.fee}</div>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Available dates</div>
                <div className="flex flex-wrap gap-2">
                  {specialist.dates.map((date) => (
                    <span key={date} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {date}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/specialists/${specialist.id}`} className="secondary-btn">
                  View Profile
                </Link>
                <Link href="/register" className="primary-btn">
                  Request Booking
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="card-surface p-8 text-center lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-900">No specialists match your filters yet.</h3>
            <p className="mt-2 text-sm text-slate-600">Try adjusting the specialty or city to see more available profiles.</p>
          </div>
        )}
      </div>
    </div>
  );
}
