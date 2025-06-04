
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CreditCard, Truck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import { useStore } from '@/store/useStore';
import { CheckoutStep } from '@/types';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);

  const steps = [
    { id: 'shipping', label: 'Shipping', icon: Truck },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'confirmation', label: 'Confirmation', icon: CheckCircle },
  ] as const;

  const handleNext = () => {
    if (currentStep === 'shipping') {
      setCurrentStep('payment');
    } else if (currentStep === 'payment') {
      setIsProcessing(true);
      setTimeout(() => {
        setCurrentStep('confirmation');
        setIsProcessing(false);
        clearCart();
      }, 2000);
    }
  };

  const handleBack = () => {
    if (currentStep === 'payment') {
      setCurrentStep('shipping');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('payment');
    }
  };

  if (cart.length === 0 && currentStep !== 'confirmation') {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-poppins font-bold text-3xl mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some items to proceed to checkout</p>
          <Button className="bg-yego-red hover:bg-red-700">Continue Shopping</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    currentStep === step.id
                      ? 'border-yego-red bg-yego-red text-white'
                      : steps.findIndex(s => s.id === currentStep) > index
                      ? 'border-green-500 bg-green-500 text-white'
                      : 'border-gray-300 text-gray-400'
                  }`}
                >
                  <step.icon size={20} />
                </div>
                <span className="ml-2 font-poppins font-medium text-sm hidden sm:block">
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-gray-300 mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-lg border border-gray-200 p-8"
          >
            {currentStep === 'shipping' && (
              <div>
                <h2 className="font-poppins font-bold text-2xl mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@gmail.com" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="6th street" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Kampala" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" placeholder="10001" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'payment' && (
              <div>
                <h2 className="font-poppins font-bold text-2xl mb-6">Payment Information</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardholderName">Cardholder Name</Label>
                    <Input id="cardholderName" placeholder="Jude Otine" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'confirmation' && (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="text-green-600" size={40} />
                </motion.div>
                <h2 className="font-poppins font-bold text-3xl mb-4">Order Confirmed!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your purchase. Your order will be shipped within 2-3 business days.
                </p>
                <Button className="bg-yego-red hover:bg-red-700">Continue Shopping</Button>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          {currentStep !== 'confirmation' && (
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 'shipping'}
                className="flex items-center"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={isProcessing}
                className="bg-yego-red hover:bg-red-700 flex items-center"
              >
                {isProcessing ? 'Processing...' : 'Continue'}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Checkout;
