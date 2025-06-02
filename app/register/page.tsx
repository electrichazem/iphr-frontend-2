'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Image from "next/image";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import Link from 'next/link';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function IPhRRegister() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // هنا كمل بقي ي عم كيرو
      // Simulate API call

    }
  };

  return (
    <main className="bg-[#121116] min-h-screen relative">
      <Header />
      
      <div className="max-w-[1300px] mx-auto px-6 py-16">
        <div className="text-center bg-white/5 backdrop-blur-lg p-12 rounded-2xl mb-16 border-2 border-white/20">
          <h1 className="text-5xl font-bold text-white mb-4 my-8">Register for the Competition</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join the International Physics Research competition and showcase your skills on a global stage.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
           
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full bg-white/10 border ${errors.fullName ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4380eb]`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4380eb]`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-white/10 border ${errors.password ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4380eb]`}
                placeholder="Create a password"
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-white/10 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4380eb]`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-[#4380eb] hover:bg-[#3a70d1] text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Register Now'
                )}
              </button>
            </div>

            <div className="text-center text-gray-400 text-sm">
              Already have an account? <Link href="/login" className="text-[#4380eb] hover:underline">Sign in</Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}