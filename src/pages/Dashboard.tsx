
import { motion } from 'framer-motion';
import { User, Package, Heart, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const Dashboard = () => {
  const menuItems = [
    { icon: User, label: 'Profile', href: '#profile' },
    { icon: Package, label: 'Orders', href: '#orders' },
    { icon: Heart, label: 'Wishlist', href: '#wishlist' },
    { icon: Settings, label: 'Settings', href: '#settings' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="font-poppins font-bold text-3xl mb-2">My Dashboard</h1>
            <p className="text-gray-600">Manage your account and orders</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-poppins font-semibold text-lg">Jude</h3>
                  <p className="text-gray-600 text-sm">jude@gmail.com</p>
                </div>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <item.icon size={20} className="text-gray-600" />
                      <span className="font-inter">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Total Orders</h3>
                  <p className="text-3xl font-bold text-yego-red">12</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Total Spent</h3>
                  <p className="text-3xl font-bold text-yego-red">$1,247</p>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-poppins font-semibold text-lg mb-4">Recent Orders</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div>
                        <p className="font-poppins font-medium">Order #YEG00{order}</p>
                        <p className="text-sm text-gray-600">Placed on Jan {order + 10}, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-poppins font-semibold">${(order * 89) + 50}</p>
                        <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                          Delivered
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
