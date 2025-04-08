import AdminLayout from '@/components/admin/Layout';
import Head from 'next/head';

const AdminCustomers = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Manage Customers - Admin</title>
      </Head>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Manage Customers</h1>
        {/* Placeholder for customer management UI (table, view details, etc.) */}
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Customer management interface will be here.</p>
          {/* Example: Customer List Placeholder */}
          <ul className="mt-4 space-y-2">
            <li className="border p-2 rounded">Customer 1 - customer1@example.com</li>
            <li className="border p-2 rounded">Customer 2 - customer2@example.com</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCustomers;