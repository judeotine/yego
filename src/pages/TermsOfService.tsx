
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const TermsOfService = () => {
  const sections = [
    'Acceptance of Terms',
    'Use of the Website',
    'Products and Services',
    'Ordering and Payment',
    'Shipping and Delivery',
    'Returns and Refunds',
    'User Accounts',
    'Intellectual Property',
    'Prohibited Uses',
    'Disclaimers',
    'Limitation of Liability',
    'Indemnification',
    'Termination',
    'Governing Law',
    'Changes to Terms',
    'Contact Information',
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
              Last updated: <span className="w-24 h-4 bg-gray-200 rounded inline-block animate-pulse align-middle"></span>
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
              <div className="space-y-4">
                <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-4/5 h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-5/6 h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg border border-gray-200 p-8"
              >
                <h3 className="font-poppins font-bold text-xl mb-6">
                  {index + 1}. {section}
                </h3>
                <div className="space-y-4">
                  <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse"></div>
                </div>
                
                {/* Sub-sections placeholder */}
                <div className="mt-6 space-y-4">
                  <div className="ml-4">
                    <h4 className="font-poppins font-semibold text-sm mb-2 text-gray-700">
                      {index + 1}.1 Subsection
                    </h4>
                    <div className="space-y-2">
                      <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-poppins font-semibold text-sm mb-2 text-gray-700">
                      {index + 1}.2 Subsection
                    </h4>
                    <div className="space-y-2">
                      <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
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
              <div className="w-48 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-40 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-52 h-4 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
