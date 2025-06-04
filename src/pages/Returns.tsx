
import { motion } from 'framer-motion';
import { RotateCcw, Shield, Clock, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Layout from '@/components/layout/Layout';

const Returns = () => {
  const returnSteps = [
    {
      icon: HelpCircle,
      title: 'Contact Us',
      description: 'Reach out to our support team to initiate your return',
    },
    {
      icon: RotateCcw,
      title: 'Package Item',
      description: 'Pack the item in its original packaging with all tags',
    },
    {
      icon: Shield,
      title: 'Return Shipping',
      description: 'Use the provided return label for free return shipping',
    },
    {
      icon: Clock,
      title: 'Processing',
      description: 'Your refund will be processed within 3-5 business days',
    },
  ];

  const faqs = [
    {
      question: 'What is your return policy timeframe?',
      answer: 'Return policy details will be loaded here from the database.',
    },
    {
      question: 'What condition should items be in for returns?',
      answer: 'Item condition requirements will be loaded here from the database.',
    },
    {
      question: 'How long does it take to process a refund?',
      answer: 'Refund processing timeframes will be loaded here from the database.',
    },
    {
      question: 'Can I exchange an item instead of returning it?',
      answer: 'Exchange policy details will be loaded here from the database.',
    },
    {
      question: 'Are there any items that cannot be returned?',
      answer: 'Non-returnable items list will be loaded here from the database.',
    },
    {
      question: 'How do I track my return?',
      answer: 'Return tracking information will be loaded here from the database.',
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
              RETURNS & <span className="text-yego-red">EXCHANGES</span>
            </h1>
            <p className="font-inter text-xl text-gray-300">
              Easy returns and hassle-free exchanges
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Return Process */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl text-center mb-12">
            How to Return
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yego-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-white" size={24} />
                </div>
                <div className="w-8 h-8 bg-yego-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-poppins font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{step.title}</h3>
                <p className="font-inter text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Return Policy Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-yego-gray rounded-lg p-8">
            <h2 className="font-poppins font-bold text-2xl mb-6 text-center">
              Return Policy Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-yego-red" size={24} />
                </div>
                <h3 className="font-poppins font-semibold mb-2">Return Window</h3>
                <div className="w-20 h-4 bg-gray-300 rounded mx-auto animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-yego-red" size={24} />
                </div>
                <h3 className="font-poppins font-semibold mb-2">Free Returns</h3>
                <div className="w-24 h-4 bg-gray-300 rounded mx-auto animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="text-yego-red" size={24} />
                </div>
                <h3 className="font-poppins font-semibold mb-2">Easy Process</h3>
                <div className="w-20 h-4 bg-gray-300 rounded mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-poppins font-bold text-3xl text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-poppins font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Returns;
