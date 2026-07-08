import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero, Reveal } from '../components/animated';
import { sectors } from '../data/site';

export default function Sectors() {
  return (
    <div className="flex w-full flex-col bg-slate-50">
      <PageHero
        eyebrow="Sectors"
        title="Deep expertise across India's asset landscape."
        description="Six specialist sector practices, one consistent standard of evidence, rigour, and reporting."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={`/sectors/${sector.slug}`}
                  className="group block h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-3 text-white">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                        <sector.icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-serif text-xl font-bold">{sector.title}</h2>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{sector.tagline}</p>
                    <p className="mb-6 leading-relaxed text-slate-600">{sector.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-blue-600">
                      Explore sector <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-5xl">Don't see your sector?</h2>
            <p className="mb-8 text-lg text-blue-100">
              Our teams handle special-use and unusual assets regularly. Tell us what you're working with.
            </p>
            <Link to="/contact" className="group inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-700">
              Talk to us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
