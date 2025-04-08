import AdminLayout from '@/components/admin/Layout';
import Head from 'next/head';

const AdminSellers = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Manage Sellers - Admin</title>
      </Head>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Manage Sellers</h1>
        {/* Placeholder for seller management UI (table, search, approve/reject buttons etc.) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Seller management interface will be here.</p>
          {/* Example: Search bar */}
          <div className="mt-4">
            <input 
              type="text" 
              placeholder="Search sellers..." 
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2"
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSellers;