import AdminLayout from '@/components/admin/Layout';
import Head from 'next/head';

const AdminProducts = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Manage Products - Admin</title>
      </Head>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Manage Products</h1>
        {/* Placeholder for product management UI (table, filters, add button etc.) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Product management interface will be here.</p>
          {/* Example: Add button */}
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Add New Product
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;