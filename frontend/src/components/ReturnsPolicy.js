import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const sections = [
  {
    title: "Eligibility for Returns",
    content: [
      "You may return items within 07 days from the date of purchase.",
      "The product must be unused, in its original condition, and with all tags and packaging intact (if applicable).",
      "To initiate a return, please contact our customer service team at info@rtechsl.com with your order number and the reason for the return."
    ]
  },
  {
    title: "Non-Returnable Items",
    content: [
      "Certain items are not eligible for returns, including:",
      "Digital downloads",
      "Customized or personalized products",
      "Opened or used products (unless defective)",
      "Gift cards"
    ]
  },
  {
    title: "How to Return an Item",
    content: [
      "To return an item, please contact our customer service team, and they will guide you through the process.",
      "Returns must be sent to the address provided by our customer service team.",
      "Customers are responsible for the return shipping costs unless the return is due to a defect, damage, or an error on our part."
    ]
  },
  {
    title: "Refunds",
    content: [
      "Once the returned item is received and inspected, we will notify you of the status of your return.",
      "If approved, a refund will be issued to the original payment method. Please allow 07 business days for the refund to be processed.",
      "In some cases, we may offer a store credit instead of a refund."
    ]
  },
  {
    title: "Exchanges",
    content: [
      "If you'd prefer to exchange an item for a different size, color, or product, please contact our customer service team to arrange the exchange.",
      "Exchanges are subject to product availability."
    ]
  },
  {
    title: "Damaged or Defective Items",
    content: [
      "If you received a damaged or defective product, please contact us within 07 days of receiving the item for a return or exchange.",
      "We may ask for images of the damage or defect to help us process your return."
    ]
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions or need assistance with returns, please contact us:",
      "Email: info@rtechsl.com ",

    ]
  }
];

const AccordionItem = ({ title, content, isOpen, toggleAccordion, index }) => {
  return (
    <div className="border-b border-gray-200 overflow-hidden transition-all duration-300 ease-in-out">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`section-${index}`}
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-indigo-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-indigo-500" />
        )}
      </button>
      <div
        id={`section-${index}`}
        className={`px-6 bg-gray-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        {content.map((item, idx) => (
          <p key={idx} className="mb-2 text-gray-700">{item}</p>
        ))}
      </div>
    </div>
  );
};

const ReturnsPolicy = () => {
  const [openSection, setOpenSection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleAccordion = (index) => {
    setOpenSection(openSection === index ? -1 : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length);
  };

    useEffect(() => {
      // Scroll to top when the component is mounted
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8 px-6 sm:px-10">
            <h1 className="text-4xl font-bold text-white mb-2">Returns Policy</h1>
            <p className="text-indigo-100">
              At R-Tech Solutions, we want you to be completely satisfied with your purchase.
            </p>
          </div>
          
          <div className="p-6 bg-gray-50">
            <div className="relative h-48 mb-8 overflow-hidden rounded-lg shadow-md">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{section.title}</h2>
                    <p className="text-gray-600">{section.content[0]}</p>
                  </div>
                </div>
              ))}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ArrowLeftIcon className="w-6 h-6 text-indigo-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition-colors duration-200"
                aria-label="Next slide"
              >
                <ArrowRightIcon className="w-6 h-6 text-indigo-600" />
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {sections.map((section, index) => (
              <AccordionItem
                key={index}
                title={section.title}
                content={section.content}
                isOpen={openSection === index}
                toggleAccordion={() => toggleAccordion(index)}
                index={index}
              />
            ))}
          </div>
          
          <div className="bg-gray-50 py-6 px-6 sm:px-10">
            <p className="text-center text-gray-600">
              Thank you for choosing R-Tech Solutions. We appreciate your business!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPolicy;

