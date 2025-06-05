
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const SizeGuide = () => {
  const clothingSizes = [
    { size: 'XS', chest: '32-34"', waist: '26-28"', hip: '34-36"' },
    { size: 'S', chest: '34-36"', waist: '28-30"', hip: '36-38"' },
    { size: 'M', chest: '36-38"', waist: '30-32"', hip: '38-40"' },
    { size: 'L', chest: '38-40"', waist: '32-34"', hip: '40-42"' },
    { size: 'XL', chest: '40-42"', waist: '34-36"', hip: '42-44"' },
    { size: 'XXL', chest: '42-44"', waist: '36-38"', hip: '44-46"' },
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
        {/* Clothing Size Chart */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="font-poppins font-bold text-2xl mb-6 text-center">
            Clothing Size Chart
          </h2>
          
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
                  {clothingSizes.map((item) => (
                    <tr key={item.size} className="border-b border-gray-100">
                      <td className="px-6 py-4 font-inter font-medium">{item.size}</td>
                      <td className="px-6 py-4 font-inter text-gray-600">{item.chest}</td>
                      <td className="px-6 py-4 font-inter text-gray-600">{item.waist}</td>
                      <td className="px-6 py-4 font-inter text-gray-600">{item.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

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
            <div className="text-center">
              <div className="w-16 h-16 bg-yego-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-sm">1</span>
              </div>
              <h4 className="font-poppins font-semibold mb-2">Chest/Bust</h4>
              <p className="font-inter text-sm text-gray-600">
                Measure around the fullest part of your chest, keeping the tape parallel to the floor.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yego-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-sm">2</span>
              </div>
              <h4 className="font-poppins font-semibold mb-2">Waist</h4>
              <p className="font-inter text-sm text-gray-600">
                Measure around your natural waistline, keeping the tape comfortably loose.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yego-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-sm">3</span>
              </div>
              <h4 className="font-poppins font-semibold mb-2">Hip</h4>
              <p className="font-inter text-sm text-gray-600">
                Measure around the fullest part of your hips, about 7-9 inches below your waistline.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default SizeGuide;
