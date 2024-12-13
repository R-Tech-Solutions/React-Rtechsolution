import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import '../styles/Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMap, setShowMap] = useState(false);

  const contactFormRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleReset = () => {
    setFirstName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if phone number is valid
    if (!phone || phone.length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number.',
      });
      return;
    }

    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait while we process your request.',
      allowOutsideClick: false,
      showConfirmButton: false,
      html: `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <img src="/images/loading.gif" alt="Loading..." style="width: 100px; height: 100px; margin-bottom: 10px;" />
          <p>Processing your request...</p>
        </div>
      `,
    });

    const formData = {
      firstName,
      contactNumber: phone,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Form submitted successfully!',
        }).then(() => {
          handleReset(); // Clear the form fields after success
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error Occurred',
        text: 'An error occurred. Please try again.',
      });
    }
  };

  const toggleMap = () => {
    setShowMap((prevState) => !prevState);
  };

  return (
    <section
      className="py-16 px-8 lg:px-24 text-[#005880] bg-white"
      style={{ boxShadow: '0 4px 6px rgb(0, 0, 0), 0 1px 3px rgb(4, 4, 4)' }}
    >
      <h2 className="text-center text-5xl font-bold mb-10">Contact Us</h2>
      <div className="max-w-4xl mx-auto">
        <form
          className="space-y-6 mb-8"
          id="contact-form"
          ref={contactFormRef}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg"
                style={{ color: 'whitesmoke', backgroundColor: '#005880' }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Contact Number</label>
              <PhoneInput
                international
                defaultCountry="LK"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#005880]"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg"
              style={{ color: 'whitesmoke', backgroundColor: '#005880' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="6"
              className="w-full px-4 py-3 rounded-lg"
              style={{ color: 'whitesmoke', backgroundColor: '#005880' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="gradient-btn clear-btn"
              onClick={handleReset}
            >
              Clear
            </button>
            <button type="submit" className="gradient-btn submit-btn">
              Submit
            </button>
            <button
              type="button"
              id="locate-btn"
              className="gradient-btn locate-btn"
              onClick={toggleMap}
            >
              Locate Us
            </button>
          </div>
        </form>

        {showMap && (
          <div
            id="map-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.3953180220852!2d80.6280255694476!3d7.288389229814359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3695e645b83af%3A0xa5d2d32338faae42!2sR-Tech%20Solutions!5e0!3m2!1sen!2slk!4v1732601237194!5m2!1sen!2slk"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Google Maps location of R-Tech Solutions"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;