import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useAuth } from '@/context/AuthContext';

const AdminLogin = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      // Basic validation
      if (!email || !password) {
        setError('Please enter email and password.');
        return;
      }
      
      // Replace with your actual admin authentication logic (e.g., API call)
      // For demo purposes, we'll assume success if email/password are not empty
      console.log('Attempting admin login with:', { email, password, rememberMe });

      // If authentication is successful:
      login('admin');
      router.push('/admin/dashboard');

    } catch (err) {
      console.error("Admin login error:", err);
      // Set error based on actual API response in a real app
      setError('Invalid email or password. Please try again.'); 
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login - Last Minute Delivery</title>
        <meta name="description" content="Login to the admin dashboard" />
      </Head>
      <div className="min-h-screen flex bg-gray-100">
        {/* Left Column - Branding */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 items-center justify-center p-12 text-white text-center">
          <div>
            {/* Placeholder for Admin Logo/Image */}
            {/* <Image src="/admin-logo.svg" alt="Admin Logo" width={150} height={50} className="mb-8 mx-auto" /> */}
            <h1 className="text-4xl font-bold mb-4">LMD Admin Portal</h1>
            <p className="text-xl">Manage sellers, products, and orders.</p>
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
          <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-lg shadow-lg space-y-6">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
                Admin Login
              </h2>
              <p className="text-center text-sm text-gray-600">
                Access the administration dashboard
              </p>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email address"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                    Remember me
                  </label>
                </div>

                <div>
                  {/* Consider if admin needs forgot password */}
                  {/* <Link href="/admin/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </Link> */}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </div>
            </form>
            {/* Removed the 'Back to login selection' link */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;