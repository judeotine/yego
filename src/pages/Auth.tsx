
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';

type AuthMode = 'signin' | 'signup';

interface SignInFormData {
  email: string;
  password: string;
}

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signInForm = useForm<SignInFormData>();
  const signUpForm = useForm<SignUpFormData>();

  const onSignIn = (data: SignInFormData) => {
    console.log('Sign in:', data);
    // Future: Handle sign in with Supabase
  };

  const onSignUp = (data: SignUpFormData) => {
    console.log('Sign up:', data);
    // Future: Handle sign up with Supabase
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-yego-gray to-white flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="font-poppins font-black text-4xl"
            >
              <span className="text-yego-red">Y</span>
              <span className="text-yego-black">EGO</span>
            </motion.h1>
            <p className="font-inter text-gray-600 mt-2">
              {mode === 'signin' ? 'Welcome back' : 'Join the community'}
            </p>
          </div>

          {/* Auth Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setMode('signin')}
              className={`flex-1 py-2 px-4 rounded-md font-poppins font-medium transition-all ${
                mode === 'signin'
                  ? 'bg-white text-yego-red shadow-sm'
                  : 'text-gray-600 hover:text-yego-red'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 px-4 rounded-md font-poppins font-medium transition-all ${
                mode === 'signup'
                  ? 'bg-white text-yego-red shadow-sm'
                  : 'text-gray-600 hover:text-yego-red'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Forms */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <AnimatePresence mode="wait">
              {mode === 'signin' ? (
                <motion.form
                  key="signin"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={signInForm.handleSubmit(onSignIn)}
                  className="space-y-6"
                >
                  <div>
                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        {...signInForm.register('email', { required: 'Email is required' })}
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 h-12 border-gray-300 focus:border-yego-red focus:ring-yego-red"
                      />
                    </div>
                    {signInForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {signInForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        {...signInForm.register('password', { required: 'Password is required' })}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12 border-gray-300 focus:border-yego-red focus:ring-yego-red"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {signInForm.formState.errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {signInForm.formState.errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="font-inter text-sm text-gray-600">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="font-inter text-sm text-yego-red hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-yego-red hover:bg-red-700 font-poppins font-semibold"
                  >
                    Sign In
                  </Button>
                </motion.form>
              ) : (
                <motion.form
                  key="signup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={signUpForm.handleSubmit(onSignUp)}
                  className="space-y-6"
                >
                  <div>
                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        {...signUpForm.register('name', { required: 'Name is required' })}
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10 h-12 border-gray-300 focus:border-yego-red focus:ring-yego-red"
                      />
                    </div>
                    {signUpForm.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {signUpForm.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        {...signUpForm.register('email', { required: 'Email is required' })}
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 h-12 border-gray-300 focus:border-yego-red focus:ring-yego-red"
                      />
                    </div>
                    {signUpForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {signUpForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        {...signUpForm.register('password', { 
                          required: 'Password is required',
                          minLength: { value: 6, message: 'Password must be at least 6 characters' }
                        })}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a password"
                        className="pl-10 pr-10 h-12 border-gray-300 focus:border-yego-red focus:ring-yego-red"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {signUpForm.formState.errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {signUpForm.formState.errors.password.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-poppins font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        {...signUpForm.register('confirmPassword', { 
                          required: 'Please confirm your password',
                          validate: (value) => value === signUpForm.watch('password') || 'Passwords do not match'
                        })}
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 h-12 border-gray-300 focus:border-yego-red focus:ring-yego-red"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {signUpForm.formState.errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {signUpForm.formState.errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" required />
                    <span className="font-inter text-sm text-gray-600">
                      I agree to the{' '}
                      <button type="button" className="text-yego-red hover:underline">
                        Terms of Service
                      </button>{' '}
                      and{' '}
                      <button type="button" className="text-yego-red hover:underline">
                        Privacy Policy
                      </button>
                    </span>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-yego-red hover:bg-red-700 font-poppins font-semibold"
                  >
                    Create Account
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 font-inter">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-12 border-gray-300 hover:border-yego-red"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-gray-300 hover:border-yego-red"
                >
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Auth;
