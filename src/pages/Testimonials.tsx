import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star } from 'lucide-react';
import { Marquee, PageHero, Reveal } from '../components/animated';
import { clientNames } from '../data/site';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';

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

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[660px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={18} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
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
