
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Layout from '@/components/layout/Layout';

const Cookies = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false,
  });

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      required: true,
      key: 'essential' as keyof typeof cookiePreferences,
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      required: false,
      key: 'analytics' as keyof typeof cookiePreferences,
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      required: false,
      key: 'functional' as keyof typeof cookiePreferences,
    },
    {
      icon: Cookie,
      title: 'Marketing Cookies',
      description: 'Used to track visitors and display relevant ads',
      required: false,
      key: 'marketing' as keyof typeof cookiePreferences,
    },
  ];

  const handleCookieToggle = (key: keyof typeof cookiePreferences, value: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSavePreferences = () => {
    // Save preferences to localStorage
    localStorage.setItem('yego-cookie-preferences', JSON.stringify(cookiePreferences));
    toast.success('Cookie preferences saved successfully!');
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('yego-cookie-preferences', JSON.stringify(allAccepted));
    toast.success('All cookies accepted!');
  };

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
                      checked={cookiePreferences[type.key]}
                      onCheckedChange={(checked) => handleCookieToggle(type.key, checked)}
                      disabled={type.required}
                    />
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4 mt-8">
                <Button 
                  onClick={handleSavePreferences}
                  className="bg-yego-red hover:bg-red-700 font-poppins font-semibold"
                >
                  Save Preferences
                </Button>
                <Button 
                  onClick={handleAcceptAll}
                  variant="outline" 
                  className="border-yego-red text-yego-red hover:bg-yego-red hover:text-white"
                >
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
              <div className="space-y-4 font-inter text-gray-700 leading-relaxed">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p>
                  These files contain information such as your language preference, login status, and 
                  shopping cart contents. Cookies are essential for many website functions and help 
                  ensure that our site works properly for you.
                </p>
                <p>
                  We use both session cookies (which expire when you close your browser) and persistent 
                  cookies (which remain on your device for a set period) to enhance your browsing experience.
                </p>
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
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Website Functionality</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    Essential cookies enable core website features like user authentication, 
                    shopping cart functionality, and form submissions. These are necessary 
                    for the website to function properly.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Performance Analytics</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    Analytics cookies help us understand how visitors interact with our website 
                    by collecting information about page views, user behavior, and site performance 
                    to improve our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Personalization</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    Functional cookies remember your preferences such as language settings, 
                    region selection, and customized content to provide a more personalized 
                    experience on your return visits.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Security</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    Security cookies help protect your account and personal information by 
                    detecting suspicious activity, preventing unauthorized access, and 
                    maintaining secure connections.
                  </p>
                </div>
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
                <div className="border-l-4 border-yego-red pl-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Google Analytics</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    We use Google Analytics to understand how visitors use our website. These cookies 
                    collect anonymous information about page views, user behavior, and traffic sources 
                    to help us improve our website performance.
                  </p>
                </div>
                <div className="border-l-4 border-yego-red pl-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Social Media Plugins</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    Social media plugins from platforms like Facebook, Instagram, and Twitter may 
                    set cookies to enable sharing functionality and track interactions with our content 
                    across social networks.
                  </p>
                </div>
                <div className="border-l-4 border-yego-red pl-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Payment Processors</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    Payment service providers like Stripe or PayPal use cookies to process transactions 
                    securely, prevent fraud, and ensure that payments are handled safely and efficiently.
                  </p>
                </div>
                <div className="border-l-4 border-yego-red pl-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Marketing Partners</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">
                    Marketing cookies from advertising partners help us display relevant ads and 
                    measure the effectiveness of our marketing campaigns across different platforms 
                    and websites.
                  </p>
                </div>
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
            <div className="space-y-4 font-inter text-gray-300 leading-relaxed">
              <p>
                You have full control over the cookies that are stored on your device. You can 
                choose to accept or decline cookies, delete existing cookies, or set your browser 
                to notify you when cookies are being sent.
              </p>
              <p>
                Please note that disabling certain cookies may affect the functionality of our 
                website and limit your access to some features. Essential cookies cannot be 
                disabled as they are necessary for the website to function.
              </p>
              <p>
                You can manage your cookie preferences using the controls at the top of this page 
                or through your browser settings. Changes to your preferences will take effect 
                immediately.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="font-poppins font-semibold text-lg mb-4">Browser Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded p-4">
                  <h4 className="font-poppins font-medium mb-2">Chrome</h4>
                  <p className="font-inter text-gray-300 text-sm">
                    Settings → Privacy and security → Cookies and other site data
                  </p>
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <h4 className="font-poppins font-medium mb-2">Firefox</h4>
                  <p className="font-inter text-gray-300 text-sm">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <h4 className="font-poppins font-medium mb-2">Safari</h4>
                  <p className="font-inter text-gray-300 text-sm">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <h4 className="font-poppins font-medium mb-2">Edge</h4>
                  <p className="font-inter text-gray-300 text-sm">
                    Settings → Site permissions → Cookies and site data
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

export default Cookies;
