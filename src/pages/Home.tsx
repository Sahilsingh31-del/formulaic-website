import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { type MouseEvent } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  LineChart,
  MousePointer2,
  Sparkles,
} from 'lucide-react';
import { Counter, Marquee, Reveal, TiltCard } from '../components/animated';
import { clientNames, sectors, services } from '../data/site';

const headline = ['Valuation,', 'advisory', 'and', 'project', 'intelligence.'];

export default function Home() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const glowX = useSpring(useTransform(mx, [0, 1], [-40, 40]), { stiffness: 60, damping: 20 });
  const glowY = useSpring(useTransform(my, [0, 1], [-30, 30]), { stiffness: 60, damping: 20 });

  const onHeroMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const processSteps = [
    { icon: MousePointer2, label: 'Request', text: 'Share asset, location, and purpose.' },
    { icon: ClipboardCheck, label: 'Inspect', text: 'Technical experts capture evidence.' },
    { icon: BarChart3, label: 'Analyze', text: 'Market, risk, and compliance review.' },
    { icon: FileText, label: 'Report', text: 'Clear, lender-ready deliverables.' },
  ];

  return (
    <div className="flex w-full flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white" onMouseMove={onHeroMouseMove}>
        <div className="absolute inset-0 z-0 opacity-35">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern architecture"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.45),transparent_34%),linear-gradient(110deg,#020617_0%,rgba(15,23,42,0.96)_46%,rgba(15,23,42,0.55)_100%)]" />
        </div>

        {/* Cursor-following glow */}
        <motion.div
          className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl"
          style={{ x: glowX, y: glowY }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-10 right-12 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ scale: [1, 1.18, 0.95, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating grid dots */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[length:36px_36px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-100 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  Best Valuation Agency in India
                </span>
              </motion.div>

              <h1 className="mb-7 font-serif text-5xl font-bold leading-[0.95] md:text-6xl lg:text-7xl">
                {headline.map((word, i) => (
                  <motion.span
                    key={word}
                    className={
                      i === 0
                        ? 'mr-4 inline-block'
                        : 'mr-4 inline-block bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent'
                    }
                    initial={{ opacity: 0, y: 30, rotateX: 45 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Formulaic Engineers combines expert judgment, field intelligence, and technology-led reporting for lenders,
                developers, corporates, and public institutions across India.
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <Link
                  to="/contact"
                  className="group flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40"
                >
                  Start a Valuation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/process"
                  className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  See Our Process
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <TiltCard className="relative">
                <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-blue-200">Live command center</p>
                        <h3 className="mt-1 font-serif text-2xl font-bold">Asset Intelligence</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
                        <LineChart className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mb-5 grid grid-cols-2 gap-4">
                      {[
                        [800000, '+ Cr', 'Funding supported (Rs)'],
                        [180, '+', 'Banking partners'],
                        [100, '+', 'Offices'],
                        [800, '+', 'Professionals'],
                      ].map(([value, suffix, label], index) => (
                        <motion.div
                          key={label as string}
                          className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                          whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.12)' }}
                          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        >
                          <div className="font-serif text-2xl font-bold">
                            <Counter to={value as number} suffix={suffix as string} />
                          </div>
                          <div className="mt-1 text-xs text-slate-400">{label}</div>
                          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                              initial={{ width: 0 }}
                              animate={{ width: `${72 + index * 6}%` }}
                              transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-5">
                      <div className="flex items-start gap-4">
                        <Award className="h-8 w-8 shrink-0" />
                        <div>
                          <h4 className="font-bold">ISO 9001:2015 certified delivery</h4>
                          <p className="mt-1 text-sm text-blue-50">
                            Structured inspections, transparent reporting, and specialist review for high-stakes decisions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>

        {/* Client marquee */}
        <div className="relative z-10 border-t border-white/10 py-6">
          <Marquee items={clientNames} />
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {['ISO Certified', 'IBBI Registered', 'PAN India Presence', 'Technology Enabled'].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">What we do</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                Services built for critical decisions
              </h2>
            </Reveal>
            <Link to="/services" className="group inline-flex items-center font-semibold text-blue-600">
              View all services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.slug}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-400/0 transition-colors group-hover:from-blue-600/5 group-hover:to-cyan-400/10" />
                <div className="relative z-10">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mb-7 leading-relaxed text-slate-600">{service.tagline}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700"
                  >
                    Explore service <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process preview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Interactive workflow</span>
            <h2 className="mb-5 mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
              From request to defensible report
            </h2>
            <p className="text-lg text-slate-600">
              A clear operating model helps every stakeholder know what is happening, who owns it, and what comes next.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.label}
                className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="relative z-10">
                  <div className="mb-8 text-sm text-blue-200">0{index + 1}</div>
                  <step.icon className="mb-5 h-9 w-9 text-cyan-300" />
                  <h3 className="mb-3 font-serif text-2xl font-bold">{step.label}</h3>
                  <p className="text-slate-300">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link to="/process" className="group inline-flex items-center font-semibold text-blue-600">
              See the full process <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Sectors */}
      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.16),transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Who trusts us</span>
              <h2 className="mb-6 mt-3 font-serif text-3xl font-bold md:text-5xl">
                Specialists for every asset class and stakeholder
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                From retail lending portfolios to large townships and industrial plants, our teams bring domain knowledge
                and consistent reporting discipline.
              </p>
              <Link to="/sectors" className="group inline-flex items-center rounded-full bg-white px-7 py-3 font-semibold text-slate-950">
                Explore all sectors <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.slug}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
                >
                  <Link
                    to={`/sectors/${sector.slug}`}
                    className="block h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-colors hover:bg-white/[0.11]"
                  >
                    <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/20">
                      <sector.icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <h3 className="text-lg font-bold">{sector.title}</h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Why Formulaic</span>
              <h2 className="mb-6 mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                A stronger way to make asset decisions
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                We are positioned as a partner in growth, empowering professionals with technology to deliver expert
                judgment and meet evolving needs.
              </p>

              <div className="space-y-6">
                {[
                  ['Professional Advantage', 'Empowering professionals with technology to deliver expert judgment.'],
                  ['Focus on Innovation', 'Applying best practices and technology to meet evolving needs.'],
                  ['Commitment to Technology', 'Strategic platforms for seamless communication and global standard reporting.'],
                ].map(([title, text]) => (
                  <div key={title} className="flex items-start">
                    <div className="mt-1 flex-shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
                      <p className="mt-1 text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="relative z-10 aspect-square overflow-hidden rounded-[2rem] shadow-2xl md:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
                  alt="Team working"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -right-6 -top-6 z-0 h-32 w-32 rounded-full bg-blue-600/10 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 z-0 h-48 w-48 rounded-full bg-cyan-600/10 blur-2xl" />
              <motion.div
                className="absolute -right-8 top-1/2 z-20 hidden -translate-y-1/2 transform rounded-3xl border border-slate-100 bg-white p-6 shadow-xl md:block"
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center space-x-4">
                  <Award className="h-10 w-10 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      <Counter to={100} suffix="+" />
                    </div>
                    <div className="text-sm font-medium text-slate-500">Offices PAN India</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-center text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:30px_30px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-5xl">
              Ready to make your next asset decision with confidence?
            </h2>
            <p className="mb-10 text-lg text-slate-300">
              Get in touch with our experts to discuss how we can add value to your next project.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
