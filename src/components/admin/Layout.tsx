import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext'; // Import useAuth

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();
  const { logout } = useAuth(); // Get logout function

  const menuItems = [
    { title: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    { title: 'Products', path: '/admin/products', icon: '📦' },
    { title: 'Orders', path: '/admin/orders', icon: '🛍️' },
    { title: 'Sellers', path: '/admin/sellers', icon: '👥' },
    { title: 'Customers', path: '/admin/customers', icon: '🧑' },
    { title: 'Categories', path: '/admin/categories', icon: '📑' },
    { title: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gradient-to-b from-indigo-700 to-indigo-900 text-white w-64 min-h-screen ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block shadow-xl transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 border-b border-indigo-800">
          <h1 className="text-2xl font-semibold text-center">LMD Admin</h1>
        </div>
        <nav className="mt-4 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-3 py-2.5 mt-1 rounded-lg transition-colors duration-150 ${
                router.pathname === item.path || (router.pathname.startsWith(item.path) && item.path !== '/admin/dashboard') // Highlight parent routes too
                  ? 'bg-indigo-800 text-white font-medium'
                  : 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-600 focus:outline-none md:hidden p-2 rounded hover:bg-gray-200"
            >
              {/* Hamburger Icon SVG */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
            {/* Placeholder for search or other header elements */}
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              {/* Admin Profile/Logout */}
              <button
                onClick={() => {
                  logout(); // Call logout from useAuth
                  router.push('/admin/login'); // Redirect to login
                }}
                className="flex items-center text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md transition duration-150 ease-in-out"
              >
                 {/* Logout Icon SVG */}
                 <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 