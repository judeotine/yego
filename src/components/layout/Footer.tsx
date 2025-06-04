
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', href: '/shop?category=new' },
        { name: 'Clothing', href: '/shop?category=clothing' },
        { name: 'Accessories', href: '/shop?category=accessories' },
        { name: 'Sale', href: '/shop?category=sale' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About YEGO', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Mail, href: '#', name: 'Email' },
  ];

  return (
    <footer className="bg-yego-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="font-poppins font-black text-3xl mb-4">
                <span className="text-yego-red">Y</span>EGO
              </h2>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                Bold, luxurious urban streetwear for the confident. Elevate your style with premium fashion that makes a statement.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yego-red transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-poppins font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 font-inter hover:text-white transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="max-w-md mx-auto lg:mx-0">
            <h3 className="font-poppins font-semibold text-lg mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 font-inter mb-4">
              Get the latest drops and exclusive offers delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yego-red text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-yego-red text-white rounded-lg font-inter font-medium hover:bg-red-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-inter text-sm mb-4 md:mb-0">
            © 2025 YEGO. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
