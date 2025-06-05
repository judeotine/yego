
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Package, Users, BarChart3, Settings, Upload, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/layout/Layout';
import { formatPrice } from '@/utils/currency';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('products');

  const tabs = [
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="font-poppins font-bold text-3xl mb-2">YEGO® Admin Dashboard</h1>
            <p className="text-gray-600">Manage your luxury streetwear clothing store</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-yego-red text-white shadow-md'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <tab.icon size={20} />
                      <span className="font-inter font-medium">{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'products' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="font-poppins font-bold text-2xl">Clothing Management</h2>
                    <Button className="bg-yego-red hover:bg-red-700 shadow-lg">
                      <Plus size={16} className="mr-2" />
                      Add New Clothing Item
                    </Button>
                  </div>

                  {/* Add Product Form */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm"
                  >
                    <h3 className="font-poppins font-semibold text-xl mb-6">Create New Clothing Item</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="productName" className="font-poppins font-medium">Product Name</Label>
                        <Input 
                          id="productName" 
                          placeholder="YEGO Premium Hoodie" 
                          className="mt-2 focus:ring-2 focus:ring-yego-red"
                        />
                      </div>
                      <div>
                        <Label htmlFor="price" className="font-poppins font-medium">Price (UGX)</Label>
                        <Input 
                          id="price" 
                          type="number" 
                          placeholder="150000" 
                          className="mt-2 focus:ring-2 focus:ring-yego-red"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="description" className="font-poppins font-medium">Description</Label>
                        <Textarea
                          id="description"
                          rows={4}
                          className="mt-2 focus:ring-2 focus:ring-yego-red"
                          placeholder="Premium streetwear clothing crafted for the bold and confident..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="category" className="font-poppins font-medium">Clothing Category</Label>
                        <select
                          id="category"
                          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yego-red"
                        >
                          <option>Select clothing category</option>
                          <option>T-Shirts</option>
                          <option>Hoodies & Sweatshirts</option>
                          <option>Pants</option>
                          <option>Jackets</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="stock" className="font-poppins font-medium">Stock Quantity</Label>
                        <Input 
                          id="stock" 
                          type="number" 
                          placeholder="50" 
                          className="mt-2 focus:ring-2 focus:ring-yego-red"
                        />
                      </div>
                      <div>
                        <Label htmlFor="material" className="font-poppins font-medium">Material</Label>
                        <select
                          id="material"
                          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yego-red"
                        >
                          <option>Select material</option>
                          <option>Cotton</option>
                          <option>Cotton Blend</option>
                          <option>Polyester</option>
                          <option>Fleece</option>
                          <option>Denim</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="sizes" className="font-poppins font-medium">Available Sizes</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <label key={size} className="flex items-center">
                              <input type="checkbox" className="mr-1" />
                              <span className="text-sm">{size}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <Label className="font-poppins font-medium">Product Images</Label>
                        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yego-red transition-colors">
                          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                          <p className="text-gray-600">Drop clothing images here or click to upload</p>
                          <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <Button className="bg-yego-red hover:bg-red-700 flex-1">
                        Create Clothing Item
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Save as Draft
                      </Button>
                    </div>
                  </motion.div>

                  {/* Products List */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
                  >
                    <h3 className="font-poppins font-semibold text-xl mb-6">Clothing Inventory</h3>
                    <div className="text-center py-12">
                      <Package className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                      <h4 className="font-poppins font-medium text-lg mb-2">No Clothing Items Yet</h4>
                      <p className="text-gray-600 mb-6">Start by adding your first YEGO clothing item to the inventory</p>
                      <Button className="bg-yego-red hover:bg-red-700">
                        <Plus size={16} className="mr-2" />
                        Add First Clothing Item
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === 'orders' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm"
                >
                  <h2 className="font-poppins font-bold text-2xl mb-6">Order Management</h2>
                  <div className="text-center py-16">
                    <Users className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                    <h3 className="font-poppins font-medium text-xl mb-2">No Orders Yet</h3>
                    <p className="text-gray-600">Orders will appear here once customers start purchasing</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="font-poppins font-bold text-2xl">Analytics & Insights</h2>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                      { label: 'Total Revenue', value: formatPrice(0) },
                      { label: 'Total Orders', value: '0' },
                      { label: 'Products Sold', value: '0' },
                      { label: 'Active Customers', value: '0' },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                            <p className="text-2xl font-poppins font-bold text-yego-red">{stat.value}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                    <BarChart3 className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                    <div className="text-center">
                      <h3 className="font-poppins font-medium text-xl mb-2">Analytics Coming Soon</h3>
                      <p className="text-gray-600">Detailed sales analytics and customer insights will be available here</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm"
                >
                  <h2 className="font-poppins font-bold text-2xl mb-6">Store Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <Label className="font-poppins font-medium">Store Name</Label>
                      <Input value="YEGO®" className="mt-2" />
                    </div>
                    <div>
                      <Label className="font-poppins font-medium">Store Description</Label>
                      <Textarea 
                        value="Premium Ugandan streetwear for the bold and confident"
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label className="font-poppins font-medium">Currency</Label>
                      <Input value="UGX (Ugandan Shilling)" className="mt-2" disabled />
                    </div>
                    <Button className="bg-yego-red hover:bg-red-700">
                      Save Settings
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Admin;
