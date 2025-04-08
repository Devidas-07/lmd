'use client'; // Needed for hooks like useState, useRouter, useAuth

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useAuth } from '@/context/AuthContext'; // Import useAuth

// Although metadata is usually for Server Components, 
// we keep it here if the page might be statically optimized.
// export const metadata: Metadata = { // Cannot export metadata from client component
//   title: 'Seller Login - Last Minute Delivery',
//   description: 'Login to your seller account',
// };

export default function SellerLogin() {
  const [email, setEmail] = useState(''); // Changed from mobile to email
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const { login } = useAuth(); // Get login function from context

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic validation (can be expanded)
    if (!email || !password) { // Changed from mobile to email
      alert('Please enter email and password.'); // Updated alert message
      return;
    }
    
    // Call the login function from AuthContext
    // In a real app, you'd likely call an API here first
    // and then call login on success.
    login('seller'); 

    // Redirect to seller dashboard after login
    // Add error handling based on API response in a real app
    router.push('/seller/dashboard'); 
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Column - Image/Branding */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 items-center justify-center p-12 text-white text-center">
        <div>
          {/* Placeholder for Logo/Image */}
          {/* <Image src="/your-logo.svg" alt="Logo" width={150} height={50} className="mb-8 mx-auto" /> */}
          <h1 className="text-4xl font-bold mb-4">Last Minute Delivery</h1>
          <p className="text-xl">Your reliable partner for quick commerce.</p>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-lg shadow-lg space-y-6">
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
              Seller Login
            </h2>
            <p className="text-center text-sm text-gray-600">
              Welcome back! Please enter your details
            </p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1"> {/* Changed htmlFor */}
                Email Address {/* Changed label text */}
              </label>
              <input
                id="email-address" // Changed id
                name="email" // Changed name
                type="email" // Changed type
                autoComplete="email" // Changed autoComplete
                required
                value={email} // Changed value binding
                onChange={(e) => setEmail(e.target.value)} // Changed state setter
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter your email address" // Changed placeholder
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                  Remember me
                </label>
              </div>

              <div>
                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/seller/register" className="font-medium text-orange-600 hover:text-orange-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}