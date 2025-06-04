
import { motion } from 'framer-motion';
import { Award, Globe, Users, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Bold Innovation',
      description: 'Pushing boundaries in urban streetwear design',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a movement of confident individuals',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Sustainable practices for a better future',
    },
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
              ABOUT <span className="text-yego-red">YEGO</span>
            </h1>
            <p className="font-inter text-xl text-gray-300">
              Bold luxury urban streetwear for the confident and fearless
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-poppins font-black text-3xl md:text-5xl mb-6">
                OUR <span className="text-yego-red">STORY</span>
              </h2>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-8">
                Founded in the heart of the urban landscape, YEGO emerged from a vision to redefine 
                luxury streetwear. We believe that true style comes from confidence and confidence 
                comes from wearing pieces that make you feel unstoppable.
              </p>
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Every piece in our collection is carefully crafted to embody the spirit of the streets 
                while maintaining the highest standards of luxury. We don't just make clothes; we create 
                statements that speak to the bold, the ambitious and the unapologetically confident.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="font-poppins font-bold text-2xl">Mission</h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  To empower individuals through bold, luxury urban streetwear that celebrates 
                  confidence and authenticity. We create more than fashion – we create identity.
                </p>
                
                <h3 className="font-poppins font-bold text-2xl">Vision</h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  To become the global leader in luxury streetwear, setting trends and inspiring 
                  a generation to express themselves fearlessly through fashion.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-square bg-gray-200 rounded-lg"
              >
                {/* Placeholder for brand image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="font-poppins font-bold text-4xl">YEGO</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-yego-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-black text-3xl md:text-5xl mb-4">
              OUR <span className="text-yego-red">VALUES</span>
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at YEGO
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-yego-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="font-poppins font-bold text-xl mb-4">{value.title}</h3>
                <p className="font-inter text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-black text-3xl md:text-5xl mb-4">
              THE <span className="text-yego-red">TEAM</span>
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind YEGO's bold designs and luxury craftsmanship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'jude', role: 'Creative Director' },
              { name: 'ocen', role: 'Head of Design' },
              { name: 'otine', role: 'Brand Manager' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-poppins font-bold text-xl mb-2">{member.name}</h3>
                <p className="font-inter text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
