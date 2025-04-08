import AdminLayout from '@/components/admin/Layout';
import Head from 'next/head';

const AdminCategories = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Manage Categories - Admin</title>
      </Head>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Manage Categories</h1>
        {/* Placeholder for category management UI (tree view, add/edit/delete) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Category management interface will be here.</p>
          {/* Example: Add Category Button */}
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Add New Category
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCategories;