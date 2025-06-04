
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const SizeGuide = () => {
  const categories = [
    { name: 'Clothing', id: 'clothing' },
    { name: 'Footwear', id: 'footwear' },
    { name: 'Accessories', id: 'accessories' },
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
              SIZE <span className="text-yego-red">GUIDE</span>
            </h1>
            <p className="font-inter text-xl text-gray-300">
              Find your perfect fit
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Size Categories */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-poppins font-bold text-2xl mb-6 text-center">
                {category.name} Size Chart
              </h2>
              
              {/* Size Chart Placeholder */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-yego-gray">
                      <tr>
                        <th className="px-6 py-4 text-left font-poppins font-semibold">Size</th>
                        <th className="px-6 py-4 text-left font-poppins font-semibold">Chest/Bust</th>
                        <th className="px-6 py-4 text-left font-poppins font-semibold">Waist</th>
                        <th className="px-6 py-4 text-left font-poppins font-semibold">Hip</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                        <tr key={size} className="border-b border-gray-100">
                          <td className="px-6 py-4 font-inter font-medium">{size}</td>
                          <td className="px-6 py-4 font-inter text-gray-600">
                            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4 font-inter text-gray-600">
                            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4 font-inter text-gray-600">
                            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Measurement Tips */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-yego-gray rounded-lg p-8"
          >
            <h3 className="font-poppins font-bold text-xl mb-6 text-center">
              How to Measure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Chest/Bust', 'Waist', 'Hip'].map((measurement) => (
                <div key={measurement} className="text-center">
                  <div className="w-16 h-16 bg-yego-red rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-poppins font-bold">?</span>
                  </div>
                  <h4 className="font-poppins font-semibold mb-2">{measurement}</h4>
                  <p className="font-inter text-sm text-gray-600">
                    Measurement instructions will be loaded here
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default SizeGuide;
