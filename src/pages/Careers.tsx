
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const Careers = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Comprehensive health insurance and performance bonuses',
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with passionate fashion and tech professionals',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Help shape the future of African fashion',
    },
    {
      icon: Briefcase,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development',
    },
  ];

  const departments = [
    'Design & Creative',
    'Engineering & Technology',
    'Marketing & Brand',
    'Operations & Logistics',
    'Customer Experience',
    'Finance & Administration',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-yego-black text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-2xl"
          >
            <h1 className="font-poppins font-black text-4xl md:text-6xl mb-4">
              JOIN <span className="text-yego-red">YEGO</span>
            </h1>
            <p className="font-inter text-xl text-gray-300 mb-8">
              Build the future of African fashion with us
            </p>
            <Button className="bg-yego-red hover:bg-red-700 font-poppins font-semibold px-8 py-3">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-black text-3xl md:text-5xl mb-4">
              WHY <span className="text-yego-red">YEGO</span>?
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of a revolutionary team transforming African fashion and streetwear culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yego-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="font-poppins font-bold text-xl mb-4">{benefit.title}</h3>
                <p className="font-inter text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-yego-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-black text-3xl md:text-5xl mb-4">
              OPEN <span className="text-yego-red">POSITIONS</span>
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Explore opportunities across different departments
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {departments.map((department, index) => (
                <motion.div
                  key={department}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="font-poppins font-semibold text-lg mb-4">{department}</h3>
                  <div className="space-y-2">
                    <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-1/2 h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full border-yego-red text-yego-red hover:bg-yego-red hover:text-white"
                  >
                    View Positions
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Application Process */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <h3 className="font-poppins font-bold text-2xl mb-6 text-center">
                Application Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {['Apply Online', 'Initial Review', 'Interview Process', 'Welcome Aboard'].map((step, index) => (
                  <div key={step} className="text-center">
                    <div className="w-12 h-12 bg-yego-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-poppins font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-poppins font-semibold mb-2">{step}</h4>
                    <p className="font-inter text-sm text-gray-600">
                      Step details will be loaded here
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-poppins font-black text-3xl md:text-5xl mb-4">
                OUR <span className="text-yego-red">CULTURE</span>
              </h2>
              <p className="font-inter text-lg text-gray-600">
                Innovation, creativity, and passion drive everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="font-poppins font-bold text-2xl">Work Environment</h3>
                <div className="space-y-4">
                  <div className="w-full h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse"></div>
                </div>
                
                <h3 className="font-poppins font-bold text-2xl pt-4">Values</h3>
                <div className="space-y-3">
                  {['Innovation', 'Collaboration', 'Excellence', 'Diversity'].map((value) => (
                    <div key={value} className="flex items-center">
                      <div className="w-2 h-2 bg-yego-red rounded-full mr-3"></div>
                      <span className="font-inter">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-square bg-gray-200 rounded-lg"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="font-poppins font-bold text-2xl">Team Photo</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
