
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Layout from '@/components/layout/Layout';

const Cookies = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      required: true,
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      required: false,
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      required: false,
    },
    {
      icon: Cookie,
      title: 'Marketing Cookies',
      description: 'Used to track visitors and display relevant ads',
      required: false,
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
              COOKIE <span className="text-yego-red">POLICY</span>
            </h1>
            <p className="font-inter text-xl text-gray-300">
              How we use cookies to improve your experience
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Cookie Preferences */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-16"
          >
            <div className="bg-yego-gray rounded-lg p-8">
              <h2 className="font-poppins font-bold text-2xl mb-6 text-center">
                Cookie Preferences
              </h2>
              <p className="font-inter text-gray-600 mb-8 text-center">
                Manage your cookie preferences below. You can change these settings at any time.
              </p>
              
              <div className="space-y-6">
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-yego-red rounded-full flex items-center justify-center mr-4">
                        <type.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg">{type.title}</h3>
                        <p className="font-inter text-sm text-gray-600">{type.description}</p>
                      </div>
                    </div>
                    <Switch 
                      defaultChecked={type.required} 
                      disabled={type.required}
                    />
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4 mt-8">
                <Button className="bg-yego-red hover:bg-red-700 font-poppins font-semibold">
                  Save Preferences
                </Button>
                <Button variant="outline" className="border-yego-red text-yego-red hover:bg-yego-red hover:text-white">
                  Accept All
                </Button>
              </div>
            </div>
          </motion.div>

          {/* What Are Cookies */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="font-poppins font-bold text-2xl mb-6">What Are Cookies?</h2>
              <div className="space-y-4">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="font-poppins font-bold text-2xl mb-6">How We Use Cookies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Website Functionality', 'Performance Analytics', 'Personalization', 'Security'].map((purpose, index) => (
                  <div key={purpose} className="space-y-3">
                    <h3 className="font-poppins font-semibold text-lg">{purpose}</h3>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Third-Party Cookies */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="font-poppins font-bold text-2xl mb-6">Third-Party Cookies</h2>
              <div className="space-y-6">
                {['Google Analytics', 'Social Media Plugins', 'Payment Processors', 'Marketing Partners'].map((service) => (
                  <div key={service} className="border-l-4 border-yego-red pl-6">
                    <h3 className="font-poppins font-semibold text-lg mb-2">{service}</h3>
                    <div className="space-y-2">
                      <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-yego-black text-white rounded-lg p-8"
          >
            <h2 className="font-poppins font-bold text-2xl mb-6 text-yego-red">
              Managing Your Cookies
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="w-full h-3 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-5/6 h-3 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-4/5 h-3 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="mt-6">
              <h3 className="font-poppins font-semibold text-lg mb-4">Browser Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Chrome', 'Firefox', 'Safari', 'Edge'].map((browser) => (
                  <div key={browser} className="bg-gray-800 rounded p-4">
                    <h4 className="font-poppins font-medium mb-2">{browser}</h4>
                    <div className="w-3/4 h-3 bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
