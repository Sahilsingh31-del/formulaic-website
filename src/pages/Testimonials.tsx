import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star } from 'lucide-react';
import { Marquee, PageHero, Reveal } from '../components/animated';
import { clientNames } from '../data/site';

const testimonials = [
  { name: 'Rajesh Verma', role: 'Zonal Manager', quote: 'Exceptional, detailed, and accurate retail lending valuation services. Their use of technology sets them apart in the industry.' },
  { name: 'Amit Singhania', role: 'Director, Real Estate Group', quote: 'Impressive technical expertise in cost monitoring, scheduling, and ensuring quality delivery for our commercial townships.' },
  { name: 'Priya Desai', role: 'VP-Business Development', quote: 'Their strategic advisory team provided thorough, data-driven feasibility studies that were instrumental in our market expansion.' },
  { name: 'Vikram Sodhi', role: 'Plant Head', quote: 'Meticulous attention to detail and professional integrity during our industrial plant risk inspections. Highly recommended.' },
  { name: 'Suresh Menon', role: 'Chief Risk Officer', quote: 'They consistently deliver beyond expectations, providing deep market insights and ethical approaches for critical financial decisions.' },
  { name: 'Neha Kapoor', role: 'Head — Credit Operations', quote: 'Turnaround times on retail portfolios are the best we have worked with, without ever compromising on report quality.' },
  { name: 'Arvind Rao', role: 'CFO, Manufacturing Group', quote: 'Their plant and machinery team handled a complex IndAS impairment exercise with complete professionalism.' },
  { name: 'Kavita Sharma', role: 'GM — Recovery', quote: 'Distress valuations were defensible, well-documented, and stood up to every internal and external review.' },
  { name: 'Manoj Tiwari', role: 'Project Director', quote: 'Monitoring reports were always on time and caught cost deviations early enough for us to act.' },
];

export default function Testimonials() {
  return (
    <div className="flex w-full flex-col bg-slate-50">
      <PageHero
        eyebrow="Testimonials"
        title="What partners say after the report lands."
        description="Feedback from the lenders, developers, and plant heads who rely on our work."
      />

      <section className="border-b border-white/10 bg-slate-950 py-8">
        <Marquee items={clientNames} />
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>div]:mb-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className="break-inside-avoid rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-100" />
                </div>
                <p className="mb-6 leading-relaxed text-slate-700">"{t.quote}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm font-medium text-blue-600">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <Link
              to="/clients"
              className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
            >
              See our client sectors <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
