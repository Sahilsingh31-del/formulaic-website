import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Landmark, TrendingUp } from 'lucide-react';
import { Counter, PageHero, Reveal } from '../components/animated';

const cases = [
  {
    icon: Landmark,
    sector: 'Banking & NBFC',
    title: 'Portfolio valuation for a leading housing finance company',
    problem: 'A 4,000+ property retail portfolio needed consistent revaluation across 12 states within one quarter.',
    result: 'Delivered with geo-tagged evidence, standardised formats, and zero audit exceptions.',
    metrics: [[4000, '+', 'Properties valued'], [12, '', 'States covered'], [90, ' days', 'Total timeline']],
  },
  {
    icon: Building2,
    sector: 'Real Estate',
    title: 'Township project monitoring for lender consortium',
    problem: 'A 200-acre township required independent stage-wise certification for phased fund releases.',
    result: 'Monthly monitoring reports enabled on-time disbursements with full cost transparency.',
    metrics: [[200, ' acres', 'Project size'], [36, '', 'Monitoring cycles'], [100, '%', 'On-time reports']],
  },
  {
    icon: Factory,
    sector: 'Industrial',
    title: 'Plant & machinery valuation under IBC',
    problem: 'A stressed manufacturing unit needed defensible valuation of specialized process equipment for resolution.',
    result: 'IBBI-registered valuers delivered fair, liquidation, and salvage values accepted by the CoC.',
    metrics: [[350, '+ Cr', 'Asset value (Rs)'], [800, '+', 'Machine line items'], [3, ' weeks', 'Turnaround']],
  },
  {
    icon: TrendingUp,
    sector: 'Strategic Consultancy',
    title: 'Feasibility study for mixed-use development',
    problem: 'A developer needed market-tested guidance on the optimal mix for a prime 15-acre city parcel.',
    result: 'Demand forecasting and highest-and-best-use analysis reshaped the project mix, improving projected IRR.',
    metrics: [[15, ' acres', 'Site analysed'], [5, '', 'Use scenarios modelled'], [4, ' weeks', 'Study duration']],
  },
];

export default function CaseStudies() {
  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="Case studies"
        title="Proof, not promises."
        description="A sample of engagements that show how we work — the problem, the approach, and the measurable result."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-10">
            {cases.map((item, index) => (
              <motion.div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative overflow-hidden bg-slate-950 p-8 text-white md:p-12">
                    <div className="absolute -bottom-12 -right-12 opacity-10">
                      <item.icon className="h-56 w-56" />
                    </div>
                    <div className="relative z-10">
                      <span className="mb-6 inline-flex rounded-full bg-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {item.sector}
                      </span>
                      <h2 className="mb-8 font-serif text-2xl font-bold leading-snug md:text-3xl">{item.title}</h2>
                      <div className="grid grid-cols-3 gap-4">
                        {item.metrics.map(([value, suffix, label]) => (
                          <div key={label as string}>
                            <div className="font-serif text-2xl font-bold text-cyan-300 md:text-3xl">
                              <Counter to={value as number} suffix={suffix as string} />
                            </div>
                            <div className="mt-1 text-xs text-slate-400">{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-8 p-8 md:p-12">
                    <div>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">The challenge</h3>
                      <p className="text-lg leading-relaxed text-slate-700">{item.problem}</p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The result</h3>
                      <p className="text-lg leading-relaxed text-slate-700">{item.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="mb-6 text-slate-500">Details anonymised to protect client confidentiality.</p>
            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
            >
              Discuss a similar challenge <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
