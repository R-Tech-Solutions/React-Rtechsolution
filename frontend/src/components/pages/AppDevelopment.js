import React, { useEffect } from 'react';
import '../../styles/pages/Services.css';
import SatisfiedClients from '../SatisfiedClients'
import Team from '../Team'
import Contact from '../ContactUs'
import FAQ from '../FAQ';
import AppHero from '../AppHero';
import AppFaq from '../AppFaq';
import Free from "../FreeApp/FreeApp"

function AppDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
     <AppHero/>
      <Free/>
     <AppFaq/>
      <SatisfiedClients/>
      <FAQ/>
      <Contact/>
      <Team/>
    </div>
  );
}

export default AppDevelopment;