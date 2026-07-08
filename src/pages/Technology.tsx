import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Cpu, Globe2, Lock, Smartphone, Wifi } from 'lucide-react';
import { PageHero, Reveal } from '../components/animated';

const features = [
  { icon: Smartphone, title: 'Field devices', text: 'Engineers carry specialized handheld devices for real-time, secure site updates with geo-tagged evidence.' },
  { icon: Cloud, title: 'Automated platform', text: 'A fully automated working platform standardises workflows from request intake to final report delivery.' },
  { icon: Wifi, title: 'Connected offices', text: 'Interconnected high-speed LAN across offices enables instant data transfer and shared electronic libraries.' },
  { icon: Globe2, title: 'Global reporting standards', text: 'Strategic tie-up with New Zealand-based Velocity for seamless communication and global standard reporting.' },
  { icon: Lock, title: 'Confidentiality by design', text: 'Internal protocols and access controls protect client data on every assignment.' },
  { icon: Cpu, title: 'Data-driven analysis', text: 'Comparable databases and market benchmarks feed every valuation and feasibility model.' },
];

export default function Technology() {
  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="Technology"
        title="Expert judgment, amplified by technology."
        description="From field capture to final report, our platform keeps assignments fast, consistent, and auditable."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="leading-relaxed text-slate-600">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Live pipeline</span>
              <h2 className="mb-6 mt-3 font-serif text-3xl font-bold md:text-5xl">How an assignment flows through the platform</h2>
              <p className="text-lg leading-relaxed text-slate-300">
                Every stage is timestamped and visible — no email chains, no lost documents, no surprises at review time.
              </p>
            </Reveal>

            <div className="space-y-4">
              {['Request logged & assigned', 'Field visit scheduled', 'Evidence uploaded from site', 'Analysis & senior review', 'Report delivered & archived'].map((stage, index) => (
                <motion.div
                  key={stage}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 font-serif text-lg font-bold">
                    {index + 1}
                  </div>
                  <span className="font-semibold">{stage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl font-bold text-slate-900 md:text-5xl">See the platform in action</h2>
            <p className="mb-8 text-lg text-slate-600">Ask for a walkthrough of how we run high-volume portfolios without losing rigour.</p>
            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
            >
              Request a demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
