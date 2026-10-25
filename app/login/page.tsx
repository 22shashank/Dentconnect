import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="section-shell py-16">
      <div className="mx-auto max-w-lg rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Access portal</p>
        <h1 className="text-3xl font-black text-navy-900">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to manage clinic requirements, specialist bookings, and verification workflows.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email address</label>
            <input type="email" className="form-input" defaultValue="admin@clinishift.in" />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Password</label>
            <input type="password" className="form-input" defaultValue="password123" />
          </div>

          <div className="flex items-center justify-between text-sm text-slate-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              Remember me
            </label>
            <Link href="/contact" className="font-semibold text-brand-700">Need help?</Link>
          </div>

          <Link href="/dashboard" className="primary-btn w-full">
            Sign in
          </Link>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold text-brand-700">
            Create one here
          </Link>
        </div>
      </div>
    </div>
  );
}
