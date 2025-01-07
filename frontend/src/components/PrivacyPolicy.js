import React, { useState } from 'react';

const privacyPolicySections = [
  {
    title: "Information We Collect",
    content: "We may collect the following types of information when you use our website: Personal Information: Name, email address, phone number, billing address, shipping address, payment details, and other personal details you provide. Non-Personal Information: Information about your device, browsing history, IP address, location, and other technical details collected automatically through cookies and other tracking technologies."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect for various purposes, including: Processing orders and delivering products or services. Communicating with you, including sending order confirmations, promotional emails, or customer service support. Improving the functionality and user experience of our website. Analyzing website traffic and behavior for marketing and promotional purposes."
  },
  {
    title: "Sharing Your Information",
    content: "We do not sell, rent, or trade your personal information. However, we may share your information with third parties under the following circumstances: Service Providers: We may share information with third-party companies that provide services such as payment processing, shipping, and customer support. Legal Requirements: We may disclose your information if required by law, court order, or governmental authority. Business Transfers: In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owner."
  },
  {
    title: "Cookies and Tracking Technologies",
    content: "We use cookies and similar tracking technologies to collect information about your use of our website. Cookies help us improve your browsing experience by remembering your preferences and actions on our site. You can manage your cookie settings through your browser, but please note that disabling cookies may affect the functionality of our website."
  },
  {
    title: "Data Security",
    content: "We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information."
  },
  {
    title: "Your Rights and Choices",
    content: "You have the following rights concerning your personal information: Access: You can request to access the personal information we hold about you. Correction: You can request to update or correct any inaccurate or incomplete information. Deletion: You can request the deletion of your personal information, subject to applicable legal requirements. Opt-Out: You can opt out of receiving promotional emails by following the unsubscribe instructions in the email or contacting us directly."
  },
  {
    title: "Third-Party Links",
    content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit."
  },
  {
    title: "Children's Privacy",
    content: "Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete that information."
  },
  {
    title: "Changes to This Privacy Policy",
    content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the 'Last Updated' date will be revised accordingly. Please review this policy periodically to stay informed about how we are protecting your information."
  },
  {
    title: "Contact Us",
    content: "If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us: Email: [Your Contact Email] Phone: [Your Contact Phone Number] Address: [Your Company Address]"
  }
];

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold text-center mb-12">Privacy Policy</h2>
      <p className="text-center text-xl mb-12">At Your Company Name, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {privacyPolicySections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105">
            <div
              className="cursor-pointer bg-blue-500 text-white p-4"
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              <h3 className="text-xl font-semibold">{section.title}</h3>
            </div>
            <div className={`p-4 transition-all duration-300 ${activeSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;

