'use client'; // This component uses AuthProvider and potentially other client hooks

import { AuthProvider } from '@/context/AuthContext';

export default function SellerLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold">LMD Seller</span>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="/seller/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Dashboard</a>
                    <a href="/seller/orders" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Orders</a>
                    <a href="/seller/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Products</a>
                    <a href="/seller/categories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Categories</a>
                    <a href="/seller/inventory" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Inventory</a>
                    <a href="/seller/wallet" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Wallet</a>
                    <a href="/seller/reports" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Reports</a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="p-1 rounded-full hover:bg-indigo-500 focus:outline-none">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <div className="ml-3 relative">
                    <button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none hover:bg-indigo-500 p-2">
                      <span className="sr-only">Open user menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}