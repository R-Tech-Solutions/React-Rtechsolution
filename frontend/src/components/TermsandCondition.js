import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Brand from '../assets/images/brand.jpg'
import Logo from '../assets/images/logo.jpg'
const AdvancedTermsAndConditionsForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    acceptedTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.acceptedTerms) newErrors.acceptedTerms = 'You must accept the terms and conditions';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({ email: '', name: '', company: '', acceptedTerms: false });
        setShowSuccess(false);
      }, 5000);
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  useEffect(() => {
    // Automatically expand the first section
    setExpandedSections(prev => ({ ...prev, '1': true }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <img
              src={Brand}
              alt="R-tech Solutions Logo"
              className="mx-auto h-24"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <img
              src={Logo}
              alt="Additional Logo"
              className="mx-auto h-12"
            />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 mb-6 text-center"
          >Terms and Conditions
          </motion.h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {[
                { id: '1', title: 'Services Offered', content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>App Development: Customized mobile and web applications</li>
                    <li>Web Development: Design and development of responsive websites</li>

                  </ul>
                )},
                { id: '2', title: 'Acceptance of Terms', content: (
                  <p>By using our services, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services.</p>
                )},
                { id: '3', title: 'Client Responsibilities', content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide clear requirements and access to relevant resources for project completion</li>
                    <li>Respond to communications promptly to avoid project delays</li>
                    <li>Ensure legal compliance of content and data shared with R-tech Solutions</li>
                  </ul>
                )},
                { id: '4', title: 'Payment Terms', content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Payments for services must be made as per the agreed schedule in the project contract or invoice</li>
                    <li>Any overdue payments may incur late fees</li>
                    <li>R-tech Solutions reserves the right to halt services for nonpayment</li>
                  </ul>
                )},
                { id: '5', title: 'Project Timelines', content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Project timelines will be outlined in a separate agreement or proposal</li>
                    <li>Any delays caused by the client, such as late feedback or resource unavailability, may extend the timeline</li>
                  </ul>
                )},
                { id: '6', title: 'Confidentiality', content: (
                  <p>R-tech Solutions agrees to maintain the confidentiality of sensitive information shared by the client and use it solely for the purpose of the agreed services.</p>
                )},
                { id: '7', title: 'Intellectual Property', content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Upon full payment, all deliverables become the intellectual property of the client unless otherwise specified in the contract</li>
                    <li>R-tech Solutions retains the right to showcase completed projects in portfolios or case studies unless explicitly prohibited</li>
                  </ul>
                )},
                { id: '8', title: 'Warranty and Support', content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>A limited warranty of 30 days applies to completed projects for bug fixes and minor updates</li>
                    <li>Additional maintenance and support can be provided under a separate agreement</li>
                  </ul>
                )},
                { id: '9', title: 'Liability', content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>R-tech Solutions will not be liable for any indirect, incidental, or consequential damages arising from the use of our services</li>
                    <li>Our total liability is limited to the amount paid for the specific service in question</li>
                  </ul>
                )},
                { id: '10', title: 'Cancellations and Refunds', content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Service cancellation requests must be submitted in writing</li>
                    <li>Refunds will be issued based on the stage of project completion and costs incurred</li>
                  </ul>
                )},
                { id: '11', title: 'Third-Party Services', content: (
                  <p>Some services may involve third-party tools or platforms. R-tech Solutions is not responsible for the performance or issues arising from these third-party services.</p>
                )},
                { id: '12', title: 'Governing Law', content: (
                  <p>These terms are governed by the laws of Sri Lanka. Any disputes will be resolved in the courts of Sri Lanka.</p>
                )},
                { id: '13', title: 'Changes to Terms', content: (
                  <p>R-tech Solutions reserves the right to modify these Terms and Conditions at any time. Changes will be communicated via our website or email.</p>
                )},
                { id: '14', title: 'Contact Us', content: (
                  <div>
                    <p>For any questions or concerns regarding these terms, please contact us at:</p>
                    <p>Email: info@rtechsl.com</p>
                  </div>
                )},
              ].map(section => (
                <Section
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  content={section.content}
                  isExpanded={expandedSections[section.id]}
                  onToggle={() => toggleSection(section.id)}
                />
              ))}
            </div>
            
          </form>
          
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
              >
              </motion.div>
            )}
          </AnimatePresence>
          
          
        </div>
      </div>
    </div>
  );
};

const Section = ({ id, title, content, isExpanded, onToggle }) => (
  <div className="border-b border-gray-200 pb-4">
    <button
      onClick={onToggle}
      className="flex justify-between items-center w-full text-left focus:outline-none"
    >
      <h3 className="text-lg font-medium text-gray-900">{id}. {title}</h3>
      {isExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
    </button>
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-sm text-gray-600 overflow-hidden"
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default AdvancedTermsAndConditionsForm;

