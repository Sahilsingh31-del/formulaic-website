import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Clients() {
  const testimonials = [
    {
      name: "Rajesh Verma",
      role: "Zonal Manager",
      quote: "Exceptional, detailed, and accurate retail lending valuation services. Their use of technology sets them apart in the industry."
    },
    {
      name: "Amit Singhania",
      role: "Director, Real Estate Group",
      quote: "Impressive technical expertise in cost monitoring, scheduling, and ensuring quality delivery for our commercial townships."
    },
    {
      name: "Priya Desai",
      role: "VP-Business Development",
      quote: "Their strategic advisory team provided thorough, data-driven feasibility studies that were instrumental in our market expansion."
    },
    {
      name: "Vikram Sodhi",
      role: "Plant Head",
      quote: "Meticulous attention to detail and professional integrity during our industrial plant risk inspections. Highly recommended."
    },
    {
      name: "Suresh Menon",
      role: "Chief Risk Officer",
      quote: "They consistently deliver beyond expectations, providing deep market insights and ethical approaches for critical financial decisions."
    }
  ];

  const clients = [
    "IDBI Bank", "HDFC", "Capri Global", "Piramal", 
    "Aadhar Housing Finance", "AU Small Finance Bank", 
    "RBL Bank", "Tata Capital", "Axis Bank", "LIC Housing Finance"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:30px_30px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Clients & Sectors
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our expertise is trusted by diverse sectors, including Public & Private Sector Banks, NBFCs & Housing Finance Companies, and Corporate Developers.
          </motion.p>
        </div>
      </section>

      {/* Prominent Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Trusted by 180+ Leading Entities</h2>
            <p className="text-slate-600">Including over 80 specific banking and corporate partners.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-sm text-slate-800 font-medium text-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-center min-w-[200px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {client}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-500 italic">...and many more across the nation.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-slate-600 text-lg">Hear what our partners have to say about our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
                <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto border-t border-slate-100 pt-4">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
