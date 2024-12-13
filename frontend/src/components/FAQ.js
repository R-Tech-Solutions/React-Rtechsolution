import React, { useState } from "react";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("app");
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const filterFAQ = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-16 px-8 lg:px-24">
      <h2 className="text-center text-2xl font-bold text-[#005880] mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {/* FAQ Category Bar */}
        <div className="bg-gray-100 p-2 rounded-xl shadow-lg mb-8">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <button
              className={`faq-tab ${activeCategory === "app" ? "active" : ""}`}
              onClick={() => filterFAQ("app")}
            >
              App Development
            </button>
            <button
              className={`faq-tab ${activeCategory === "web" ? "active" : ""}`}
              onClick={() => filterFAQ("web")}
            >
              Web Development
            </button>
            <button
              className={`faq-tab ${activeCategory === "pos" ? "active" : ""}`}
              onClick={() => filterFAQ("pos")}
            >
              POS System
            </button>
            <button
              className={`faq-tab ${activeCategory === "cctv" ? "active" : ""}`}
              onClick={() => filterFAQ("cctv")}
            >
              CCTV Installation
            </button>
            <button
              className={`faq-tab ${activeCategory === "network" ? "active" : ""}`}
              onClick={() => filterFAQ("network")}
            >
              Networking
            </button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {activeCategory === "app" && (
            <div>
              <FAQItem
                question="What is the process for developing a mobile app?"
                answer="Our app development process includes: Understanding your business needs and objectives, Creating a detailed project plan, Crafting user-friendly and visually appealing designs, Coding the app using the latest technologies, Ensuring the app is bug-free and performs well, Launching the app on app stores, Providing ongoing maintenance and updates."
                index={0}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
              <FAQItem
                question="How much does it cost to develop a mobile app?"
                answer="The cost of app development depends on various factors such as the app's complexity, features, and platform (iOS, Android, or both). We offer competitive pricing and can provide a detailed quote after understanding your specific requirements."
                index={1}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
              <FAQItem
                question="How long does it take to develop a mobile app?"
                answer="The development timeline varies based on the complexity and features of the app. On average, a custom mobile app can take anywhere from 3 to 6 months to develop. For a more accurate estimate, please contact us with your project details."
                index={2}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
                <FAQItem
                question="What platforms do you support for app development?"
                answer="Yes, we offer comprehensive maintenance and support services to keep your app updated, secure, and performing optimally. Our services include bug fixes, updates for new OS versions, and feature enhancements."
                index={2}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
                <FAQItem
                question="Can you develop apps for both iOS and Android?"
                answer="Yes, we specialize in developing apps for both iOS and Android platforms. We also offer cross-platform development services to create apps that work seamlessly on both platforms, saving time and costs."
                index={2}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
            </div>
          )}
          {/* Repeat similarly for other categories (web, pos, etc.) */}
          {activeCategory === "web" && (
            <div>
              <FAQItem
                question="What is the process for developing a mobile app?"
                answer="Our app development process includes: Understanding your business needs and objectives, Creating a detailed project plan, Crafting user-friendly and visually appealing designs, Coding the app using the latest technologies, Ensuring the app is bug-free and performs well, Launching the app on app stores, Providing ongoing maintenance and updates."
                index={0}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
              <FAQItem
                question="How much does it cost to develop a mobile app?"
                answer="The cost of app development depends on various factors such as the app's complexity, features, and platform (iOS, Android, or both). We offer competitive pricing and can provide a detailed quote after understanding your specific requirements."
                index={1}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
              <FAQItem
                question="How long does it take to develop a mobile app?"
                answer="The development timeline varies based on the complexity and features of the app. On average, a custom mobile app can take anywhere from 3 to 6 months to develop. For a more accurate estimate, please contact us with your project details."
                index={2}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
                <FAQItem
                question="What platforms do you support for app development?"
                answer="Yes, we offer comprehensive maintenance and support services to keep your app updated, secure, and performing optimally. Our services include bug fixes, updates for new OS versions, and feature enhancements."
                index={2}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
                <FAQItem
                question="Can you develop apps for both iOS and Android?"
                answer="Yes, we specialize in developing apps for both iOS and Android platforms. We also offer cross-platform development services to create apps that work seamlessly on both platforms, saving time and costs."
                index={2}
                activeFAQ={activeFAQ}
                toggleFAQ={toggleFAQ}
              /><br/>
            </div>          
        )}
            {activeCategory === "pos" && (
                <div>
                  <FAQItem
                    question="What is the process for developing a mobile app?"
                    answer="Our app development process includes: Understanding your business needs and objectives, Creating a detailed project plan, Crafting user-friendly and visually appealing designs, Coding the app using the latest technologies, Ensuring the app is bug-free and performs well, Launching the app on app stores, Providing ongoing maintenance and updates."
                    index={0}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                  <FAQItem
                    question="How much does it cost to develop a mobile app?"
                    answer="The cost of app development depends on various factors such as the app's complexity, features, and platform (iOS, Android, or both). We offer competitive pricing and can provide a detailed quote after understanding your specific requirements."
                    index={1}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                  <FAQItem
                    question="How long does it take to develop a mobile app?"
                    answer="The development timeline varies based on the complexity and features of the app. On average, a custom mobile app can take anywhere from 3 to 6 months to develop. For a more accurate estimate, please contact us with your project details."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                    <FAQItem
                    question="What platforms do you support for app development?"
                    answer="Yes, we offer comprehensive maintenance and support services to keep your app updated, secure, and performing optimally. Our services include bug fixes, updates for new OS versions, and feature enhancements."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                    <FAQItem
                    question="Can you develop apps for both iOS and Android?"
                    answer="Yes, we specialize in developing apps for both iOS and Android platforms. We also offer cross-platform development services to create apps that work seamlessly on both platforms, saving time and costs."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                </div>
          )}
          {activeCategory === "cctv" && (
                <div>
                  <FAQItem
                    question="What is the process for developing a mobile app?"
                    answer="Our app development process includes: Understanding your business needs and objectives, Creating a detailed project plan, Crafting user-friendly and visually appealing designs, Coding the app using the latest technologies, Ensuring the app is bug-free and performs well, Launching the app on app stores, Providing ongoing maintenance and updates."
                    index={0}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                  <FAQItem
                    question="How much does it cost to develop a mobile app?"
                    answer="The cost of app development depends on various factors such as the app's complexity, features, and platform (iOS, Android, or both). We offer competitive pricing and can provide a detailed quote after understanding your specific requirements."
                    index={1}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                  <FAQItem
                    question="How long does it take to develop a mobile app?"
                    answer="The development timeline varies based on the complexity and features of the app. On average, a custom mobile app can take anywhere from 3 to 6 months to develop. For a more accurate estimate, please contact us with your project details."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                    <FAQItem
                    question="What platforms do you support for app development?"
                    answer="Yes, we offer comprehensive maintenance and support services to keep your app updated, secure, and performing optimally. Our services include bug fixes, updates for new OS versions, and feature enhancements."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                    <FAQItem
                    question="Can you develop apps for both iOS and Android?"
                    answer="Yes, we specialize in developing apps for both iOS and Android platforms. We also offer cross-platform development services to create apps that work seamlessly on both platforms, saving time and costs."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                </div>
          )}
          {activeCategory === "network" && (
                <div>
                  <FAQItem
                    question="What is the process for developing a mobile app?"
                    answer="Our app development process includes: Understanding your business needs and objectives, Creating a detailed project plan, Crafting user-friendly and visually appealing designs, Coding the app using the latest technologies, Ensuring the app is bug-free and performs well, Launching the app on app stores, Providing ongoing maintenance and updates."
                    index={0}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                  <FAQItem
                    question="How much does it cost to develop a mobile app?"
                    answer="The cost of app development depends on various factors such as the app's complexity, features, and platform (iOS, Android, or both). We offer competitive pricing and can provide a detailed quote after understanding your specific requirements."
                    index={1}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                  <FAQItem
                    question="How long does it take to develop a mobile app?"
                    answer="The development timeline varies based on the complexity and features of the app. On average, a custom mobile app can take anywhere from 3 to 6 months to develop. For a more accurate estimate, please contact us with your project details."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                    <FAQItem
                    question="What platforms do you support for app development?"
                    answer="Yes, we offer comprehensive maintenance and support services to keep your app updated, secure, and performing optimally. Our services include bug fixes, updates for new OS versions, and feature enhancements."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                    <FAQItem
                    question="Can you develop apps for both iOS and Android?"
                    answer="Yes, we specialize in developing apps for both iOS and Android platforms. We also offer cross-platform development services to create apps that work seamlessly on both platforms, saving time and costs."
                    index={2}
                    activeFAQ={activeFAQ}
                    toggleFAQ={toggleFAQ}
                  /><br/>
                </div>
          )}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, index, activeFAQ, toggleFAQ }) => {
  return (
    <div className="bg-primary rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 text-left text-white"
        onClick={() => toggleFAQ(index)}
      >
        <span className="font-medium pr-8">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            activeFAQ === index ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      {activeFAQ === index && (
        <div className="p-4 bg-white">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
