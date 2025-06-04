
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "BOLD LUXURY",
      subtitle: "URBAN STREETWEAR",
      description: "Elevate your style with premium fashion that makes a statement",
      image: "/assets/image1.png",
    },
    {
      title: "NEW COLLECTION",
      subtitle: "STREET PREMIUM",
      description: "Discover the latest drops in luxury urban fashion",
      image: "/assets/image2.png",
    },
    {
      title: "CONFIDENCE",
      subtitle: "REDEFINED",
      description: "Where luxury meets the streets in perfect harmony",
      image: "/assets/image3.png",
    },
  ];

  const categories = [
    {
      name: "CLOTHING",
      image: "/assets/clothing.png",
      href: "/shop?category=clothing",
    },
    {
      name: "SHIRTS",
      image: "/assets/accessories.png",
      href: "/shop?category=clothing",
    },
    {
      name: "T-SHIRTS",
      image: "/assets/tshirts.png",
      href: "/shop?category=clothing",
    },
  ];

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Crafted with the finest materials for lasting luxury",
    },
    {
      icon: Star,
      title: "Bold Design",
      description: "Stand out with our distinctive urban aesthetic",
    },
    {
      icon: Star,
      title: "Street Credibility",
      description: "Authentic streetwear with premium positioning",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1 
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-4"
                >
                  {slide.title}
                  <br />
                  <span className="text-yego-red">{slide.subtitle}</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="font-inter text-lg md:text-xl mb-8 text-gray-200"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <Link to="/shop">
                    <Button 
                      size="lg" 
                      className="bg-yego-red hover:bg-red-700 text-white font-poppins font-semibold px-8 py-4 text-lg group"
                    >
                      SHOP NOW
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-yego-red' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-yego-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-black text-3xl md:text-5xl mb-4">
              SHOP BY <span className="text-yego-red">CATEGORY</span>
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our curated collections of premium urban streetwear
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to={category.href}>
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="font-poppins font-bold text-white text-2xl">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-black text-3xl md:text-5xl mb-4">
              WHY CHOOSE <span className="text-yego-red">YEGO</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yego-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="font-poppins font-bold text-xl mb-4">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yego-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-black text-3xl md:text-5xl mb-6">
              READY TO ELEVATE YOUR STYLE?
            </h2>
            <p className="font-inter text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the YEGO community and discover premium urban streetwear that defines confidence
            </p>
            <Link to="/shop">
              <Button 
                size="lg" 
                className="bg-yego-red hover:bg-red-700 text-white font-poppins font-semibold px-12 py-6 text-lg"
              >
                EXPLORE COLLECTION
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
