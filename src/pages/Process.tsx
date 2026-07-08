import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, FileSearch, FileText, ShieldCheck } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Scope & Brief',
      text: 'We capture the asset details, purpose, location, lender requirements, documents, and expected timelines.',
    },
    {
      icon: FileSearch,
      title: 'Field Inspection',
      text: 'Qualified professionals inspect the site, capture evidence, verify records, and identify technical risks.',
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      text: 'Our team reviews comparable data, demand indicators, compliance context, and asset-specific assumptions.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Review',
      text: 'Senior reviewers validate methodology, red flags, valuation logic, and final report readiness.',
    },
    {
      icon: FileText,
      title: 'Final Report',
      text: 'The outcome is a clear, defensible, decision-ready report for lenders, boards, and transaction teams.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,0.35),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.18),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.span
            className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 border border-white/10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Delivery process
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold mt-6 mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Transparent valuation workflows for high-stakes decisions.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Every assignment follows a clear path from briefing to evidence, analysis, review, and final report delivery.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-600 to-cyan-200" />
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">Step 0{index + 1}</div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">{step.title}</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">{step.text}</p>
                  </div>
                  <div className="hidden lg:flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-slate-950 border-4 border-white shadow-xl text-white flex items-center justify-center font-serif text-xl">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-[0.2em] text-xs">Controls</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-5">Built-in checks at every stage</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our process is designed for confidence: field evidence, professional review, consistent reporting, and clear escalation for unusual findings.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Document verification', 'Geo-tagged field inputs', 'Comparable market review', 'Senior technical approval'].map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-3xl bg-slate-50 border border-slate-200 p-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mb-5" />
                  <h3 className="font-bold text-slate-900">{item}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Have an assignment ready?</h2>
          <p className="text-blue-100 text-lg mb-8">Send the brief and our team will guide you through the next steps.</p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold group">
            Talk to an expert <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
