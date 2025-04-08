import AdminLayout from '@/components/admin/Layout';
import Head from 'next/head';

const AdminSettings = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Admin Settings - Last Minute Delivery</title>
      </Head>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Admin Settings</h1>
        {/* Placeholder for various settings sections */}
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          <section>
            <h2 className="text-lg font-medium text-gray-800 mb-3">General Settings</h2>
            <p className="text-gray-600">Site name, logo, contact info, etc.</p>
            {/* Add form fields here */}
          </section>
          <hr/>
          <section>
            <h2 className="text-lg font-medium text-gray-800 mb-3">Payment Settings</h2>
            <p className="text-gray-600">Configure payment gateways, currency, etc.</p>
            {/* Add form fields here */}
          </section>
           <hr/>
          <section>
            <h2 className="text-lg font-medium text-gray-800 mb-3">Shipping Settings</h2>
            <p className="text-gray-600">Manage shipping zones, rates, etc.</p>
            {/* Add form fields here */}
          </section>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;