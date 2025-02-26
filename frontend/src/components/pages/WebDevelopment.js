import React, {useEffect} from 'react';
import '../../styles/pages/Services.css';
import Webhero from '../Webhero';
import SatisfiedClients from '../SatisfiedClients'

import Team from '../Team'
import Contact from '../ContactUs'
import FAQ from '../FAQ';
import WebFAQ from '../WebFAQ';
import Free from "../FreeApp/FreeApp"

function WebDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="service-page">
      <Webhero />
      <WebFAQ />
      <Free />
      <SatisfiedClients />
      <FAQ />
      <Contact />
      <Team />

    </div>
  );
}

export default WebDevelopment;