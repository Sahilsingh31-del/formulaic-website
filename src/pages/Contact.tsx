import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Building, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reach out to our experts for valuations, advisory, and consultancy services.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-sm flex items-center justify-center shrink-0 mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-xl font-medium text-slate-900">+91 8800723676</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-sm flex items-center justify-center shrink-0 mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-xl font-medium text-slate-900">valuations@formulaic.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-sm flex items-center justify-center shrink-0 mr-6">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Website</h4>
                    <p className="text-xl font-medium text-slate-900">www.formulaic.in</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Our Offices</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm">
                  <div className="flex items-center mb-3">
                    <Building className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-bold text-slate-900">Corporate Office</h4>
                  </div>
                  <p className="text-slate-600 flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0 text-slate-400" />
                    5th Floor, Joy Tower, C-20, S1/1A, Coast Guard Golf Ground Rd, C Block, Phase 2, Industrial Area, Sector 62, Noida - 201309.
                  </p>
                </div>

                <div className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm">
                  <div className="flex items-center mb-3">
                    <Building className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-bold text-slate-900">Head Office</h4>
                  </div>
                  <p className="text-slate-600 flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0 text-slate-400" />
                    C-1, Vibhuti Khand, Gomti Nagar, Near Urdu Academy, Lucknow - 226010.
                  </p>
                </div>

                <div className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm">
                  <div className="flex items-center mb-3">
                    <Building className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-bold text-slate-900">Registered Office</h4>
                  </div>
                  <p className="text-slate-600 flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0 text-slate-400" />
                    M-51, Ram Krishna Apartment, Patparganj, New Delhi - 110092.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 md:p-10 border border-slate-200 rounded-sm shadow-xl shadow-slate-200/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-white"
                  >
                    <option>Valuation Services</option>
                    <option>Project Management</option>
                    <option>Strategic Consultancy</option>
                    <option>Transaction Advisory</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-sm transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
