import { Metadata } from 'next';
import SellerLayoutClient from '@/components/seller/SellerLayoutClient'; // Import the new client component
export const metadata: Metadata = {
  title: 'Seller Dashboard - Last Minute Delivery',
  description: 'Manage your products, orders, and business operations',
};

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SellerLayoutClient> {/* Use the client component */}
      {children} {/* Pass children to the client component */}
    </SellerLayoutClient>
  );
}