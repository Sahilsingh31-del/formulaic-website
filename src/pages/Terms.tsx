import { PageHero, Reveal } from '../components/animated';

const sections = [
  {
    title: 'Scope of services',
    body: 'Formulaic Engineers Private Limited provides valuation, advisory, inspection, project management, and consultancy services. Each engagement is governed by its specific terms of reference and letter of engagement.',
  },
  {
    title: 'Use of reports',
    body: 'Reports are prepared for the stated purpose and addressee only. Reliance by any other party, or use for any other purpose, requires our prior written consent.',
  },
  {
    title: 'Professional standards',
    body: 'Our work is performed in accordance with applicable valuation standards, statutory requirements, and the codes of conduct of the professional bodies with which our valuers are registered.',
  },
  {
    title: 'Limitations',
    body: 'Valuations are opinions as at a specific date, based on the information available and market conditions at that time. They are not guarantees of realisable price or future performance.',
  },
  {
    title: 'Intellectual property',
    body: 'All content on this website — including text, design, and graphics — is the property of Formulaic Engineers Private Limited and may not be reproduced without permission.',
  },
  {
    title: 'Governing law',
    body: 'These terms and any engagement with us are governed by the laws of India, with courts at New Delhi having exclusive jurisdiction.',
  },
];

export default function Terms() {
  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern the use of this website and our professional services."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.04}>
              <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900">{section.title}</h2>
              <p className="leading-relaxed text-slate-600">{section.body}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className="border-t border-slate-200 pt-8 text-sm text-slate-400">
              Last updated: July 2026. Continued use of this website constitutes acceptance of these terms.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
