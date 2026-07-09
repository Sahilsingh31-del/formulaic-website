import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, ChevronRight, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { services, sectors } from '../data/site';
import { brandAssets } from '../data/brandAssets';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavChild {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  {
    name: 'Company',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Our Network', path: '/network' },
      { name: 'Office Locations', path: '/offices' },
      { name: 'Technology', path: '/technology' },
      { name: 'Accreditations', path: '/accreditations' },
      { name: 'Careers', path: '/careers' },
    ],
  },
  {
    name: 'Services',
    children: [
      { name: 'All Services', path: '/services' },
      ...services.map((s) => ({ name: s.title, path: `/services/${s.slug}` })),
    ],
  },
  {
    name: 'Sectors',
    children: [
      { name: 'All Sectors', path: '/sectors' },
      ...sectors.map((s) => ({ name: s.title, path: `/sectors/${s.slug}` })),
    ],
  },
  {
    name: 'Resources',
    children: [
      { name: 'Our Process', path: '/process' },
      { name: 'Insights', path: '/insights' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'FAQ', path: '/faq' },
    ],
  },
  { name: 'Clients', path: '/clients' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isGroupActive = (item: NavItem) =>
    item.children?.some((c) => location.pathname === c.path || location.pathname.startsWith(`${c.path}/`)) ?? false;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"
        style={{ scaleX: progress }}
      />

      {/* Main Navigation */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full border-b border-transparent transition-all duration-300',
          isScrolled ? 'border-slate-200 bg-white/90 py-3 shadow-sm backdrop-blur-md' : 'bg-white py-5'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="group flex items-center space-x-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1 shadow-sm ring-1 ring-slate-200 transition-transform group-hover:scale-105">
              <img src={brandAssets.logoMark} alt="Formulaic Engineers logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-tight text-slate-900">Formulaic Engineers</span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Private Limited</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-blue-600',
                      isGroupActive(item) ? 'text-blue-600' : 'text-slate-600'
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn('h-3.5 w-3.5 transition-transform', openDropdown === item.name && 'rotate-180')}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        className="absolute left-0 top-full pt-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                      >
                        <div className="min-w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={cn(
                                'flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700',
                                location.pathname === child.path ? 'bg-blue-50 text-blue-700' : 'text-slate-600'
                              )}
                            >
                              {child.name}
                              <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={cn(
                    'relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-blue-600',
                    location.pathname === item.path ? 'text-blue-600' : 'text-slate-600'
                  )}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-x-4 bottom-0 h-0.5 bg-blue-600"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="ml-2 whitespace-nowrap rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="p-2 text-slate-600 lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sticky top-[64px] z-30 max-h-[70vh] overflow-y-auto border-b border-slate-200 bg-white lg:hidden"
          >
            <div className="flex flex-col space-y-1 px-6 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name} className="border-b border-slate-100">
                    <button
                      className="flex w-full items-center justify-between py-3 text-base font-medium text-slate-700"
                      onClick={() => setOpenMobileGroup(openMobileGroup === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn('h-4 w-4 transition-transform', openMobileGroup === item.name && 'rotate-180')}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openMobileGroup === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-1 pb-3 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={cn(
                                  'block py-2 text-sm font-medium',
                                  location.pathname === child.path ? 'text-blue-600' : 'text-slate-500'
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path!}
                    className={cn(
                      'border-b border-slate-100 py-3 text-base font-medium',
                      location.pathname === item.path ? 'text-blue-600' : 'text-slate-700'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="mt-3 rounded-full bg-blue-600 py-3 text-center text-sm font-semibold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex flex-grow flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-grow flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-16 text-slate-400">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1 shadow-sm">
                <img src={brandAssets.logoMark} alt="Formulaic Engineers logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-serif text-lg font-bold leading-tight text-white">Formulaic Engineers</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              A premier consultancy institution in India specializing in Valuations, Advisory, Project Management, and
              Consultancy services.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                ['About Us', '/about'],
                ['Our Team', '/team'],
                ['Our Network', '/network'],
                ['Office Locations', '/offices'],
                ['Technology', '/technology'],
                ['Accreditations', '/accreditations'],
                ['Careers', '/careers'],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link to={path} className="flex items-center transition-colors hover:text-blue-400">
                    <ChevronRight className="mr-2 h-3 w-3" /> {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="flex items-center transition-colors hover:text-blue-400">
                    <ChevronRight className="mr-2 h-3 w-3" /> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-3 text-sm">
              {[
                ['Our Process', '/process'],
                ['Insights', '/insights'],
                ['Case Studies', '/case-studies'],
                ['Testimonials', '/testimonials'],
                ['FAQ', '/faq'],
                ['Sectors', '/sectors'],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link to={path} className="flex items-center transition-colors hover:text-blue-400">
                    <ChevronRight className="mr-2 h-3 w-3" /> {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>5th Floor, Joy Tower, C-20, Sector 62, Noida - 201309</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4 shrink-0 text-blue-500" />
                <span>+91 8800723676</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-4 w-4 shrink-0 text-blue-500" />
                <span>valuations@formulaic.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between border-t border-slate-800 px-6 pt-8 text-xs text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Formulaic Engineers Private Limited. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
