import AdminLayout from '@/components/admin/Layout';
import Head from 'next/head';

const Dashboard = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Admin Dashboard | Your Project Name</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Orders" value="156" icon="🛍️" />
        <DashboardCard title="Total Products" value="2,450" icon="📦" />
        <DashboardCard title="Total Sellers" value="45" icon="👥" />
        <DashboardCard title="Total Revenue" value="$12,450" icon="💰" />
      </div>
      
      {/* Add more dashboard components here */}
    </AdminLayout>
  );
};

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  );
};

export default Dashboard; 