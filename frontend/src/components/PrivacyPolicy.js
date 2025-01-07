import React from 'react';

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">Privacy Policy</h1>
      </header>
      <main className="space-y-12">
        {/* Information We Collect */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-lg text-gray-700 mb-4">We may collect the following types of information when you use our website:</p>
          <ul className="list-inside list-disc pl-6 space-y-2 text-gray-600">
            <li>Personal Information: Name, email address, phone number, billing address, shipping address, payment details, and other personal details you provide.</li>
            <li>NonPersonal Information: Information about your device, browsing history, IP address, location, and other technical details collected automatically through cookies and other tracking technologies.</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-lg text-gray-700 mb-4">We use the information we collect for various purposes, including:</p>
          <ul className="list-inside list-disc pl-6 space-y-2 text-gray-600">
            <li>Processing orders and delivering products or services.</li>
            <li>Communicating with you, including sending order confirmations, promotional emails, or customer service support.</li>
            <li>Improving the functionality and user experience of our website.</li>
            <li>Analyzing website traffic and behavior for marketing and promotional purposes.</li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h2>
          <p className="text-lg text-gray-700 mb-4">We do not sell, rent, or trade your personal information. However, we may share your information with third parties under the following circumstances:</p>
          <ul className="list-inside list-disc pl-6 space-y-2 text-gray-600">
            <li>Service Providers: We may share information with third-party companies that provide services such as payment processing, shipping, and customer support.</li>
            <li>Legal Requirements: We may disclose your information if required by law, court order, or governmental authority.</li>
            <li>Business Transfers: In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owner.</li>
          </ul>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-lg text-gray-700">We use cookies and similar tracking technologies to collect information about your use of our website. Cookies help us improve your browsing experience by remembering your preferences and actions on our site. You can manage your cookie settings through your browser, but please note that disabling cookies may affect the functionality of our website.</p>
        </section>

        {/* Data Security */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
          <p className="text-lg text-gray-700">We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.</p>
        </section>

        {/* Your Rights and Choices */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
          <p className="text-lg text-gray-700 mb-4">You have the following rights concerning your personal information:</p>
          <ul className="list-inside list-disc pl-6 space-y-2 text-gray-600">
            <li>Access: You can request to access the personal information we hold about you.</li>
            <li>Correction: You can request to update or correct any inaccurate or incomplete information.</li>
            <li>Deletion: You can request the deletion of your personal information, subject to applicable legal requirements.</li>
            <li>Opt-Out: You can opt-out of receiving promotional emails by following the unsubscribe instructions in the email or contacting us directly.</li>
          </ul>
          <p className="text-lg text-gray-700">To exercise any of these rights, please contact us at <span className="font-semibold text-blue-600">info@rtechsl.com</span>.</p>
        </section>

        {/* Third-Party Links */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
          <p className="text-lg text-gray-700">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
        </section>

        {/* Children's Privacy */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
          <p className="text-lg text-gray-700">Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete that information.</p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-lg text-gray-700">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. Please review this policy periodically to stay informed about how we are protecting your information.</p>
        </section>

        {/* Contact Us */}
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:</p>
          <ul className="list-inside list-disc pl-6 space-y-2 text-gray-600">
            <li>Email: <span className="font-semibold text-blue-600">info@rtechsl.com</span></li>
            <li>Address: <span className="font-semibold text-blue-600">262 peradeniya Road Kandy </span></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
