import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import AppDevelopment from './components/pages/AppDevelopment';
import WebDevelopment from './components/pages/WebDevelopment';
import PosSystem from './components/pages/PosSystem';
import CctvInstallation from './components/pages/CctvInstallation';
import Networking from './components/pages/Networking';
import './styles/App.css';
import Testimonials from './components/Testimonials';
import SatisfiedClients from './components/SatisfiedClients';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Team from './components/Team';
import Footer from './components/Footer';
import Getstarted from './components/Getstarted';
import OurProcess from './components/OurProcess';
import TechnologyWeUse from './components/TechnologyWeUse';
import ServiceBarWithDetailedCards from './components/ServiceBarWithDetailedCards';
import Portfolio from './components/Portfolio';
import TestimonialForm from './components/admin/TestimonialForm';
import Adminapp from './Adminapp';
import Blog from './components/Blog';
import Carears from './components/Carears';
import Login from './components/Login';
import CareerJoinUs from './components/Careerjoinus';
import FloatingButtons from './components/Floating-buttons'; 
import ContactWithus from './components/ContactWithus';
import RefundPolicy from './components/RefundPolicy';
import ReturnsPolicy from './components/ReturnsPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsandConditions from './components/TermsandCondition';
import { AuthProvider, ProtectedRoute } from "./AuthContext";
import FreeApp from "./components/FreeApp/FreeApp"
import FreeAppClickeed from "./components/FreeApp/FreeAppClicked";              
const NotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

function App() {
  const location = useLocation();

  // Check if the current path is '/Adminapp' or the "Page Not Found" route
  const isAdminRoute = location.pathname === '/Adminapp';
  const isNotFoundRoute = location.pathname === '*';

  // Block access to any context path that starts with '/admin'

  const shouldShowHeaderAndFooter = !isAdminRoute && !isNotFoundRoute;

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="app">
      {/* Conditionally render Header */}
      {shouldShowHeaderAndFooter && <Header />}
      
      <div className="page-content">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FreeApp />
              <Services />
              <Stats />
              <OurProcess />
              <Testimonials />
              <TechnologyWeUse />
              <SatisfiedClients />
              <FAQ />
              <CareerJoinUs />
              <ContactUs />
              <Team />
            </>
          } />
          
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/pos-system" element={<PosSystem />} />
          <Route path="/services/cctv-installation" element={<CctvInstallation />} />
          <Route path="/services/networking" element={<Networking />} />
          <Route path="/services/getstarted" element={<Getstarted />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Pricing" element={<ServiceBarWithDetailedCards />} />
          <Route path="/Getstarted" element={<Getstarted />} />
          <Route path="/TestimonialForm" element={<TestimonialForm />} />
          <Route path="/Adminapp" element={<ProtectedRoute><Adminapp /></ProtectedRoute>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Carears" element={<Carears />} />
          <Route path="/ContactWithus" element={< ContactWithus />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} /> 
          <Route path="/ReturnsPolicy" element={<ReturnsPolicy />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsandConditions" element={<TermsandConditions />} />
          <Route path="/downloads" element={<FreeAppClickeed />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
      {/* Conditionally render Footer */}
      {shouldShowHeaderAndFooter && <Footer />}
      
      <FloatingButtons />
    </div>
  );
}

export default function Root() {
  return (
    <AuthProvider>
    <Router>
      <App />
    </Router>
    </AuthProvider>
  );
}
