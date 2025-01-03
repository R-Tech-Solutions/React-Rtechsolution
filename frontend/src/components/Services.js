import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import App from '../assets/images/app-dev.png';
import Web from '../assets/images/web-dev.png';
import Pos from '../assets/images/pos.png';
import Cctv from '../assets/images/cctv.png';
import Net from '../assets/images/network.png';

function Services() {
  return (
    <div className="services-section">
      <div className="services-grid">
        <Link
          to="/services/app-development"
          className="service-card"
          style={{
            display: 'block',
            textAlign: 'center',
            height: '300px', // Set a fixed height for the card
          }}
        >
          <img
            src={App}
            alt="App Development"
            className="imageApp"
            style={{
              width: '100%',
              height: '80%', // Adjust image height to fit the card proportionally
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <h3>App Development</h3>
        </Link>

        <Link
          to="/services/web-development"
          className="service-card"
          style={{
            display: 'block',
            textAlign: 'center',
            height: '300px', // Set a fixed height for the card
          }}
        >
          <img
            src={Web}
            alt="Web Development"
            className="imageApp"
            style={{
              width: '100%',
              height: '80%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <h3>Web Development</h3>
        </Link>

        <Link
          to="/services/pos-system"
          className="service-card"
          style={{
            display: 'block',
            textAlign: 'center',
            height: '300px', // Set a fixed height for the card
          }}
        >
          <img
            src={Pos}
            alt="POS System"
            className="imageApp"
            style={{
              width: '100%',
              height: '80%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <h3>POS System Development</h3>
        </Link>

        <Link
          to="/services/cctv-installation"
          className="service-card"
          style={{
            display: 'block',
            textAlign: 'center',
            height: '300px', // Set a fixed height for the card
          }}
        >
          <img
            src={Cctv}
            alt="CCTV Installation"
            className="imageApp"
            style={{
              width: '100%',
              height: '80%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <h3>CCTV Installation</h3>
        </Link>

        <Link
          to="/services/networking"
          className="service-card"
          style={{
            display: 'block',
            textAlign: 'center',
            height: '300px', // Set a fixed height for the card
          }}
        >
          <img
            src={Net}
            alt="Networking"
            className="imageApp"
            style={{
              width: '100%',
              height: '80%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <h3>Networking</h3>
        </Link>
      </div>
    </div>
  );
}

export default Services;
