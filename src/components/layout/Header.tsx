
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, User, Search, ChevronDown } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const location = useLocation();
  const { cartCount, isMenuOpen, setIsMenuOpen, user } = useStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const clothingCategories = [
    { name: 'All Clothing', href: '/shop/clothing' },
    { name: 'New Arrivals', href: '/shop/new' },
    { name: 'T-Shirts', href: '/shop/tshirts' },
    { name: 'Hoodies', href: '/shop/hoodies' },
    { name: 'Pants', href: '/shop/pants' },
    { name: 'Jackets', href: '/shop/jackets' },
    { name: 'Sale', href: '/shop/sale' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-poppins font-black text-2xl lg:text-3xl tracking-tight"
            >
              <span className="text-yego-red">Y</span>
              <span className="text-yego-black">EGO</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-inter font-medium hover:text-yego-red">
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-white">
                      <div className="space-y-2">
                        {clothingCategories.map((category) => (
                          <NavigationMenuLink key={category.name} asChild>
                            <Link
                              to={category.href}
                              className="block px-3 py-2 text-sm font-inter hover:bg-gray-100 hover:text-yego-red rounded-md transition-colors"
                            >
                              {category.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-inter font-medium transition-colors hover:text-yego-red ${
                  location.pathname === item.href ? 'text-yego-red' : 'text-gray-900'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yego-red"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden lg:flex"
            >
              <Search size={20} />
            </Button>

            <Link to={user ? '/dashboard' : '/auth'}>
              <Button variant="ghost" size="sm">
                <User size={20} />
              </Button>
            </Link>

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-yego-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 py-4"
            >
              <input
                type="text"
                placeholder="Search clothing..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yego-red"
                autoFocus
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Shop Clothing</h3>
                <div className="space-y-2 pl-4">
                  {clothingCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-inter py-1 hover:text-yego-red transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-inter font-medium py-2 hover:text-yego-red transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <input
                  type="text"
                  placeholder="Search clothing..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yego-red"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
