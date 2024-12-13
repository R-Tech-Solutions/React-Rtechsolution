import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Stats.css";
import Back from '../assets/videos/Background1.mp4';

const Stats = () => {
  const [inView, setInView] = useState(false);

  const stats = [
    { number: 12, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Satisfied Customers", suffix: "+" },
    { number: 10, label: "Google Web Apps Delivered", suffix: "+" },
    { number: 100, label: "5-Star Reviews", suffix: "+" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.75;

      if (sectionTop < triggerPoint) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="stats-section" className="stats-section">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={Back} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Stats Content */}
      <div className="stats-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="stats-title"
        >
          Trusted by Many, Proven Results
        </motion.h2>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              className="stat-item"
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="stat-number">
                {inView && (
                  <Counter end={stat.number} suffix={stat.suffix} />
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default Stats;
