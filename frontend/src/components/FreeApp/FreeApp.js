import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";


function AppLanding() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-auto relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto text-center">
          {/* Main Heading */}
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-primary via-purple-600 to-primary text-transparent bg-clip-text">
              Download Premium Apps
            </h2>
            {/* FREE Text Highlight */}
            <div className="flex items-center justify-center gap-3 text-3xl md:text-5xl font-bold mt-2">
              <span>For</span>
              <span className="relative inline-block">
                <span
                  className="text-primary italic px-4 py-1 rounded-lg"
                  style={{
                    outline: "2px dashed rgba(var(--primary-rgb), 0.5)",
                    animation: "pulse 2s infinite",
                  }}
                >
                  FREE
                </span>
                <span className="absolute -top-4 -right-6 text-primary animate-pulse">  ✨</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Access hundreds of  applications without spending a dime.
            <span className="block mt-2 font-medium text-primary">
              No hidden fees, no subscriptions - just free downloads.
            </span>
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { title: "100% Free", desc: "No credit card required" },
              { title: "Premium Apps", desc: "High-quality applications" },
              { title: "Safe & Secure", desc: "Verified downloads" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 6px -1px rgba(var(--primary-rgb), 0.1)",
                }}
              >
                <h3 className="font-bold text-lg text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <button
              onClick={() => navigate("/downloads")}
              className="group relative bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-200"
              style={{
                boxShadow: "0 4px 6px -1px rgba(var(--primary-rgb), 0.2)",
              }}
            >
              Browse Apps
              <span className="absolute inset-x-0 -bottom-0.5 mx-auto w-2/3 h-1.5 bg-white/20 blur-sm rounded-full" />
            </button>
            <button
              onClick={() => navigate("/services/app-development")}
              className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-full font-semibold border-2 border-primary transform hover:scale-105 transition-all duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default AppLanding;
