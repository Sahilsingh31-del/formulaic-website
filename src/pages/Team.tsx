import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, ShieldCheck, Users, X } from 'lucide-react';
import { PageHero, Reveal, StatValue } from '../components/animated';
import { officeLocations } from '../data/offices';

const values = [
  { icon: ShieldCheck, title: 'Integrity first', text: 'Uncompromised confidentiality and independence on every assignment.' },
  { icon: Users, title: 'Team-based delivery', text: 'A seamless approach where senior review backs every field report.' },
  { icon: GraduationCap, title: 'Continuous learning', text: 'Regular training on standards, regulation, and methodology.' },
  { icon: Award, title: 'Pursuit of excellence', text: 'Delivering beyond expectations, engagement after engagement.' },
];

const suneetBio =
  'Building Formulaic has never been a solo journey; it is the result of a relentless collective effort. I take immense pride in having assembled a formidable team of over 1500 professionals who are the true pillars of this organization. My vision was to create a culture where engineers, valuers, and architects collaborate seamlessly with a PAN India presence. Today, this team is not just a workforce but a unified force of expertise and integrity, driving our success and ensuring that we deliver excellence in every corner of the country.';

type FeaturedLeader = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  stats: [string, string][];
  imagePosition: 'left' | 'right';
  photoPosition?: string;
  photoHeight?: string;
  photoZoom?: number;
};

const featuredLeaders: FeaturedLeader[] = [
  {
    name: 'Suneet Tyagi',
    role: 'Managing Director',
    photo: '/team/suneet-tyagi.png',
    bio: suneetBio,
    stats: [
      ['1500+', 'Professionals'],
      ['PAN India', 'Presence'],
      ['Unified', 'Expertise and integrity'],
    ],
    imagePosition: 'left',
  },
];

const managementTeam = [
  {
    name: 'Satish Bogra',
    role: 'Director',
    credentials: 'B.Tech Civil, IBBI and Wealth Tax',
    summary: 'Providing strategic direction and governance across Formulaic\'s national valuation and advisory operations.',
    photo: '/team/satish-bogra.png',
    photoPosition: '50% 0%',
    photoHeight: '128%',
    photoZoom: 0.9,
  },
  {
    name: 'Mayank Kaushik',
    role: 'Director',
    credentials: 'B.Tech Civil, MBA (RICS), IBBI, MRICS',
    summary: 'Combining strategic leadership with global valuation standards to drive organizational excellence and compliance.',
    photo: '/team/management-02.png',
  },
  {
    name: 'Junaid Kanth',
    role: 'Chief Executive Officer',
    credentials: 'National leadership',
    summary: 'Aligning national teams, technology platforms, and quality frameworks to deliver with consistency, independence, and speed.',
    photo: '/team/junaid-kanth.png',
  },
  {
    name: 'Lalit Sharma',
    role: 'Associate Director',
    credentials: 'B.Tech Civil, IOV',
    summary: 'Committed to upholding the highest standards of valuation integrity and professional practice in every engagement.',
    photo: '/team/management-09.png',
  },
  {
    name: 'Zuber Khan',
    role: 'Associate Director',
    credentials: 'B.Tech Civil, MBA (RICS)',
    summary: 'Bridging the gap between core engineering fundamentals and strategic real estate management for optimal asset value.',
    photo: '/team/zuber-khan.jpg',
    photoPosition: '50% 12%',
  },
  {
    name: 'Sarthak Jain',
    role: 'Associate Director',
    credentials: 'B.Tech Civil, MBA (RICS)',
    summary: 'Expert in real estate economics, ensuring data-driven insights and financial accuracy for complex valuation projects.',
    photo: '/team/management-03.png',
  },
  {
    name: 'Mohit Mahajan',
    role: 'Senior Vice President',
    credentials: 'B.Tech Civil, M.Val (Valuation), IOV',
    summary: 'A specialized expert in asset valuation, dedicated to delivering accurate market assessments through rigorous analysis.',
    photo: '/team/management-01.png',
  },
  {
    name: 'Aakash Sharma',
    role: 'Head Corporate',
    credentials: 'B.Tech Civil',
    summary: 'Spearheading corporate initiatives and client relations with a strong foundation in civil engineering principles.',
    photo: '/team/management-06.jpg',
  },
  {
    name: 'Pankaj Tyagi',
    role: 'Head Business Development',
    credentials: 'Business development',
    summary: 'Driving client growth, lender partnerships, and business development across Punjab and surrounding markets.',
    photo: '/team/pankaj-tyagi.png',
    photoPosition: '50% 28%',
  },
];

