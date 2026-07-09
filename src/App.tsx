import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Sectors from './pages/Sectors';
import SectorDetail from './pages/SectorDetail';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Process from './pages/Process';
import Insights from './pages/Insights';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Network from './pages/Network';
import Offices from './pages/Offices';
import Technology from './pages/Technology';
import Accreditations from './pages/Accreditations';
import FAQ from './pages/FAQ';
import CaseStudies from './pages/CaseStudies';
import Testimonials from './pages/Testimonials';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="careers" element={<Careers />} />
          <Route path="network" element={<Network />} />
          <Route path="offices" element={<Offices />} />
          <Route path="technology" element={<Technology />} />
          <Route path="accreditations" element={<Accreditations />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="sectors/:slug" element={<SectorDetail />} />
          <Route path="process" element={<Process />} />
          <Route path="clients" element={<Clients />} />
          <Route path="insights" element={<Insights />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
