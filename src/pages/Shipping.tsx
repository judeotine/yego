
import { motion } from 'framer-motion';
import { Truck, Globe, Clock, Shield } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Shipping = () => {
  const shippingOptions = [
    {
      icon: Truck,
      title: 'Local Delivery',
      subtitle: 'Within Uganda',
      features: ['Free shipping over UGX 200,000', 'Express delivery available', '2-5 business days'],
    },
    {
      icon: Globe,
      title: 'International Shipping',
      subtitle: 'Worldwide delivery',
      features: ['Express shipping available', 'Tracked delivery', '7-14 business days'],
    },
  ];

  const deliveryInfo = [
    {
      icon: Clock,
      title: 'Processing Time',
      description: 'Orders are processed within 1-2 business days',
    },
    {
      icon: Shield,
      title: 'Secure Packaging',
      description: 'All items are carefully packaged for safe delivery',
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
              SHIPPING <span className="text-yego-red">INFO</span>
            </h1>
            <p className="font-inter text-xl text-gray-300">
              Fast and reliable delivery worldwide
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Shipping Options */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl text-center mb-12">
            Shipping Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shippingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 p-8"
              >
                <div className="w-16 h-16 bg-yego-red rounded-full flex items-center justify-center mb-6">
                  <option.icon className="text-white" size={24} />
                </div>
                <h3 className="font-poppins font-bold text-xl mb-2">{option.title}</h3>
                <p className="font-inter text-gray-600 mb-4">{option.subtitle}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="font-inter text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-yego-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Information */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl text-center mb-12">
            Delivery Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-yego-gray rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-yego-red rounded-full flex items-center justify-center mb-4">
                  <info.icon className="text-white" size={20} />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{info.title}</h3>
                <p className="font-inter text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Shipping Rates Placeholder */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-poppins font-bold text-3xl text-center mb-12">
            Shipping Rates
          </h2>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-yego-gray">
                  <tr>
                    <th className="px-6 py-4 text-left font-poppins font-semibold">Destination</th>
                    <th className="px-6 py-4 text-left font-poppins font-semibold">Standard</th>
                    <th className="px-6 py-4 text-left font-poppins font-semibold">Express</th>
                  </tr>
                </thead>
                <tbody>
                  {['Kampala', 'Other Uganda Cities', 'East Africa', 'International'].map((destination) => (
                    <tr key={destination} className="border-b border-gray-100">
                      <td className="px-6 py-4 font-inter font-medium">{destination}</td>
                      <td className="px-6 py-4 font-inter text-gray-600">
                        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                      </td>
                      <td className="px-6 py-4 font-inter text-gray-600">
                        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Shipping;
