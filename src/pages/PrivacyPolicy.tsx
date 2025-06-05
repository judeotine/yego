
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, shipping address, and payment information.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you updates about your orders, and communicate with you about our products and services.'
    },
    {
      title: 'Information Sharing and Disclosure',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
    },
    {
      title: 'Your Rights and Choices',
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. Contact us to exercise these rights.'
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: 'We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser.'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-64 bg-yego-black text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full text-center"
          >
            <h1 className="font-poppins font-black text-4xl md:text-6xl mb-4">
              PRIVACY <span className="text-yego-red">POLICY</span>
            </h1>
            <p className="font-inter text-xl text-gray-300">
              How we protect and use your information
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <p className="font-inter text-gray-600">
              Last updated: January 1, 2025
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-yego-gray rounded-lg p-8">
              <h2 className="font-poppins font-bold text-2xl mb-4">Introduction</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                At YEGO, we respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you 
                visit our website or use our services.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg border border-gray-200 p-8"
              >
                <h3 className="font-poppins font-bold text-xl mb-4">{section.title}</h3>
                <p className="font-inter text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-yego-black text-white rounded-lg p-8"
          >
            <h3 className="font-poppins font-bold text-xl mb-4 text-yego-red">
              Questions About This Policy?
            </h3>
            <p className="font-inter mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Email: yego@gmail.com</p>
              <p>Phone: +256 758990562</p>
              <p>Address: Kampala, Uganda</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
