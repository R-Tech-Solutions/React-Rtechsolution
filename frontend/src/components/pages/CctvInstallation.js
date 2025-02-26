import React, { useEffect } from 'react';
import '../../styles/pages/Services.css';
import CctvHero from '../CctvHero';
import SatisfiedClients from '../SatisfiedClients'
import CCTV from '../CCTV';
import Contact from '../ContactUs'
import FAQ from '../FAQ';
import Products from '../Products';
import Free from "../FreeApp/FreeApp"


function CctvInstallation() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (

    <div className="service-page">

        <CctvHero />
        <CCTV />
        <Free />
        <Products />
        <SatisfiedClients />
        <FAQ />

        <Contact />
    </div>
  );
}

export default CctvInstallation;