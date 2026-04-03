import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook,
  Crown,
  ExternalLink
} from 'lucide-react';
import type { StoreSettings } from '@/data/products';

interface FooterProps {
  settings: StoreSettings;
}

const Footer = ({ settings }: FooterProps) => {
  const quickLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/products', label: 'المنتجات' },
    { path: '/services', label: 'الخدمات' },
    { path: '/offers', label: 'العروض' },
    { path: '/about', label: 'من نحن' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  const services = [
    'تنجيد المقاعد الفاخر',
    'تخصيص الديكور الداخلي',
    'تركيب الإضاءة المحيطية',
    'صيانة وتجديد',
  ];

  return (
    <footer className="footer-section pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
                <Crown className="w-7 h-7 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold gold-text">{settings.brandName}</h3>
                <p className="text-xs text-gray-400">فخامة تنجيد السيارات</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              نقدم خدمات تنجيد سيارات فاخرة بأعلى معايير الجودة، 
              نستخدم أفضل المواد ونضمن رضا عملائنا الكامل.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={`https://instagram.com/${settings.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://facebook.com/${settings.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={`https://tiktok.com/@${settings.tiktok.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={settings.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>{settings.address}</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${settings.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span>{settings.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span>{settings.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span>{settings.workingHours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-right">
            © 2025 {settings.brandName}. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
