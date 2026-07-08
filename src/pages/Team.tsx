import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, ShieldCheck, Users } from 'lucide-react';
import { Counter, PageHero, Reveal } from '../components/animated';

const leaders = [
  { name: 'Technical Head — Valuations', exp: '25+ years', bio: 'Registered senior valuer with IBBI and Income Tax registrations, previously at top management levels of national institutions.' },
  { name: 'Head — Project Management', exp: '20+ years', bio: 'Civil engineering leader with township, SEZ, and infrastructure monitoring experience across 30+ cities.' },
  { name: 'Head — Plant & Machinery', exp: '22+ years', bio: 'Chartered Engineer specializing in industrial asset valuation, TEV studies, and IBC assignments.' },
  { name: 'Head — Strategic Consultancy', exp: '18+ years', bio: 'Market research and feasibility specialist advising developers, funds, and public institutions.' },
  { name: 'Head — Risk & Inspections', exp: '19+ years', bio: 'Industrial safety and risk auditor with deep manufacturing and insurance-survey expertise.' },
  { name: 'Head — Transaction Advisory', exp: '17+ years', bio: 'Due diligence and deal structuring leader across M&A, PE, and structured finance mandates.' },
];

const values = [
  { icon: ShieldCheck, title: 'Integrity first', text: 'Uncompromised confidentiality and independence on every assignment.' },
  { icon: Users, title: 'Team-based delivery', text: 'A seamless approach where senior review backs every field report.' },
  { icon: GraduationCap, title: 'Continuous learning', text: 'Regular training on standards, regulation, and methodology.' },
  { icon: Award, title: 'Pursuit of excellence', text: 'Delivering beyond expectations, engagement after engagement.' },
];

export default function Team() {
  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="Our people"
        title="Led by specialists. Delivered by 800+ professionals."
        description="Experienced technical heads who have served at top management levels, backed by registered senior valuers and engineers across India."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              [800, '+', 'Professionals'],
              [100, '+', 'Offices'],
              [17, '+', 'States'],
              [9, '', 'Accreditations'],
            ].map(([value, suffix, label], index) => (
              <Reveal key={label as string} delay={index * 0.08}>
                <div className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text font-serif text-4xl font-bold text-transparent md:text-5xl">
                  <Counter to={value as number} suffix={suffix as string} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-slate-400">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Leadership</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Practice heads</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 font-serif text-2xl font-bold text-white">
                  {leader.name.split('—')[1]?.trim().charAt(0) ?? 'F'}
                </div>
                <h3 className="mb-1 text-lg font-bold text-slate-900">{leader.name}</h3>
                <p className="mb-4 text-sm font-semibold text-blue-600">{leader.exp} experience</p>
                <p className="leading-relaxed text-slate-600">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Culture</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">The values behind the work</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="rounded-3xl bg-slate-950 p-7 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.04 }}
              >
                <value.icon className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-5xl">Want to build with us?</h2>
            <p className="mb-8 text-lg text-blue-100">We are always looking for engineers, valuers, and analysts across India.</p>
            <Link to="/careers" className="group inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-700">
              View careers <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
