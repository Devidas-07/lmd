import { useRouter } from 'next/router';
import Head from 'next/head';

const LoginSelection = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login | Your Project Name</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
          <div className="text-center mb-8">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="mx-auto h-16 mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Choose your login type</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => router.push('/admin/login')}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <span className="text-xl">👨‍💼</span>
              <span>Login as Admin</span>
            </button>

            <button
              onClick={() => router.push('/seller/login')}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
            >
              <span className="text-xl">🏪</span>
              <span>Login as Seller</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSelection; 