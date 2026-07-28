import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { Award, Building2, Quote, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal } from '../components/animated';
import { featuredClients, type FeaturedClient } from '../data/featuredClients';

function initials(name: string) {
  return name
    .replace(/\b(ltd|limited|pvt|private|finance|financial|bank|housing|company|co)\b/gi, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function ClientLogo({ name, logo }: { name: string; logo: FeaturedClient['logo'] }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 font-serif text-lg font-bold text-blue-700 shadow-inner">
        {initials(name)}
      </div>
    );
  }

  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white p-2.5 shadow-inner">
      <img
        src={logo.path}
        alt={`${name} logo`}
        className="max-h-12 max-w-12 object-contain"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function Clients() {
  const [query, setQuery] = useState('');

  const testimonials = [
    {
      name: 'Rajesh Verma',
      role: 'Zonal Manager',
      quote: 'Exceptional, detailed, and accurate retail lending valuation services. Their use of technology sets them apart in the industry.',
    },
    {
      name: 'Amit Singhania',
      role: 'Director, Real Estate Group',
      quote: 'Impressive technical expertise in cost monitoring, scheduling, and ensuring quality delivery for our commercial townships.',
    },
    {
      name: 'Priya Desai',
      role: 'VP-Business Development',
      quote: 'Their strategic advisory team provided thorough, data-driven feasibility studies that were instrumental in our market expansion.',
    },
  ];

  const filteredClients = useMemo(
    () => featuredClients.filter((client) => client.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="flex w-full flex-col overflow-hidden bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2070&auto=format&fit=crop"
            alt="Financial institutions"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/75" />
        </div>
        <motion.div
          className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles className="h-4 w-4" />
            Trusted financial partners
          </motion.span>
          <motion.h1
            className="mx-auto mb-6 max-w-4xl font-serif text-4xl font-bold text-slate-900 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Banks, NBFCs and housing finance partners.
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Empanelled with leading banks, NBFCs, and housing finance institutions across India. Below are some of our
            long-standing lending and financial partners.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              [featuredClients.length, 'Featured partners', Building2],
              [180, '+ active relationships', ShieldCheck],
              ['PAN India', 'Lending network', Sparkles],
            ].map(([value, label, Icon], index) => (
              <motion.div
                key={label as string}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Icon className="mb-4 h-7 w-7 text-blue-600" />
                <div className="font-serif text-3xl font-bold text-slate-900">{value}</div>
                <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search bank, NBFC, or housing finance company..."
                className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
              Showing {filteredClients.length} of {featuredClients.length}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Our partners</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                Featured institution logos
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-500">
              A curated selection of empanelled banks and housing finance partners we work with across retail lending,
              portfolio valuation, and advisory mandates.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (index % 16) * 0.015 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-4">
                  <ClientLogo name={client.name} logo={client.logo} />
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900">{client.name}</h3>
                    <p className="mt-1 truncate text-xs text-slate-400">{client.logo.domain}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
              No partners found for this search.
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-slate-900 md:text-4xl">Client Testimonials</h2>
            <p className="text-lg text-slate-600">Hear what our partners have to say about our services.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-blue-100" />
                <p className="relative z-10 mb-8 leading-relaxed text-slate-700">"{testimonial.quote}"</p>
                <div className="mt-auto border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-blue-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
