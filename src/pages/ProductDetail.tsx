
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Heart, Share2, ShoppingBag, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useStore } from '@/store/useStore';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useStore();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Placeholder product data
  const product = {
    id: id || '1',
    name: 'YEGO Premium Streetwear Hoodie',
    price: 149,
    originalPrice: 199,
    description: 'Premium urban streetwear hoodie crafted from the finest materials. Bold design meets luxury comfort in this statement piece that defines confidence.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1520975861317-293ef72afe24?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=1000&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Red', value: '#E60012' },
      { name: 'Gray', value: '#808080' },
    ],
    features: [
      'Premium cotton blend fabric',
      'Reinforced stitching',
      'Bold YEGO branding',
      'Oversized fit',
      'Machine washable',
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color');
      return;
    }

    addToCart({
      productId: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity,
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        category: 'Clothing',
        sizes: product.sizes,
        colors: product.colors.map(c => c.name),
        inStock: product.inStock,
        featured: false,
        description: product.description,
        createdAt: new Date().toISOString(),
      },
    });

    toast.success('Added to cart!');
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <motion.div 
              className="aspect-square rounded-lg overflow-hidden bg-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-yego-red' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-inter text-gray-500 uppercase tracking-wide">
                  YEGO Collection
                </span>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleWishlist}
                    className={`p-2 rounded-full transition-colors ${
                      isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Share2 size={20} />
                  </motion.button>
                </div>
              </div>
              <h1 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-inter text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-poppins font-bold text-3xl text-yego-red">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="font-poppins text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="bg-yego-red text-white px-2 py-1 rounded text-sm font-poppins font-medium">
                      SAVE ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="font-inter text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 px-3 border-2 rounded-lg font-poppins font-medium transition-all ${
                      selectedSize === size
                        ? 'border-yego-red bg-yego-red text-white'
                        : 'border-gray-300 hover:border-yego-red'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <motion.button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full border-4 transition-all ${
                      selectedColor === color.name
                        ? 'border-yego-red scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              {selectedColor && (
                <p className="font-inter text-sm text-gray-600 mt-2">
                  Selected: {selectedColor}
                </p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </motion.button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full h-14 bg-yego-red hover:bg-red-700 font-poppins font-semibold text-lg"
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="mr-2" size={20} />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </motion.div>
              
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-14 border-yego-red text-yego-red hover:bg-yego-red hover:text-white font-poppins font-semibold text-lg"
                >
                  Buy Now
                </Button>
              </motion.div>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="font-poppins font-semibold text-lg mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 font-inter text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-yego-red rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
              >
                <Truck className="text-yego-red" size={20} />
                <span className="font-inter text-sm">Free shipping on orders over $100</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <RotateCcw className="text-yego-red" size={20} />
                <span className="font-inter text-sm">30-day return policy</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <Shield className="text-yego-red" size={20} />
                <span className="font-inter text-sm">2-year warranty included</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
