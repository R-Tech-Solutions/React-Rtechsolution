import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const sections = [
  {
    title: "Eligibility for Refund",
    content: [
      "You are eligible for a refund if the software, application, or service provided is defective, not functioning as described, or fails to meet the agreed-upon requirements.",
      "Refunds are available within 7 days of purchase or project delivery date.",
      "To qualify for a refund, all source files, documentation, or access credentials provided by our team must not have been tampered with or misused."
    ]
  },
  {
    title: "Non-Refundable Items",
    content: [
      "Certain services and products are not eligible for a refund, including:",
      "Custom software solutions delivered and approved by the client.",
      "Ongoing maintenance or subscription-based services after the service period has started.",
      "Third-party integrations, licenses, or tools purchased as part of the project."
    ]
  },
  {
    title: "How to Request a Refund",
    content: [
      "To request a refund, please contact our customer service or support team at info@rtechsl.com with your project ID, a description of the issue, and any supporting evidence (e.g., error logs or screenshots).",
      "Our team will review your request and determine whether it meets our refund policy criteria. If approved, we will provide further instructions."
    ]
  },
  {
    title: "Processing Time",
    content: [
      "Refunds will be processed within 7-10 business days from the date your request is approved.",
      "Refunds will be issued to the original payment method used for the transaction."
    ]
  },
  {
    title: "Customization and Revisions",
    content: [
      "For custom software or applications, refunds will not be issued if the product was delivered as per the agreed-upon specifications.",
      "If revisions are required, we offer up to 02 rounds of revisions depending on the service agreement. Additional revisions may incur extra charges."
    ]
  },
  {
    title: "Support Services",
    content: [
      "Refunds are not applicable for support services rendered, including training, troubleshooting, or consultation.",
      "If there are unresolved issues with the software, our team will work to address them as part of the support agreement."
    ]
  },
  {
    title: "Contact Us",
    content: [
      "For any questions or concerns regarding our refund policy, please contact us at:",
      "Email: info@rtechsl.com",
    ]
  }
];

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          {content.map((item, index) => (
            <p key={index} className="mb-2">{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const RefundPolicy = () => {
  const [openSection, setOpenSection] = useState(0);

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setOpenSection(openSection === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 px-6 sm:px-10">
          <h1 className="text-3xl font-bold text-white">Refund Policy</h1>
          <p className="mt-2 text-blue-100">
            At R-Tech Solutions, we aim to ensure that our clients receive high-quality software and services.
          </p>
        </div>
        <div className="divide-y divide-gray-200">
          {sections.map((section, index) => (
            <AccordionItem
              key={index}
              title={section.title}
              content={section.content}
              isOpen={openSection === index}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
        <div className="bg-gray-50 py-6 px-6 sm:px-10">
          <p className="text-center text-gray-600">
            Thank you for choosing R-Tech Solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
