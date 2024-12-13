import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Stats.css';

function Stats() {
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="stats-section" ref={statsRef}>
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source
          src="https://videocdn.cdnpk.net/videos/618b9c11-6721-5a67-8f40-7db1788cfa28/horizontal/previews/clear/small.mp4?token=exp=1734062471~hmac=65c94e23753f1c4f3dbc9f4de1c30095f85d255a3a72acc7f3e02647a6d74355"
          type="video/mp4"
        />
      </video>

      <h2 className='sectionh2' color='white'>Trusted by Many, Proven Results</h2>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="stat-number">
            {inView && <CountUp start={0} end={12} duration={2.5} suffix="+" />}
          </div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-number">
            {inView && <CountUp start={0} end={100} duration={2.5} suffix="+" />}
          </div>
          <div className="stat-label">Satisfied Customers</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="stat-number">
            {inView && <CountUp start={0} end={10} duration={2.5} suffix="+" />}
          </div>
          <div className="stat-label">Google Web Apps Delivered</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="stat-number">
            {inView && <CountUp start={0} end={100} duration={2.5} suffix="+" />}
          </div>
          <div className="stat-label">5-Star Reviews</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
