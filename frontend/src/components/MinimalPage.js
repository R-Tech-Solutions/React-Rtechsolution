import React from 'react';
import brand from '../assets/images/brand.jpg'
const MinimalPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1a202c', // Dark background
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Replace this with your logo/image */}
        <img
          src={brand}
          alt="RTECH Logo"
          style={{ width: '100px', marginBottom: '20px' }}
        />
        <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
          Welcome to RTECH Solutions
        </h1>
      </div>
    </div>
  );
};

export default MinimalPage;
