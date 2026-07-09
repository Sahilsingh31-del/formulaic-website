import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Landmark, LineChart, ShieldCheck, TrendingUp } from 'lucide-react';
import { officeLocations } from '../data/offices';

export default function Insights() {
  const insights = [
    {
      icon: Landmark,
      title: 'Lender Confidence',
      category: 'Banking & NBFCs',
      text: 'Robust valuation practices help lenders understand collateral quality, risk exposure, and recovery assumptions.',
    },
    {
      icon: Building2,
      title: 'Real Estate Decisions',
      category: 'Developers',
      text: 'Comparable evidence, location intelligence, and project-stage review create stronger development and funding conversations.',
    },
    {
      icon: Factory,
      title: 'Industrial Asset Review',
      category: 'Plant & Machinery',
      text: 'Technical inspection and useful-life assessment support financial reporting, transactions, and risk management.',
    },
  ];

  const metrics = [
    ['180+', 'Leading financial institutions served'],
    ['80+', 'Named banking and corporate partners'],
    [`${officeLocations.length}`, 'Mapped office locations'],
    ['800+', 'Professionals in the network'],
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="relative bg-slate-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Analytics dashboard"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/70" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.span
            className="inline-flex rounded-full bg-blue-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 border border-blue-300/20"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Market insights
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold mt-6 mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ideas and signals for valuation-led decisions.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore how evidence, field intelligence, and sector context improve lending, real estate, and industrial asset decisions.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <motion.article
                key={insight.title}
                className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm overflow-hidden relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-7 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <insight.icon className="w-7 h-7" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">{insight.category}</p>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">{insight.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-8">{insight.text}</p>
                <Link to="/contact" className="inline-flex items-center text-blue-600 font-semibold group/link">
                  Discuss this area <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              className="relative rounded-[2rem] bg-slate-950 p-6 text-white overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-200">Signal dashboard</p>
                    <h2 className="text-3xl font-serif font-bold mt-2">What teams monitor</h2>
                  </div>
                  <LineChart className="w-10 h-10 text-cyan-300" />
                </div>
                <div className="space-y-5">
                  {['Market comparables', 'Location demand', 'Legal and technical status', 'Asset condition'].map((item, index) => (
                    <div key={item}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{item}</span>
                        <span className="text-cyan-200">{78 + index * 5}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${78 + index * 5}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: index * 0.12 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-blue-600 font-semibold uppercase tracking-[0.2em] text-xs">Data with judgment</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">Reports should be clear, not just complete</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Good valuation advice connects numbers, risk, and field reality into a format decision-makers can trust quickly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-3xl bg-slate-50 border border-slate-200 p-6">
                    <div className="text-3xl font-serif font-bold text-slate-900">{value}</div>
                    <p className="text-sm text-slate-600 mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3 text-blue-50 mb-4">
                <TrendingUp className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-[0.18em] text-xs">Need a specialist view?</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Bring us into the decision early.</h2>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold group shrink-0">
              Contact the team <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
