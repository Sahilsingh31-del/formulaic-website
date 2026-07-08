import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Counter, PageHero, Reveal } from '../components/animated';
import { sectors } from '../data/site';

export default function SectorDetail() {
  const { slug } = useParams();
  const sector = sectors.find((s) => s.slug === slug);

  if (!sector) return <Navigate to="/sectors" replace />;

  const others = sectors.filter((s) => s.slug !== slug);

  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero eyebrow="Sector expertise" title={sector.title} description={sector.description} image={sector.image}>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
          >
            Discuss your requirement
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </PageHero>

      {/* Stats */}
      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {sector.stats.map(([value, suffix, label], index) => (
              <Reveal key={label} delay={index * 0.1}>
                <div className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text font-serif text-4xl font-bold text-transparent md:text-5xl">
                  <Counter to={value} suffix={suffix} />
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-400">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges vs solutions */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{sector.tagline}</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
              What this sector faces — and how we respond
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-amber-200 bg-amber-50/60 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">Sector challenges</h3>
                </div>
                <ul className="space-y-4">
                  {sector.challenges.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-lg text-slate-700">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl bg-slate-950 p-8 text-white">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-cyan-300">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Our response</h3>
                </div>
                <ul className="space-y-4">
                  {sector.solutions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-lg text-slate-300">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other sectors */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-slate-900">Other sectors we serve</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {others.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={`/sectors/${item.slug}`}
                  className="block h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-blue-300 hover:bg-white"
                >
                  <item.icon className="mb-4 h-7 w-7 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
