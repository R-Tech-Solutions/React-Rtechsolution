import React from 'react';
import '../../styles/pages/Services.css';
import SatisfiedClients from '../SatisfiedClients'
import Team from '../Team'
import Contact from '../ContactUs'
import '../../styles/pages/Services.css';
import Poshero from '../Pos/Poshero';
import Poscontent from '../Pos/Poscontent';
import PosBlog from '../Pos/PosBlog';

function PosSystem() {
  return (
    <div className="service-page">
      <Poshero/>
      <br/>
      <PosBlog/>
      <br/>
      <Poscontent/>
      <br/> 
      <SatisfiedClients/>
      <br/>
      <Contact/>
      <br/>
      <Team/>
    </div>
  );
}

export default PosSystem;