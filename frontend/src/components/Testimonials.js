import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import Marquee from "react-fast-marquee"; // For smooth sliding effect
import { FaSuitcase } from "react-icons/fa"; // For the suitcase icon
import { FaUser } from "react-icons/fa"; // For the person icon
import '../styles/Testimonials.css'; // Import custom styles
import { backEndURL } from "../Backendurl";


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isHovered, setIsHovered] = useState(false);


  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${backEndURL}/api/testimonials`);
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };


  useEffect(() => {
    fetchTestimonials();
  }, []);


  const handleHover = (status) => {
    setIsHovered(status);
  };


  const shouldPauseMarquee = testimonials.length <= 3 || isHovered;


  return (
    <section
      className="testimonials-section"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >


      <div className="header">
        <h2 className="title">What Our Clients Say</h2>
      </div>
      {/* Sliding Testimonials */}
      <Marquee
        gradient={false}
        speed={50}
        className={`marquee ${shouldPauseMarquee ? "paused" : ""}`}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            {/* Header Section */}
            <div className="card-header">
              <StarRatings
                rating={testimonial.rating}
                starRatedColor="#FFD700" // Gold color
                starHoverColor="#FFC107" // Shine effect
                starDimension="30px"
                starSpacing="5px"
                numberOfStars={5}
                name={`rating-${index}`}
              />
            </div>

            {/* Body Section */}
            <div className="card-body">
              <p className="testimonial-message">"{testimonial.message}"</p>
            </div>

            {/* Footer Section */}
            <div className="card-footer">
              <div className="footer-content">
                {/* Image on the left */}
                <div className="client-image-container">
                  <img 
                    src={testimonial.image ? `${testimonial.image}` : 'images/default-avatar.png'} 
                    alt={testimonial.name} 
                    className="client-logo"
                  />
                </div>
                {/* Name, Role, and Icons on the right */}
                <div className="name-position-container">
                  <div className="name-position">
                    <div className="icon-container">
                      <FaUser className="icon person-icon" />
                      <h3 className="client-name">{testimonial.name}</h3>
                    </div>
                    <div className="icon-container">
                      <FaSuitcase className="icon suitcase-icon" />
                      <p className="client-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;

