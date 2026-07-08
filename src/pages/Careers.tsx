import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Rocket, Laptop, HeartHandshake, TrendingUp } from 'lucide-react';
import { PageHero, Reveal } from '../components/animated';

const roles = [
  { title: 'Senior Valuer — Real Estate', location: 'Noida / Lucknow', type: 'Full-time' },
  { title: 'Chartered Engineer — Plant & Machinery', location: 'Mumbai / Pune', type: 'Full-time' },
  { title: 'Field Engineer — Retail Valuations', location: 'Multiple cities', type: 'Full-time' },
  { title: 'Analyst — Strategic Consultancy', location: 'Noida', type: 'Full-time' },
  { title: 'Project Monitoring Engineer', location: 'Delhi NCR / Bengaluru', type: 'Full-time' },
  { title: 'Business Development Manager', location: 'PAN India', type: 'Full-time' },
];

const perks = [
  { icon: Rocket, title: 'Real responsibility early', text: 'Own assignments and client relationships from day one.' },
  { icon: Laptop, title: 'Technology-first tooling', text: 'Handheld field devices, automated platforms, digital workflows.' },
  { icon: TrendingUp, title: 'Clear growth paths', text: 'Structured progression from field roles to practice leadership.' },
  { icon: HeartHandshake, title: 'Mentorship culture', text: 'Senior valuers and engineers invested in your development.' },
];

export default function Careers() {
  return (
    <div className="flex w-full flex-col bg-slate-50">
      <PageHero
        eyebrow="Careers"
        title="Do work that decisions depend on."
        description="Join a PAN India team of 800+ professionals where field engineering meets technology and every report matters."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Why join</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Life at Formulaic</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <perk.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-slate-900">{perk.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Open positions</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Current openings</h2>
          </Reveal>

          <div className="space-y-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-blue-300 hover:bg-white md:flex-row md:items-center md:justify-between"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900">{role.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {role.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {role.type}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  Apply now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <Reveal className="mt-12 rounded-3xl bg-slate-950 p-8 text-center text-white md:p-12">
            <h3 className="mb-3 font-serif text-2xl font-bold md:text-3xl">Don't see your role?</h3>
            <p className="mb-6 text-slate-300">
              Send your profile to <span className="font-semibold text-cyan-300">valuations@formulaic.in</span> — we hire
              ahead of openings for strong candidates.
            </p>
            <Link to="/contact" className="inline-flex items-center rounded-full bg-white px-7 py-3 font-semibold text-slate-950">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
