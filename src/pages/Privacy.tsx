import { PageHero, Reveal } from '../components/animated';

const sections = [
  {
    title: 'Information we collect',
    body: 'When you contact us or engage our services, we collect the information you provide — such as your name, organisation, contact details, and details about the assets or assignments you share with us.',
  },
  {
    title: 'How we use information',
    body: 'Information is used solely to deliver our valuation, advisory, inspection, and consultancy services, to respond to enquiries, and to meet statutory and regulatory obligations that apply to registered valuers.',
  },
  {
    title: 'Confidentiality',
    body: 'Client and assignment information is protected by strict internal confidentiality protocols. Access is limited to the professionals working on your engagement and the reviewers responsible for quality control.',
  },
  {
    title: 'Data retention',
    body: 'Assignment records are retained as required by applicable valuation regulations and professional standards, after which they are securely archived or disposed of.',
  },
  {
    title: 'Third parties',
    body: 'We do not sell or trade your information. Data is shared only where required by law, by the regulator, or with your explicit consent — for example, when a lender requests a copy of a report you commissioned.',
  },
  {
    title: 'Contact',
    body: 'For any privacy-related questions or requests, write to valuations@formulaic.in and our team will respond within a reasonable timeframe.',
  },
];

export default function Privacy() {
  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Formulaic Engineers Private Limited handles the information you share with us."
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
              Last updated: July 2026. This policy may be revised from time to time; the latest version will always be available on this page.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
