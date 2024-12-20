import React from 'react';
import logo from '../assets/images/brand.jpg'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-12 grid grid-cols-2 gap-16 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* Logo Section */}
            <div className="col-span-2">
              <div className="text-teal-100">
                <div className="logo-container">
                  <br />
                  <img
                    src={logo}
                    alt="Company Logo"
              className="company-logo"
              style={{width: '90px' , height: '90px' }}
                  />
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="gap-12 lg:col-span-3 lg:flex lg:items-end">
              <p className="company-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada. Sed in urna et eros bibendum auctor ac a justo. Integer
                posuere elit et nisi vehicula, vel dictum magna scelerisque.
              </p>
            </div>

            {/* Services Section */}
            <FooterSection
              title="Services"
              links={[
                { href: '#', text: 'App Development' },
                { href: '#', text: 'Web Development' },
                { href: '#', text: 'POS Solution' },
                { href: '#', text: 'CCTV Installation' },
                { href: '#', text: 'Networking' },
              ]}
            />

            {/* Company Section */}
            <FooterSection
              title="Company"
              links={[
                { href: '#', text: 'About' },
                { href: '#', text: 'Meet the Team' },
                { href: '#', text: 'Refund Policy' },
              ]}
            />

            {/* Helpful Links */}
            <FooterSection
              title="Helpful Links"
              links={[
                { href: '#', text: 'Contact' },
                { href: '#', text: 'FAQs' },
              ]}
            />

            {/* Legal Section */}
            <FooterSection
              title="Legal"
              links={[
                { href: '#', text: 'Accessibility' },
                { href: '#', text: 'Returns Policy' },
                { href: '#', text: 'Refund Policy' },
                { href: '#', text: 'Hiring Statistics' },
              ]}
            />

            {/* Social Links */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 ">Get-Social</p>
              <ul className="mt-6 space-y-4 text-sm">
              <SocialLink
                href="#"
                label="Facebook"
                svg={
                <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="size-6 text-gray-500 hover:text-[#005880]"
                aria-hidden="true"
                 >
                 <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                 }
                />
                <SocialLink
                  href="#"
                  label="WhatsApp"
                  svg={
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="size-6 text-gray-500 hover:text-[#005880]"
                      aria-hidden="true"
                    >
                      <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" /> {/* Replace with actual WhatsApp path */}
                    </svg>
                  }
                />
                <SocialLink
                  href="#"
                  label="Instagram"
                  svg={
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="size-6 text-gray-500 hover:text-[#005880]"
                      aria-hidden="true"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /> {/* Replace with actual Instagram path */}
                    </svg>
                  }
                />
                <SocialLink
                  href="#"
                  label="Github"
                  svg={
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="size-6 text-gray-500 hover:text-[#005880]"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /> {/* Replace with actual Instagram path */}
                    </svg>
                  }
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div className="col-span-2 sm:col-span-1">
    <p className="font-medium text-gray-900">{title}</p>
    <ul className="mt-6 space-y-4 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-700 transition hover:opacity-75"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ href, label, svg }) => (
  <li>
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="text-gray-700 transition hover:opacity-75"
    >
      <span className="sr-only">{label}</span>
      {svg}
    </a>
  </li>
);

export default Footer;
