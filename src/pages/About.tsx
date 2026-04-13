import { motion } from 'motion/react';
import { Target, Compass, Award, CheckCircle2, Map } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Driven by core values of integrity, teamwork, and the pursuit of excellence.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div 
              className="bg-slate-50 p-10 rounded-sm border border-slate-100 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <Compass className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be a respectable consultancy company at the forefront of the industry, delivering beyond expectations by combining integrity with innovation. We aim to set the standard for excellence and create lasting value and trust for stakeholders nationwide through strategic advice and technical expertise.
              </p>
            </motion.div>

            <motion.div 
              className="bg-slate-50 p-10 rounded-sm border border-slate-100 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <Target className="w-12 h-12 text-cyan-600 mb-6" />
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be a leader in providing high-quality management and consultancy services. We are committed to producing superior value through a rigorous focus on professional talent and technology, using a seamless team-based approach to meet the highest standards of quality and efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Reach */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Infrastructure & Reach</h2>
            <p className="text-slate-300 text-lg">A robust PAN India presence with modernized facilities and automated platforms.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-slate-800/50 p-8 rounded-sm border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Map className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Geographic Reach</h3>
              <p className="text-slate-400 mb-4">
                Network of over 100 offices covering all parts of cities efficiently through strategic satellite offices.
              </p>
              <div className="text-sm text-slate-500">
                <strong className="text-slate-300 block mb-2">State Presence:</strong>
                Maharashtra, New Delhi & NCR, Jharkand & Chattisgarh, Andhra Pradesh & Telengana, Gujarat, Bihar, Uttar Pradesh, West Bengal, Punjab, Haryana, Uttarakhand, Rajasthan, Odisha, Karnataka, Madhya Pradesh, Tamil Nadu, and Himachal Pradesh.
              </div>
            </motion.div>

            <motion.div 
              className="bg-slate-800/50 p-8 rounded-sm border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technology</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <span>Fully automated working platform with modernized facilities.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <span>Interconnected high-speed LAN for data transfer and shared electronic libraries.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <span>Field engineers equipped with specialized handheld devices for real-time, secure updates.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-slate-800/50 p-8 rounded-sm border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Award className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Professional Standards</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <span>Teams include registered senior Valuers ensuring statutory compliance.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <span>Internal protocols for uncompromised confidentiality.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <span>Experienced technical heads who have served at top management levels.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Accreditations & Registrations</h2>
            <p className="text-slate-600 text-lg">Formulaic Engineers holds several prestigious professional accreditations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Insolvency and Bankruptcy Board of India (IBBI)', desc: 'Authorized for insolvency and bankruptcy valuations.' },
              { title: 'Income Tax Department of India', desc: 'Registered valuers for fair market value assessments.' },
              { title: 'Member of the Royal Institute of Chartered Surveyors (MRICS)', desc: 'Committed to international standards and global best practices.' },
              { title: 'Engineers Council of India', desc: 'Validates technical competence and engineering solutions.' },
              { title: 'Institute of Valuers', desc: 'Ensures alignment with the latest methodologies.' },
              { title: 'Indian Institute of Valuers', desc: 'Connects the firm to a vast professional network.' },
              { title: 'RVO Estate Managers & Appraisers Foundation', desc: 'Certified to undertake specific asset class valuations.' },
              { title: 'Council of Engineers & Valuers (CEV)', desc: 'Enables the delivery of technically sound techno-commercial reports.' },
              { title: 'Divya Jyoti Foundation', desc: 'Reflects a commitment to professional development and ethical values.' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 border border-slate-200 rounded-sm hover:border-blue-300 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
