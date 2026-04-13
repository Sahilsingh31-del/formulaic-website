import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Briefcase, LineChart, ShieldCheck, Award, Users, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6">
                Best Valuation Agency in India
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Expert Judgment.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Advanced Technology.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Formulaic Engineers is a premier consultancy institution specializing in Valuations, Advisory, Project Management, and Strategic Consultancy services nationwide.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center group">
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-blue-400/50 text-center">
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">₹8L+ Cr</div>
              <div className="text-blue-200 font-medium tracking-wide uppercase text-sm">Supported Funding</div>
            </motion.div>
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">180+</div>
              <div className="text-blue-200 font-medium tracking-wide uppercase text-sm">Leading Banks & NBFCs</div>
            </motion.div>
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">800+</div>
              <div className="text-blue-200 font-medium tracking-wide uppercase text-sm">Dedicated Professionals</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Comprehensive Services</h2>
            <p className="text-slate-600 text-lg">Delivering superior value through a rigorous focus on professional talent and technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Valuation Services', desc: 'Expert valuation for real estate, commercial assets, and large development projects.' },
              { icon: Briefcase, title: 'Project Management', desc: 'End-to-end consultancy from pre-construction planning to move-in stage support.' },
              { icon: ShieldCheck, title: 'Project Inspections', desc: 'Rigorous checks for raw materials, finished products, and plant machinery.' },
              { icon: LineChart, title: 'Strategic Consultancy', desc: 'Data-driven feasibility studies, market research, and portfolio optimization.' },
              { icon: Users, title: 'Transaction Advisory', desc: 'Comprehensive support for M&A, due diligence, and capital raising.' },
              { icon: Globe, title: 'Plant & Machinery', desc: 'Specialized valuation of complex industrial assets and heavy machinery.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group p-8 border border-slate-200 rounded-sm hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50 hover:bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center text-sm group-hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Formulaic Advantage */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">The Formulaic Advantage</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are positioned as a partner in growth, empowering professionals with technology to deliver expert judgment and meet evolving needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Professional Advantage</h4>
                    <p className="text-slate-600 mt-1">Empowering professionals with technology to deliver expert judgment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Focus on Innovation</h4>
                    <p className="text-slate-600 mt-1">Applying best practices and technology to meet evolving needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Commitment to Technology</h4>
                    <p className="text-slate-600 mt-1">Strategic tie-up with New Zealand-based Velocity for seamless communication and global standard reporting.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cyan-600/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-6 shadow-xl rounded-sm z-20 hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <Award className="w-10 h-10 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100+</div>
                    <div className="text-sm text-slate-500 font-medium">Offices PAN India</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:30px_30px]"></div>
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to partner with the best?</h2>
          <p className="text-slate-300 text-lg mb-10">
            Get in touch with our experts to discuss how we can add value to your next project.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-medium transition-colors shadow-lg shadow-blue-600/30">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
