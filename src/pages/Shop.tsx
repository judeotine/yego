
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ProductSkeleton from '@/components/ui/ProductSkeleton';
import { formatPrice } from '@/utils/currency';

const Shop = () => {
  const { category } = useParams<{ category?: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading] = useState(false); // Will be controlled by Supabase data loading
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Set category based on URL parameter
  useEffect(() => {
    if (category) {
      const categoryMap: { [key: string]: string } = {
        'new': 'New Arrivals',
        'clothing': 'All Clothing',
        'tshirts': 'T-Shirts',
        'hoodies': 'Hoodies',
        'pants': 'Pants',
        'jackets': 'Jackets',
        'sale': 'Sale',
      };
      setSelectedCategory(categoryMap[category] || 'All');
    }
  }, [category]);

  const filters = {
    categories: ['All', 'New Arrivals', 'T-Shirts', 'Hoodies', 'Pants', 'Jackets', 'Sale'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: ['Cotton', 'Cotton Blend', 'Polyester', 'Fleece', 'Denim'],
    colors: ['Black', 'White', 'Red', 'Gray', 'Navy', 'Olive'],
    priceRanges: ['Under UGX 100,000', 'UGX 100,000 - 200,000', 'UGX 200,000 - 500,000', 'Over UGX 500,000'],
  };

  // Empty products array - will be populated from Supabase
  const products: any[] = [];

  // Get page title based on category
  const getPageTitle = () => {
    if (category) {
      const titles: { [key: string]: string } = {
        'new': 'NEW ARRIVALS',
        'clothing': 'ALL CLOTHING',
        'tshirts': 'T-SHIRTS',
        'hoodies': 'HOODIES',
        'pants': 'PANTS',
        'jackets': 'JACKETS',
        'sale': 'SALE',
      };
      return titles[category] || 'SHOP YEGO';
    }
    return 'SHOP YEGO';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-64 bg-yego-black text-white">
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-full text-center"
            >
              <h1 className="font-poppins font-black text-4xl md:text-6xl mb-4">
                {getPageTitle().split(' ').map((word, index) => (
                  <span key={index}>
                    {word === 'YEGO' || word === 'ARRIVALS' || word === 'CLOTHING' || word === 'T-SHIRTS' || word === 'HOODIES' || word === 'PANTS' || word === 'JACKETS' || word === 'SALE' ? (
                      <span className="text-yego-red">{word}</span>
                    ) : (
                      word
                    )}
                    {index < getPageTitle().split(' ').length - 1 && ' '}
                  </span>
                ))}
              </h1>
              <p className="font-inter text-xl text-gray-300">
                {category ? `Discover our ${category} collection` : 'Premium Ugandan streetwear clothing'}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <motion.aside
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}
            >
              <div className="bg-yego-gray p-6 rounded-lg sticky top-24">
                <h3 className="font-poppins font-bold text-lg mb-6">Filters</h3>
                
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search clothing..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yego-red"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-poppins font-semibold mb-3">Category</h4>
                  <div className="space-y-2">
                    {filters.categories.map((categoryItem) => (
                      <label key={categoryItem} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-2"
                          checked={selectedCategory === categoryItem}
                          onChange={() => setSelectedCategory(categoryItem)}
                        />
                        <span className="font-inter text-sm">{categoryItem}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                  <h4 className="font-poppins font-semibold mb-3">Size</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {filters.sizes.map((size) => (
                      <button
                        key={size}
                        className="py-1 px-2 border border-gray-300 rounded text-sm hover:border-yego-red transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-6">
                  <h4 className="font-poppins font-semibold mb-3">Material</h4>
                  <div className="space-y-2">
                    {filters.materials.map((material) => (
                      <label key={material} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="font-inter text-sm">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <h4 className="font-poppins font-semibold mb-3">Color</h4>
                  <div className="space-y-2">
                    {filters.colors.map((color) => (
                      <label key={color} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="font-inter text-sm">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-poppins font-semibold mb-3">Price</h4>
                  <div className="space-y-2">
                    {filters.priceRanges.map((range) => (
                      <label key={range} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="font-inter text-sm">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="lg:hidden"
                  >
                    <Filter size={16} className="mr-2" />
                    Filters
                  </Button>
                  <span className="font-inter text-gray-600">
                    {products.length === 0 ? 'Ready to load clothing' : `Showing ${products.length} items`}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yego-red">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Best Selling</option>
                  </select>

                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-yego-red text-white' : 'bg-white text-gray-600'}`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-yego-red text-white' : 'bg-white text-gray-600'}`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid or Loading Skeletons */}
              {isLoading || products.length === 0 ? (
                <motion.div
                  layout
                  className={`grid gap-6 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                      : 'grid-cols-1'
                  }`}
                >
                  {Array.from({ length: 9 }).map((_, index) => (
                    <ProductSkeleton key={index} viewMode={viewMode} />
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="font-poppins font-semibold text-xl mb-4">Ready for Clothing</h3>
                  <p className="text-gray-600 mb-8">Connect to Supabase to start loading your YEGO clothing collection</p>
                </div>
              )}

              {/* Load More - Hidden when no products */}
              {products.length > 0 && (
                <div className="text-center mt-12">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-yego-red text-yego-red hover:bg-yego-red hover:text-white"
                  >
                    Load More Clothing
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
