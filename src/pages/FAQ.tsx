import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { PageHero, Reveal } from '../components/animated';
import { officeLocations } from '../data/offices';

const officeLocationCount = officeLocations.length;
const mappedStatesCount = new Set(officeLocations.map((office) => office.state)).size;

const faqs = [
  {
    q: 'How long does a typical valuation take?',
    a: 'Retail lending valuations are usually delivered within 48 hours. Larger commercial, township, or plant assignments take 1–3 weeks depending on asset complexity, document readiness, and site access.',
  },
  {
    q: 'Which documents do you need to start?',
    a: 'Typically title documents, approved plans, previous valuation reports if any, and property tax or utility records. Our team shares a precise checklist once the asset type and purpose are confirmed.',
  },
  {
    q: 'Are your reports accepted by banks and regulators?',
    a: 'Yes. We are empanelled with 180+ banks and NBFCs, and our valuers hold IBBI, Income Tax, and CEV registrations, so reports are accepted for lending, statutory, and audit purposes.',
  },
  {
    q: 'Do you cover my city?',
    a: `With ${officeLocationCount} mapped office locations across ${mappedStatesCount} states and a satellite office model, we cover major and Tier-2/3 cities across the network. Share your location and we will confirm mobilisation timelines.`,
  },
  {
    q: 'Can you handle high-volume retail portfolios?',
    a: 'Yes — our automated platform with field devices is built for portfolio-scale work with standardised formats, geo-tagged evidence, and centralized quality review.',
  },
  {
    q: 'What does a valuation cost?',
    a: 'Fees depend on asset type, location, purpose, and turnaround. Contact us with the basics and we will share a transparent quote — usually the same day.',
  },
  {
    q: 'Do you provide distress or forced-sale values?',
    a: 'Yes, alongside fair market value we provide distress value, forced-sale value, and realizable value where the purpose requires it — with the assumptions clearly documented.',
  },
  {
    q: 'Can you value plant and machinery under IBC?',
    a: 'Our IBBI-registered valuers regularly handle plant and machinery assignments for insolvency, including remaining useful life, impairment, and scrap or salvage assessments.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex w-full flex-col bg-slate-50">
      <PageHero
        eyebrow="FAQ"
        title="Answers before you ask."
        description="The questions lenders, developers, and CFOs ask us most often — answered plainly."
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <Reveal key={faq.q} delay={index * 0.04}>
                  <div
                    className={`overflow-hidden rounded-3xl border transition-colors ${
                      isOpen ? 'border-blue-300 bg-white shadow-lg shadow-blue-900/5' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <button
                      className="flex w-full items-center justify-between gap-6 p-6 text-left"
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="px-6 pb-6 leading-relaxed text-slate-600">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-14 rounded-3xl bg-slate-950 p-8 text-center text-white md:p-12">
            <h2 className="mb-3 font-serif text-2xl font-bold md:text-3xl">Still have a question?</h2>
            <p className="mb-7 text-slate-300">Our team responds within one business day.</p>
            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold transition-colors hover:bg-blue-500"
            >
              Ask us directly <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
