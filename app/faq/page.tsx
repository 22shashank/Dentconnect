import { faqs } from '@/data/mock-data';

export default function FaqPage() {
  return (
    <div className="section-shell py-12 lg:py-16">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Frequently asked questions</p>
        <h1 className="text-4xl font-black text-navy-900">Everything you need to know before onboarding.</h1>
      </div>

      <div className="space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question} className="card-surface p-6">
            <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
