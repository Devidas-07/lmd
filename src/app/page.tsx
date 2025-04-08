'use client'; // Need state for form inputs

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Placeholder components for icons (replace with actual icons if available)
const UserIcon = () => <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;
const LockIcon = () => <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 1 1 0 000-2zM7 10a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" /></svg>;
const EyeIcon = () => <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const EyeOffIcon = () => <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 .946-3.11 3.588-5.545 6.875-6.475M10.125 5.175A10.05 10.05 0 0112 5c4.478 0 8.268 2.943 9.542 7-.946 3.11-3.588 5.545-6.875 6.475M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18" /></svg>;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // These handlers will redirect to the respective login pages
  // In a real app, you might handle the login logic directly here
  // based on the button clicked, passing the email/password.
  const handleSellerLogin = () => {
    // Optionally pass state or use context/global state
    router.push('/seller/login');
  };

  const handleAdminLogin = () => {
    // Optionally pass state or use context/global state
    router.push('/admin/login');
  };

  // Generic login handler (if you want one main login button)
  // This is commented out as the image suggests separate panel buttons
  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Login attempt with:', email, password);
  //   // Here you would determine if it's admin or seller based on another state/selection
  //   // and call the appropriate API/context function.
  // };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-green-100 items-center justify-center p-12">
        {/* Placeholder for the shopping cart image */}
        <div className="w-full max-w-md">
          <img src="https://via.placeholder.com/400x400.png?text=Grocery+Image+Placeholder" alt="Groceries" className="w-full h-auto rounded-lg shadow-lg" />
          {/* In a real app, replace with: <Image src="/path/to/your/grocery-cart.png" alt="Groceries" width={400} height={400} ... /> */}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            {/* Placeholder for Logo */}
            <div className="inline-block bg-green-500 p-3 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">eGrocer</h1> {/* App Name */}
            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
              Welcome Back!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please login to your Account
            </p>
          </div>

          {/* Form - onSubmit={handleLogin} - if using a single login button */}
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()} >
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon />
                </span>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="relative pt-2"> {/* Added padding top */}
                <label htmlFor="password" className="sr-only">Password</label>
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon />
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button (Optional - can be removed if only using panel buttons) */}
            {/* <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Login &rarr;
              </button>
            </div> */}
          </form>

          <div className="space-y-4 pt-4">
             <button
                onClick={handleSellerLogin}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Seller Panel
              </button>
             <button
                onClick={handleAdminLogin}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Admin Panel {/* Changed from Delivery Boy */}
              </button>
          </div>

          <div className="text-center text-sm text-gray-500 pt-6">
            Copyright &copy; {new Date().getFullYear()} & All Rights Reserved By eGrocer
          </div>
        </div>
      </div>
    </div>
  );
}
