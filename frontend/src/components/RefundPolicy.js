import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const sections = [
  {
    title: "Eligibility for Refund",
    content: [
      "You are eligible for a refund if the product is defective, damaged, or not as described.",
      "Refunds are available within [insert number of days] days of the purchase date.",
      "To qualify for a refund, the item must be returned in its original condition, including packaging and accessories (if applicable)."
    ]
  },
  {
    title: "Non-Refundable Items",
    content: [
      "Certain items are not eligible for a refund, including:",
      "Digital downloads",
      "Customized or personalized products",
      "Gift cards",
      "Opened or used products (unless defective)"
    ]
  },
  {
    title: "How to Request a Refund",
    content: [
      "To request a refund, please contact our customer service team at [contact details] with your order number, a description of the issue, and any supporting evidence (e.g., images of damaged items).",
      "Our team will review your request and provide instructions on how to proceed."
    ]
  },
  {
    title: "Processing Time",
    content: [
      "Refunds will be processed within [insert number of days] business days from the date your request is approved.",
      "Refunds will be issued to the original payment method used for the purchase."
    ]
  },
  {
    title: "Shipping Costs",
    content: [
      "In cases where the product is defective or not as described, shipping costs for the return will be covered by [Your Company Name].",
      "For non-defective items, customers are responsible for the return shipping costs."
    ]
  },
  {
    title: "Exchanges",
    content: [
      "If you would prefer an exchange rather than a refund, please contact our customer service team for assistance."
    ]
  },
  {
    title: "Contact Us",
    content: [
      "For any questions or concerns regarding our refund policy, please contact us at:",
      "Email: [Your Contact Email]",
      "Phone: [Your Contact Phone Number]"
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
            At [Your Company Name], we strive to ensure that our customers are satisfied with their purchases.
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
            Thank you for choosing [Your Company Name].
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
