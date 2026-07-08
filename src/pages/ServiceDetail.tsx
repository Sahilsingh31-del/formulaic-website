import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { Counter, PageHero, Reveal } from '../components/animated';
import { services } from '../data/site';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero eyebrow="Service" title={service.title} description={service.description} image={service.image}>
        <motion.div
          className="mt-8 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
          >
            Request this service
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            All services
          </Link>
        </motion.div>
      </PageHero>

      {/* Stats */}
      <section className="bg-blue-600 py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {service.stats.map(([value, suffix, label], index) => (
              <Reveal key={label} delay={index * 0.1}>
                <div className="font-serif text-4xl font-bold md:text-5xl">
                  <Counter to={value} suffix={suffix} />
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wide text-blue-200">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Scope of work</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">{service.tagline}</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.highlights.map((item, index) => (
              <motion.div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -16px rgba(30,64,175,0.18)' }}
              >
                <CheckCircle2 className="mb-5 h-7 w-7 text-blue-600" />
                <p className="font-medium leading-relaxed text-slate-800">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">What you receive</span>
              <h2 className="mb-6 mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                Deliverables designed for decisions
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Every engagement ends with documentation your credit committee, board, or auditor can rely on — clear
                assumptions, transparent methodology, and field evidence.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-4 rounded-3xl bg-slate-950 p-6 text-white"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                >
                  <FileText className="mt-0.5 h-6 w-6 shrink-0 text-cyan-300" />
                  <span className="font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-slate-900">Related services</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <Link
                  to={`/services/${item.slug}`}
                  className="group block h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <item.icon className="mb-5 h-8 w-8 text-blue-600" />
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mb-5 text-sm text-slate-600">{item.tagline}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600">
                    View details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
