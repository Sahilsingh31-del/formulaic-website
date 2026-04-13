import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Top Bar */}
      <div className="hidden md:flex bg-slate-900 text-slate-300 text-xs py-2 px-6 justify-between items-center z-50 relative">
        <div className="flex space-x-6">
          <span className="flex items-center"><Phone className="w-3 h-3 mr-2" /> +91 8800723676</span>
          <span className="flex items-center"><Mail className="w-3 h-3 mr-2" /> valuations@formulaic.in</span>
        </div>
        <div className="flex space-x-4">
          <span>ISO 9001:2015 Certified</span>
          <span>Best Valuation Agency in India</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 border-b border-transparent',
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-slate-200 py-3' : 'bg-white py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm group-hover:bg-blue-700 transition-colors">
              FE
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-tight text-slate-900">Formulaic Engineers</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Private Limited</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600 relative py-2',
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-base font-medium py-2 border-b border-slate-100',
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-serif font-bold text-lg rounded-sm">
                FE
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight text-white">Formulaic Engineers</span>
              </div>
            </Link>
            <p className="text-sm mb-6 leading-relaxed">
              A premier consultancy institution in India specializing in Valuations, Advisory, Project Management, and Consultancy services.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Our Services</Link></li>
              <li><Link to="/clients" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Clients & Sectors</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Valuation Services</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Project Management</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Strategic Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" /> Transaction Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-blue-500 shrink-0" />
                <span>5th Floor, Joy Tower, C-20, Sector 62, Noida - 201309</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-500 shrink-0" />
                <span>+91 8800723676</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-500 shrink-0" />
                <span>valuations@formulaic.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Formulaic Engineers Private Limited. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
