
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const TermsOfService = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use of the Website',
      content: 'You may use our website for lawful purposes only. You agree not to use the site in any way that violates any applicable laws or regulations.'
    },
    {
      title: 'Products and Services',
      content: 'All products and services are subject to availability. We reserve the right to discontinue any product at any time.'
    },
    {
      title: 'Ordering and Payment',
      content: 'All orders are subject to acceptance and availability. Payment must be received before products are shipped.'
    },
    {
      title: 'Shipping and Delivery',
      content: 'We will make every effort to deliver products within the estimated timeframes, but delivery times are not guaranteed.'
    },
    {
      title: 'Returns and Refunds',
      content: 'Returns are accepted within 30 days of purchase in original condition. Refunds will be processed within 5-7 business days.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content on this website, including text, graphics, logos, and images, is the property of YEGO and protected by copyright laws.'
    },
    {
      title: 'Limitation of Liability',
      content: 'YEGO shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.'
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
              TERMS OF <span className="text-yego-red">SERVICE</span>
            </h1>
            <p className="font-inter text-xl text-gray-300">
              Terms and conditions for using YEGO
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
              <h2 className="font-poppins font-bold text-2xl mb-4">Agreement to Terms</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                These Terms of Service govern your use of the YEGO website and services. 
                By accessing or using our services, you agree to comply with and be bound by these terms.
              </p>
            </div>
          </motion.div>

          {/* Terms Sections */}
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
                <h3 className="font-poppins font-bold text-xl mb-4">
                  {index + 1}. {section.title}
                </h3>
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
              Questions About These Terms?
            </h3>
            <p className="font-inter mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
