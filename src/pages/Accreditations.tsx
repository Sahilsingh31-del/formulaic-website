import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BadgeCheck } from 'lucide-react';
import { PageHero, Reveal } from '../components/animated';

const accreditations = [
  { title: 'Insolvency and Bankruptcy Board of India (IBBI)', desc: 'Authorized for insolvency and bankruptcy valuations under the IBC framework.' },
  { title: 'Income Tax Department of India', desc: 'Registered valuers for fair market value assessments and tax purposes.' },
  { title: 'Royal Institute of Chartered Surveyors (MRICS)', desc: 'Membership committed to international standards and global best practices.' },
  { title: 'Engineers Council of India', desc: 'Validates technical competence and engineering solutions nationwide.' },
  { title: 'Institute of Valuers', desc: 'Ensures alignment with the latest valuation methodologies.' },
  { title: 'Indian Institute of Valuers', desc: 'Connects the firm to a vast professional valuation network.' },
  { title: 'RVO Estate Managers & Appraisers Foundation', desc: 'Certified to undertake specific asset class valuations.' },
  { title: 'Council of Engineers & Valuers (CEV)', desc: 'Enables delivery of technically sound techno-commercial reports.' },
  { title: 'ISO 9001:2015', desc: 'Certified quality management system across all delivery processes.' },
];

export default function Accreditations() {
  return (
    <div className="flex w-full flex-col bg-slate-50">
      <PageHero
        eyebrow="Credentials"
        title="Accreditations that stand behind every report."
        description="Statutory registrations and professional memberships that make our work defensible in front of regulators, courts, and auditors."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accreditations.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-600/5 transition-transform group-hover:scale-150" />
                <BadgeCheck className="mb-6 h-9 w-9 text-blue-600" />
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:flex-row md:justify-between md:p-12">
            <div className="flex items-center gap-5">
              <Award className="h-14 w-14 shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold md:text-4xl">Need statutory-grade valuation?</h2>
                <p className="mt-2 text-blue-50">IBBI, Income Tax, SARFAESI, and IndAS-compliant reporting.</p>
              </div>
            </div>
            <Link to="/contact" className="group inline-flex shrink-0 items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-700">
              Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="bg-white py-16 text-center">
        <p className="mx-auto max-w-2xl px-6 text-slate-500">
          Registration certificates and membership details are available on request for lender empanelment and audit purposes.
        </p>
      </Reveal>
    </div>
  );
}
