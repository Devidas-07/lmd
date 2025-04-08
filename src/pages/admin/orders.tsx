import AdminLayout from '@/components/admin/Layout';
import Head from 'next/head';

const AdminOrders = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Manage Orders - Admin</title>
      </Head>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Manage Orders</h1>
        {/* Placeholder for order management UI (table, filters, etc.) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Order management interface will be here.</p>
          {/* Example: Filters */}
          <div className="mt-4">
            <span className="text-sm font-medium text-gray-700 mr-2">Filter by status:</span>
            <select className="border border-gray-300 rounded px-2 py-1">
              <option>All</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;