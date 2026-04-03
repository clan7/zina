import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Crown } from 'lucide-react';
import type { StoreSettings } from '@/data/products';

interface NavbarProps {
  settings: StoreSettings;
}

const Navbar = ({ settings }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/products', label: 'المنتجات' },
    { path: '/services', label: 'الخدمات' },
    { path: '/offers', label: 'العروض' },
    { path: '/about', label: 'من نحن' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Crown className="w-6 h-6 text-black" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gold-text">{settings.brandName}</h1>
              <p className="text-xs text-gray-400">فخامة تنجيد السيارات</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-[#d4af37] nav-active'
                    : 'text-gray-300 hover:text-[#d4af37] hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${settings.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">اتصل الآن</span>
            </a>
            <Link
              to="/quick-order"
              className="gold-btn px-6 py-2.5 rounded-lg text-sm"
            >
              طلب سريع
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-white/5 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/98 backdrop-blur-md border-t border-[#2a2a2a] transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                isActive(link.path)
                  ? 'text-[#d4af37] bg-[#d4af37]/10'
                  : 'text-gray-300 hover:text-[#d4af37] hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <a
              href={`tel:${settings.phone}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-[#d4af37]/30 text-[#d4af37]"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">اتصل الآن</span>
            </a>
            <Link
              to="/quick-order"
              onClick={() => setIsOpen(false)}
              className="block w-full gold-btn px-4 py-3 rounded-lg text-center font-medium"
            >
              طلب سريع
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
