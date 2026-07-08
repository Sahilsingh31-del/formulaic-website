import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero, Reveal } from '../components/animated';
import { services } from '../data/site';

export default function Services() {
  return (
    <div className="flex w-full flex-col bg-slate-50">
      <PageHero
        eyebrow="Services"
        title="Comprehensive services for critical decisions."
        description="Seven specialist practices delivering expert judgment and superior value across the full consultancy spectrum."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-900/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative flex flex-col justify-center overflow-hidden bg-slate-950 p-8 text-white md:w-1/3 md:p-12">
                    <div className="absolute -bottom-10 -right-10 opacity-10">
                      <service.icon className="h-48 w-48" />
                    </div>
                    <div className="relative z-10">
                      <service.icon className="mb-6 h-12 w-12 text-blue-400" />
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        0{index + 1}
                      </p>
                      <h2 className="mb-4 font-serif text-2xl font-bold md:text-3xl">{service.title}</h2>
                      <p className="mb-8 text-sm text-slate-400">{service.tagline}</p>
                      <Link
                        to={`/services/${service.slug}`}
                        className="group inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
                      >
                        Full details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3 md:p-12">
                    <ul className="space-y-4">
                      {service.highlights.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-start">
                          <div className="mr-4 mt-1.5 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-blue-600" />
                          </div>
                          <span className="text-lg leading-relaxed text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
            >
              Discuss your requirement
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
