
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  const sections = [
    'Information We Collect',
    'How We Use Your Information',
    'Information Sharing and Disclosure',
    'Data Security',
    'Your Rights and Choices',
    'Cookies and Tracking Technologies',
    'Third-Party Services',
    'International Data Transfers',
    'Children\'s Privacy',
    'Changes to This Privacy Policy',
    'Contact Us',
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
              <h2 className="font-poppins font-bold text-2xl mb-4">Introduction</h2>
              <div className="space-y-4">
                <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-5/6 h-4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Policy Sections */}
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
                <h3 className="font-poppins font-bold text-xl mb-6">{section}</h3>
                <div className="space-y-4">
                  <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
                </div>
                
                {/* Sub-points placeholder */}
                <div className="mt-6 ml-6 space-y-3">
                  <div className="flex">
                    <div className="w-2 h-2 bg-yego-red rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex">
                    <div className="w-2 h-2 bg-yego-red rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="flex">
                    <div className="w-2 h-2 bg-yego-red rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse"></div>
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
              Questions About This Policy?
            </h3>
            <p className="font-inter mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