const financeTeam = [
  {
    name: 'Prakash Kumar',
    role: 'Chief Finance Officer',
    credentials: 'Finance leadership',
    summary: 'Building robust controls, transparent reporting, and disciplined planning that support Formulaic\'s expansion across India while safeguarding trust.',
    photo: '/team/prakash.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
];

const legalTeam = [
  {
    name: 'Khushboo Monga',
    role: 'Legal Head',
    credentials: 'Legal operations',
    summary: 'Overseeing legal operations, compliance, and risk management for the organization to ensure smooth engagements.',
    photo: '/team/khushboo-monga.jpg',
    photoPosition: '50% 15%',
    photoHeight: '120%',
    photoZoom: 0.95,
  },
];

const humanResourceTeam = [
  {
    name: 'Khushboo',
    role: 'Human Resource',
    credentials: 'People operations',
    summary: 'Building and nurturing talent pipelines, culture, and people practices across Formulaic\'s nationwide teams.',
    photo: '/team/khushboo.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Devanshi',
    role: 'Human Resource',
    credentials: 'People operations',
    summary: 'Supporting recruitment, employee engagement, and HR operations across regional offices and field teams.',
    photo: '/team/devyanshi.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
];

const technicalManagement = [
  {
    name: 'Aakash',
    role: 'Agra',
    credentials: 'Regional leadership',
    summary: 'Driving technical efficiency and operational consistency to maintain high-quality standards across regional projects.',
    photo: '/team/management-08.jpg',
  },
  {
    name: 'Nishu',
    role: 'Jharkhand',
    credentials: 'Regional leadership',
    summary: 'Leading valuation and advisory delivery across Jharkhand with field coordination and client execution.',
    photo: '/team/nishu.png',
    photoPosition: '50% 0%',
    photoHeight: '128%',
    photoZoom: 0.9,
  },
  {
    name: 'Alam',
    role: 'Maharashtra',
    credentials: 'Regional leadership',
    summary: 'Driving statewide technical operations, branch coordination, and quality standards across Maharashtra.',
    photo: '/team/alam.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Rishabh',
    role: 'Kanpur',
    credentials: 'Regional leadership',
    summary: 'Managing Kanpur branch operations, lender mandates, and on-ground valuation execution in Uttar Pradesh.',
    photo: '/team/rishabh.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Azzruddin',
    role: 'Kolkata',
    credentials: 'State operations',
    summary: 'Heading Kolkata branch delivery with oversight of technical teams, inspections, and client reporting.',
    photo: '/team/azzruddin.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Sourav',
    role: 'Bihar',
    credentials: 'State operations',
    summary: 'Leading Bihar branch operations and RTM coordination for high-volume valuation and field reporting.',
    photo: '/team/sourav.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Rajdeep',
    role: 'Mumbai',
    credentials: 'Regional leadership',
    summary: 'Supporting Mumbai RTM operations with technical coordination, field oversight, and delivery quality.',
    photo: '/team/rajdeep-shukla.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Niranjana',
    role: 'Tamil Nadu',
    credentials: 'State operations',
    summary: 'Leading technical operations and branch coordination across Tamil Nadu with statewide delivery oversight.',
    photo: '/team/niranjana.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },

  {
    name: 'Saurabh',
    role: 'Lucknow',
    credentials: 'Regional technical management',
    summary: 'Supporting Lucknow branch operations with technical delivery, field coordination, and valuation execution.',
    photo: '/team/saurabh.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Bharath',
    role: 'Karnataka',
    credentials: 'State operations',
    summary: 'Leading Karnataka branch operations with oversight of technical teams, field delivery, and client reporting.',
    photo: '/team/bharath.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Deepak',
    role: 'Dehradun',
    credentials: 'Regional technical management',
    summary: 'Supporting Dehradun technical operations with field coordination, inspections, and on-ground valuation delivery.',
    photo: '/team/deepak-mittal.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Suraj',
    role: 'Delhi/NCR',
    credentials: 'State operations',
    summary: 'Leading Delhi and NCR branch operations with oversight of technical teams, field delivery, and client reporting.',
    photo: '/team/suraj-singh.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Anurag',
    role: 'Madhya Pradesh',
    credentials: 'Regional technical management',
    summary: 'Supporting Madhya Pradesh technical operations with field coordination, inspections, and valuation delivery.',
    photo: '/team/anurag.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Hussain',
    role: 'Telangana',
    credentials: 'State operations',
    summary: 'Heading Telangana branch delivery with oversight of technical teams, inspections, and client reporting.',
    photo: '/team/hussain.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Manjeet',
    role: 'Punjab',
    credentials: 'Regional technical management',
    summary: 'Leading Punjab operations with oversight of business growth, client delivery, and regional team performance.',
    photo: '/team/manjeet.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Ravi',
    role: 'Punjab',
    credentials: 'Regional technical management',
    summary: 'Supporting Punjab regional operations and corporate coordination across technical and field teams.',
    photo: '/team/ravi.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Ankit',
    role: 'Rajasthan',
    credentials: 'Regional technical management',
    summary: 'Managing Rajasthan RTM operations with field team coordination, quality control, and client reporting.',
    photo: '/team/ankit.png',
    photoPosition: '50% 0%',
    photoHeight: '125%',
    photoZoom: 0.9,
  },
  {
    name: 'Vikrant Sharma',
    role: 'Regional Head Business Development',
    credentials: 'Business development',
    summary: 'Leading regional business development, institutional lender partnerships, and client growth initiatives across key markets.',
    photo: '/team/vikrant-sharma.jpg',
    photoPosition: '50% 12%',
  },
];

type TeamMember = {
  name: string;
  role: string;
  credentials: string;
  summary: string;
  photo: string;
  photoPosition?: string;
  photoHeight?: string;
  photoZoom?: number;
};

function LeadershipSpotlight({
  leader,
  index,
}: {
  leader: FeaturedLeader;
  index: number;
  key?: string;
}) {
  const imageFirst = leader.imagePosition === 'left';

  const image = (
    <Reveal>
      <motion.div
        className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-200"
        whileHover={{ y: -8, rotate: imageFirst ? -1 : 1 }}
      >
        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
        <img
          src={leader.photo}
          alt={`${leader.name}, ${leader.role}`}
          className="relative z-10 h-[520px] w-full rounded-[1.5rem] object-cover"
          style={
            leader.photoPosition
              ? {
                  objectPosition: leader.photoPosition,
                  transform: leader.photoZoom ? `scale(${leader.photoZoom})` : undefined,
                  transformOrigin: leader.photoPosition,
                }
              : undefined
          }
          loading="lazy"
        />
      </motion.div>
    </Reveal>
  );

  const content = (
    <Reveal delay={0.1}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{leader.role}</span>
      <h2 className="mt-3 font-serif text-4xl font-bold text-slate-900 md:text-6xl">{leader.name}</h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-600">{leader.bio}</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {leader.stats.map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="break-words font-serif text-2xl font-bold leading-tight text-slate-900 md:text-3xl">{value}</div>
            <div className="mt-1 text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-slate-500">{label}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );

  return (
    <section className={`relative overflow-hidden py-24 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
      {index % 2 === 0 && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(127,29,29,0.08),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(220,38,38,0.08),transparent_28%)]" />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {imageFirst ? (
            <>
              {image}
              {content}
            </>
          ) : (
            <>
              {content}
              {image}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!member) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-slate-200 bg-white shadow-2xl p-6 sm:p-8 md:p-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 rounded-full p-2.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-8 items-start">
              {/* Photo */}
              <div className="relative mx-auto md:mx-0 w-full max-w-[240px] aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                <img
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  className="h-full w-full object-cover"
                  style={{
                    height: member.photoHeight ?? '100%',
                    objectPosition: member.photoPosition,
                    transform: member.photoZoom ? `scale(${member.photoZoom})` : undefined,
                    transformOrigin: member.photoPosition ?? 'center',
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col">
                {member.role ? (
                  <span className="self-start inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 border border-blue-100/60">
                    {member.role}
                  </span>
                ) : null}

                <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h3>

                {member.credentials ? (
                  <div className="mt-2.5 flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <Award className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>{member.credentials}</span>
                  </div>
                ) : null}

                <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">About &amp; Responsibilities</p>
                  <p className="text-base leading-relaxed text-slate-700 font-normal">
                    {member.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  <span>Formulaic Engineers Leadership &amp; Operations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ManagementCard({
  member,
  index,
  onSelect,
}: {
  member: TeamMember;
  index: number;
  onSelect: () => void;
  key?: string;
}) {
  return (
    <motion.div
      onClick={onSelect}
      className="group relative flex flex-col justify-between cursor-pointer overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.035 }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <div>
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            className="w-full object-cover transition duration-500 group-hover:scale-105"
            style={{
              height: member.photoHeight ?? '100%',
              objectPosition: member.photoPosition,
              transform: member.photoZoom ? `scale(${member.photoZoom})` : undefined,
              transformOrigin: member.photoPosition ?? 'center',
            }}
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow-md backdrop-blur-sm">
              View full details <ArrowRight className="h-3 w-3 text-blue-600" />
            </span>
          </div>
        </div>

        <div className="p-6 pb-2">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              {member.role ? (
                <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-700">
                  {member.role}
                </span>
              ) : null}
              <h3 className={`${member.role ? 'mt-2' : ''} font-serif text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600`}>
                {member.name}
              </h3>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {member.credentials ? (
            <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <Award className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
              <span className="truncate">{member.credentials}</span>
            </div>
          ) : null}

          <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
            {member.summary}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
          <span>Read profile</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const officeLocationCount = officeLocations.length;

  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        eyebrow="Our people"
        title="Led by specialists. Built by a national team."
        description="Meet the people behind Formulaic Engineers, from executive leadership to management and technical teams across India."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="border-b border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              [1500, '+', 'Professionals'],
              [officeLocationCount, '', 'Office locations'],
              ['PAN India', '', 'PAN India presence'],
              [9, '', 'Accreditations'],
            ].map(([value, suffix, label], index) => (
              <Reveal key={label as string} delay={index * 0.08}>
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text font-serif text-4xl font-bold text-transparent md:text-5xl">
                  <StatValue value={value as number | string} suffix={suffix as string} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-slate-500">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {featuredLeaders.map((leader, index) => (
        <LeadershipSpotlight key={leader.name} leader={leader} index={index} />
      ))}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Management Team</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">The team driving execution.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Senior leaders who drive strategy, quality, and delivery across Formulaic&apos;s valuation and advisory practice.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {managementTeam.map((member, index) => (
              <ManagementCard
                key={member.name}
                member={member}
                index={index}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Finance Team</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Financial stewardship.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Building robust controls, transparent reporting, and disciplined planning to support sustainable growth.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-4xl">
            {financeTeam.map((member, index) => (
              <ManagementCard
                key={member.name}
                member={member}
                index={index}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Legal Team</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Legal & Compliance.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Overseeing legal operations, compliance, and risk management across all our engagements.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-4xl">
            {legalTeam.map((member, index) => (
              <ManagementCard
                key={member.name}
                member={member}
                index={index}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Human Resource</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">People behind the people.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Our HR team builds culture, supports talent, and keeps Formulaic&apos;s nationwide workforce connected and growing.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-4xl">
            {humanResourceTeam.map((member, index) => (
              <ManagementCard
                key={member.name}
                member={member}
                index={index}
                onSelect={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Technical Team</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-5xl">Regional leaders on the ground.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Technical team members who lead execution, field teams, and client delivery across Formulaic&apos;s national network.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technicalManagement.map((member, index) => (
              <ManagementCard
                key={member.name}
                member={member}
                index={index}
                onSelect={() => setSelectedMember(member)}
              />
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
                className="rounded-3xl bg-gradient-to-br from-blue-700 to-blue-950 p-7 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.04 }}
              >
                <value.icon className="mb-5 h-8 w-8 text-blue-200" />
                <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-blue-100/90">{value.text}</p>
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

      {/* Profile Detail Modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
