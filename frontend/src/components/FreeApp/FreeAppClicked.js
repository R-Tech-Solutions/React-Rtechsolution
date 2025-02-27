import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaMobileAlt, FaCode, FaRocket } from 'react-icons/fa';
import '../ServiceHero.css';
import Hero from "../../assets/videos/Welcome to.mp4";
import { backEndURL } from "../../Backendurl";

function AppLanding() {
    const [apps, setApps] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch the apps data from backend API
        const fetchApps = async () => {
            try {
                const response = await fetch(`${backEndURL}/api/app`);
                const data = await response.json();
                setApps(data);  // Store the fetched apps data
            } catch (error) {
                console.error("Error fetching apps:", error);
            }
        };

        fetchApps();
    }, []);

    const handleDownloadClick = (link) => {
        // Open the app link when "Download Now" isclicked
        window.open(link, "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Featured Apps */}
            <section className="py-16 px-4" id="apps">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold text-center mb-12">Featured Free Apps</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {apps.map((app, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={app.image || "/placeholder.svg?height=200&width=400"}
                                    alt={app.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-2">{app.title}</h4>
                                    <p className="text-gray-600 mb-4">{app.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-green-500 font-semibold">Free</span>
                                        <button
                                            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                                            onClick={() => handleDownloadClick(app.link)}  // Open the app link
                                        >
                                            Download Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <ServiceHero />
            </section>
        </div>
    );
}

const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-20, 0, -20],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

const ServiceHero = () => {
    const navigate = useNavigate(); // Declare navigate for routing

    const handleButtonClick = () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling animation
        });
        // Navigate to the "/Getstarted" page
        navigate('/Getstarted');
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                {/* Text Section */}
                <div className="hero-text">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Transform Your Ideas Into
                        <span className="gradient-text"> Digital Reality</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We craft exceptional mobile experiences through innovative app
                        development, bringing your vision to life with cutting-edge
                        technology.
                    </motion.p>

                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        onClick={handleButtonClick}
                    >
                        Start Your Project
                    </motion.button>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                    <motion.div
                        className="app-showcase"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="phone-frame">
                            <div className="phone-screen">
                                <video autoPlay loop muted className="phone-video">
                                    <source src={Hero} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Section */}
            <div className="hero-background">
                <div className="gradient-blob"></div>
                <div className="gradient-blob-2"></div>
            </div>
        </div>
    );
};

export default AppLanding;
export { ServiceHero };

