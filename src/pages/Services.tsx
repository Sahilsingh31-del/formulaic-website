import { motion } from 'motion/react';
import { Building2, Briefcase, ShieldCheck, LineChart, Users, Globe, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "valuation",
      icon: Building2,
      title: "1. Valuation Services",
      items: [
        "Vacant land and built-up properties.",
        "Residential, commercial, hospitality, retail, and mixed-use assets.",
        "Large development projects (townships, IT/Industrial/SEZs).",
        "Special-use assets like golf resorts and health spas."
      ]
    },
    {
      id: "pmc",
      icon: Briefcase,
      title: "2. Project Management Consultancy",
      items: [
        "Pre-construction design and planning.",
        "Estimation, tendering, and costing.",
        "Cash/fund flow preparation and cost monitoring.",
        "Project planning and scheduling (PERT/CPM).",
        "Construction monitoring and move-in stage support."
      ]
    },
    {
      id: "inspections",
      icon: ShieldCheck,
      title: "3. Project Inspections (LEI)",
      items: [
        "Raw material and finished product checks.",
        "Plant and machinery inspections.",
        "Household goods, real estate, container, and project inspections."
      ]
    },
    {
      id: "risk",
      icon: Wrench,
      title: "4. Industrial & Risk Inspection",
      items: [
        "Fire and safety audits.",
        "Machine breakdown and risk assessments.",
        "Erection and coating inspections.",
        "Raw material and finished product checks."
      ]
    },
    {
      id: "strategic",
      icon: LineChart,
      title: "5. Strategic Consultancy",
      items: [
        "Feasibility studies, concept testing, business planning, and investment advice.",
        "Market research, demand forecasting, and location strategy.",
        "Portfolio optimization and asset utilization.",
        "Techno-economic feasibility studies, alongside economic, marketing, legal, and technical viability assessments."
      ]
    },
    {
      id: "transaction",
      icon: Users,
      title: "6. Transaction Advisory",
      items: [
        "Mergers & Acquisitions (Buy-side & Sell-side), Joint Ventures, and Strategic Alliances.",
        "Comprehensive Due Diligence (Financial, Tax, Commercial & Legal).",
        "Capital Raising (Private Equity, Debt Syndication & Structured Finance).",
        "Corporate Restructuring, Divestments, Turnaround Strategies, and Insolvency Advisory.",
        "Deal Structuring, Negotiation Support, and Post-Merger Integration."
      ]
    },
    {
      id: "plant",
      icon: Globe,
      title: "7. Plant & Machinery",
      items: [
        "Valuation of complex industrial assets, heavy machinery, and specialized equipment.",
        "Valuations for Mergers & Acquisitions, Financial Reporting (IndAS/IFRS), and Insolvency (IBC).",
        "Technical Due Diligence, Techno-Economic Viability (TEV) studies, and Chartered Engineer (CE) Certifications.",
        "Assessment of Remaining Useful Life, Impairment Testing, Scrap/Salvage Valuation.",
        "Fixed Asset Management, Physical Verification, Componentization, and Asset Tagging."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive Services
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Delivering expert judgment and superior value across a wide spectrum of consultancy services.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 opacity-10">
                      <service.icon className="w-48 h-48" />
                    </div>
                    <service.icon className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
                    <h2 className="text-2xl md:text-3xl font-serif font-bold relative z-10">{service.title}</h2>
                  </div>
                  <div className="md:w-2/3 p-8 md:p-12">
                    <ul className="space-y-4">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1.5 mr-4">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          </div>
                          <span className="text-slate-700 text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
