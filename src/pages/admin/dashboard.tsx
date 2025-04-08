import AdminLayout from '@/components/admin/Layout';
import Head from 'next/head';

const Dashboard = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Admin Dashboard - Last Minute Delivery</title>
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

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: string;
}

const DashboardCard = ({ title, value, icon }: DashboardCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</h3>
          <p className="text-3xl font-semibold text-gray-900 mt-1">{value}</p>
        </div>
        <span className="text-4xl text-indigo-500">{icon}</span>
      </div>
    </div>
  );
};

export default Dashboard; 