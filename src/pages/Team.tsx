import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, ShieldCheck, Users } from 'lucide-react';
import { Counter, PageHero, Reveal } from '../components/animated';
import { officeLocations } from '../data/offices';

const values = [
  { icon: ShieldCheck, title: 'Integrity first', text: 'Uncompromised confidentiality and independence on every assignment.' },
  { icon: Users, title: 'Team-based delivery', text: 'A seamless approach where senior review backs every field report.' },
  { icon: GraduationCap, title: 'Continuous learning', text: 'Regular training on standards, regulation, and methodology.' },
  { icon: Award, title: 'Pursuit of excellence', text: 'Delivering beyond expectations, engagement after engagement.' },
];

const suneetBio =
  'Building Formulaic has never been a solo journey; it is the result of a relentless collective effort. I take immense pride in having assembled a formidable team of over 800 professionals who are the true pillars of this organization. My vision was to create a culture where engineers, valuers, and architects collaborate seamlessly across 100+ offices nationwide. Today, this team is not just a workforce but a unified force of expertise and integrity, driving our success and ensuring that we deliver excellence in every corner of the country.';

const managementTeam = [
  {
    name: 'Mayank Kaushik',
    role: 'Director',
    credentials: 'B.Tech Civil, MBA (RICS), IBBI, MRICS',
    summary: 'Combining strategic leadership with global valuation standards to drive organizational excellence and compliance.',
    photo: '/team/management-02.png',
  },
  {
    name: 'Deepak Swain',
    role: 'Associate Director',
    credentials: 'M.Tech Civil, IOV',
    summary: 'Leveraging advanced technical expertise in civil engineering to ensure precision and reliability in every valuation.',
    photo: '/team/management-05.png',
  },
  {
    name: 'Mohit Mahajan',
    role: 'Vice President',
    credentials: 'B.Tech Civil, M.Val (Valuation), IOV',
    summary: 'A specialized expert in asset valuation, dedicated to delivering accurate market assessments through rigorous analysis.',
    photo: '/team/management-01.png',
  },
  {
    name: 'Zubeer Khan',
    role: 'Vice President',
    credentials: 'B.Tech Civil, MBA (RICS)',
    summary: 'Bridging the gap between core engineering fundamentals and strategic real estate management for optimal asset value.',
    photo: '/team/management-04.png',
  },
  {
    name: 'Junaid Kanth',
    role: 'Vice President',
    credentials: 'B.Tech Civil, M.Tech Civil, IIV, Chartered Engineer, MRICA, DJVF',
    summary: 'A Chartered Engineer bringing a comprehensive, multidisciplinary technical approach to complex project management.',
    photo: '/team/management-07.jpg',
  },
  {
    name: 'Sarthak Jain',
    role: 'Asst. Vice President',
    credentials: 'B.Tech Civil, MBA (RICS)',
    summary: 'Expert in real estate economics, ensuring data-driven insights and financial accuracy for complex valuation projects.',
    photo: '/team/management-03.png',
  },
  {
    name: 'Lalit Sharma',
    role: 'Asst. Vice President',
    credentials: 'B.Tech Civil, IOV',
    summary: 'Committed to upholding the highest standards of valuation integrity and professional practice in every engagement.',
    photo: '/team/management-09.png',
  },
  {
    name: 'Akash Sharma',
    role: 'Head Corporate',
    credentials: 'B.Tech Civil',
    summary: 'Spearheading corporate initiatives and client relations with a strong foundation in civil engineering principles.',
    photo: '/team/management-06.jpg',
  },
  {
    name: 'Aakash Sharma',
    role: 'Zonal Technical Manager',
    credentials: 'B.Tech Civil, MBA',
    summary: 'Driving technical efficiency and operational consistency to maintain high-quality standards across regional projects.',
    photo: '/team/management-08.jpg',
  },
];

function ManagementCard({
  member,
  index,
}: {
  member: (typeof managementTeam)[number];
  index: number;
  key?: string;
}) {
  return (
    <motion.div
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.035 }}
      whileHover={{ y: -8 }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={member.photo}
          alt={`${member.name}, ${member.role}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{member.role}</p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900">{member.name}</h3>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <p className="mb-3 text-sm font-semibold text-slate-500">{member.credentials}</p>
        <p className="text-sm leading-relaxed text-slate-600">{member.summary}</p>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const officeLocationCount = officeLocations.length;
  const mappedStatesCount = new Set(officeLocations.map((office) => office.state)).size;

  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="Our people"
        title="Led by specialists. Built by a national team."
        description="Meet the people behind Formulaic Engineers, from executive leadership to management and technical teams across India."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              [800, '+', 'Professionals'],
              [officeLocationCount, '', 'Office locations'],
              [mappedStatesCount, '', 'Mapped states'],
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

      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(34,197,94,0.08),transparent_28%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <motion.div
                className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-200"
                whileHover={{ y: -8, rotate: -1 }}
              >
                <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
                <img
                  src="/team/suneet-tyagi.jpg"
                  alt="Suneet Tyagi, Managing Director"
                  className="relative z-10 h-[520px] w-full rounded-[1.5rem] object-cover"
                />
              </motion.div>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Managing Director</span>
              <h2 className="mt-3 font-serif text-4xl font-bold text-slate-900 md:text-6xl">Suneet Tyagi</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">{suneetBio}</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ['800+', 'Professionals'],
                  ['100+', 'Offices nationwide'],
                  ['Unified', 'Expertise and integrity'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="font-serif text-3xl font-bold text-slate-900">{value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Management Team</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">The team driving execution.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Management team members are shown in the same hierarchy as the existing Formulaic Wix page, with their roles, qualifications, and leadership focus.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {managementTeam.map((member, index) => (
              <ManagementCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Technical Team</span>
            <h2 className="mt-3 font-serif text-3xl font-bold md:text-5xl">Field strength, technical depth.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Engineers, valuers, and technical professionals form the execution strength behind high-volume valuation and advisory delivery. Individual technical team photos will be added here as the final profiles are confirmed.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['Valuation specialists', 'Registered valuers, civil engineers, and market analysts supporting property and project valuation mandates.'],
              ['Inspection teams', 'Field professionals for geo-tagged evidence, construction progress checks, and lender-ready documentation.'],
              ['Quality reviewers', 'Senior technical reviewers who standardise methodology, compliance checks, and final report quality.'],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/20"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-white">{title}</h3>
                <p className="leading-relaxed text-slate-300">{text}</p>
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
