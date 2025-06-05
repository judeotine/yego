
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Kampala, Uganda'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+256 758990562'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['yego@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat - Sun: 10AM - 4PM'],
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
              CONTACT <span className="text-yego-red">US</span>
            </h1>
            <p className="font-inter text-xl text-gray-300">
              Get in touch with the YEGO team
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg border border-gray-200 p-8"
          >
            <h2 className="font-poppins font-bold text-2xl mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Jude" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Otine" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="yego@gmail.com" />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yego-red resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <Button className="w-full bg-yego-red hover:bg-red-700 font-poppins font-semibold">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-poppins font-bold text-2xl mb-6">Get in touch</h2>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Have questions about our products, need sizing help, or want to collaborate? 
                We'd love to hear from you. Our team is here to help make your YEGO experience exceptional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-yego-gray rounded-lg p-6"
                >
                  <div className="w-12 h-12 bg-yego-red rounded-full flex items-center justify-center mb-4">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="font-inter text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-poppins font-bold text-lg mb-4">Quick Questions?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-poppins font-medium mb-1">What's your return policy?</h4>
                  <p className="font-inter text-sm text-gray-600">
                    30-day returns on all unworn items with tags attached.
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-medium mb-1">Do you ship internationally?</h4>
                  <p className="font-inter text-sm text-gray-600">
                    Yes, we ship worldwide with express delivery options.
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-medium mb-1">How do I track my order?</h4>
                  <p className="font-inter text-sm text-gray-600">
                    You'll receive a tracking number via email once your order ships.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
