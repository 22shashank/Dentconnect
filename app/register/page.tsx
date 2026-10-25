'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [role, setRole] = useState<'clinic' | 'specialist'>('clinic');

  return (
    <div className="section-shell py-16">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Create account</p>
        <h1 className="text-3xl font-black text-navy-900">Join Clinishift</h1>
        <p className="mt-2 text-sm text-slate-600">Set up a clinic or specialist profile and start coordinating verified dental coverage.</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setRole('clinic')}
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
              role === 'clinic'
                ? 'border-brand-500 bg-brand-50 text-brand-700'
                : 'border-slate-200 bg-white text-slate-700'
            }`}
          >
            Register clinic
          </button>
          <button
            type="button"
            onClick={() => setRole('specialist')}
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
              role === 'specialist'
                ? 'border-brand-500 bg-brand-50 text-brand-700'
                : 'border-slate-200 bg-white text-slate-700'
            }`}
          >
            Register specialist
          </button>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Full name</label>
            <input className="form-input" defaultValue={role === 'clinic' ? 'SmileCraft Dental Studio' : 'Dr. Asha Mehta'} />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email address</label>
            <input type="email" className="form-input" defaultValue="hello@clinishift.in" />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Password</label>
            <input type="password" className="form-input" defaultValue="password123" />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">City</label>
            <input className="form-input" defaultValue={role === 'clinic' ? 'Mumbai' : 'Bengaluru'} />
          </div>
          {role === 'specialist' ? (
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Primary specialty</label>
              <select className="form-input">
                <option>Orthodontics</option>
                <option>Endodontics</option>
                <option>Periodontics</option>
                <option>Prosthodontics</option>
              </select>
            </div>
          ) : (
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Clinic type</label>
              <select className="form-input">
                <option>General dental clinic</option>
                <option>Multi-specialty clinic</option>
                <option>Orthodontic practice</option>
              </select>
            </div>
          )}

          <button type="button" className="primary-btn w-full">
            Create account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-brand-700">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
