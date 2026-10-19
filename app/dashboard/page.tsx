'use client';

import { useState } from 'react';
import { clinicBookings, dashboardMetrics } from '@/data/mock-data';

const statuses = ['Accepted', 'Pending', 'Completed', 'Cancelled'];

export default function DashboardPage() {
  const [role, setRole] = useState<'clinic' | 'specialist'>('clinic');

  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Dashboard</p>
          <h1 className="text-4xl font-black text-navy-900">Operations overview</h1>
        </div>

        <div className="flex rounded-full border border-slate-200 bg-white p-1">
          <button
            type="button"
            onClick={() => setRole('clinic')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              role === 'clinic' ? 'bg-brand-500 text-white' : 'text-slate-700'
            }`}
          >
            Clinic view
          </button>
          <button
            type="button"
            onClick={() => setRole('specialist')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              role === 'specialist' ? 'bg-brand-500 text-white' : 'text-slate-700'
            }`}
          >
            Specialist view
          </button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <div key={metric.label} className="card-surface p-5">
            <div className="text-sm text-slate-500">{metric.label}</div>
            <div className="mt-3 text-3xl font-black text-navy-900">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">{role === 'clinic' ? 'Clinic requirement' : 'Professional availability'}</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Specialty</label>
              <select className="form-input">
                <option>Orthodontics</option>
                <option>Endodontics</option>
                <option>Periodontics</option>
                <option>Prosthodontics</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Location</label>
              <input className="form-input" defaultValue="Mumbai" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Date</label>
                <input type="date" className="form-input" defaultValue="2026-10-20" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Budget</label>
                <input className="form-input" defaultValue="₹15,000" />
              </div>
            </div>
            <button type="button" className="primary-btn w-full">
              {role === 'clinic' ? 'Post requirement' : 'Update availability'}
            </button>
          </form>
        </div>

        <div className="card-surface p-7">
          <h2 className="text-2xl font-bold text-slate-900">Booking status</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {statuses.map((status) => (
              <span key={status} className={`badge ${status === 'Accepted' ? 'badge-verified' : status === 'Completed' ? 'badge-completed' : status === 'Cancelled' ? 'badge-cancelled' : 'badge-pending'}`}>
                {status}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {clinicBookings.map((booking) => (
              <div key={booking.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{booking.clinic}</div>
                    <div className="text-xs text-slate-500">{booking.specialist}</div>
                  </div>
                  <span className={`badge ${booking.status === 'Accepted' ? 'badge-verified' : booking.status === 'Completed' ? 'badge-completed' : booking.status === 'Cancelled' ? 'badge-cancelled' : 'badge-pending'}`}>
                    {booking.status}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                  <span>{booking.date}</span>
                  <span className="font-semibold text-slate-900">{booking.id}</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-brand-700">{booking.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
