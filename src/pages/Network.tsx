import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, MapPin } from 'lucide-react';
import { Counter, PageHero, Reveal } from '../components/animated';

const states = [
  'Maharashtra', 'New Delhi & NCR', 'Uttar Pradesh', 'Gujarat', 'Karnataka', 'Tamil Nadu',
  'West Bengal', 'Rajasthan', 'Madhya Pradesh', 'Punjab', 'Haryana', 'Bihar',
  'Jharkhand', 'Chhattisgarh', 'Andhra Pradesh', 'Telangana', 'Odisha', 'Uttarakhand', 'Himachal Pradesh',
];

const offices = [
  { name: 'Corporate Office', city: 'Noida', address: '5th Floor, Joy Tower, C-20, Sector 62, Noida - 201309' },
  { name: 'Head Office', city: 'Lucknow', address: 'C-1, Vibhuti Khand, Gomti Nagar, Near Urdu Academy, Lucknow - 226010' },
  { name: 'Registered Office', city: 'New Delhi', address: 'M-51, Ram Krishna Apartment, Patparganj, New Delhi - 110092' },
];

export default function Network() {
  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="PAN India network"
        title="100+ offices. 17+ states. One standard."
        description="Strategic satellite offices cover all parts of major cities efficiently, connected by high-speed networks and shared digital platforms."
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044&auto=format&fit=crop"
      />

      <section className="bg-blue-600 py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              [100, '+', 'Offices'],
              [17, '+', 'States'],
              [800, '+', 'Professionals'],
              [30, '+', 'Major cities'],
            ].map(([value, suffix, label], index) => (
              <Reveal key={label as string} delay={index * 0.08}>
                <div className="font-serif text-4xl font-bold md:text-5xl">
                  <Counter to={value as number} suffix={suffix as string} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-blue-200">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Key offices</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Where to find us</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Building className="h-6 w-6" />
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{office.name}</p>
                <h3 className="mb-4 font-serif text-2xl font-bold text-slate-900">{office.city}</h3>
                <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  {office.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">State presence</span>
            <h2 className="mt-3 font-serif text-3xl font-bold md:text-5xl">Active across India</h2>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3">
            {states.map((state, index) => (
              <motion.span
                key={state}
                className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.08, backgroundColor: 'rgba(37,99,235,0.25)' }}
              >
                {state}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Need coverage in your city?</h2>
            <p className="mb-8 text-lg text-slate-600">Our satellite office model means we can mobilise quickly, almost anywhere.</p>
            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
            >
              Check availability <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
