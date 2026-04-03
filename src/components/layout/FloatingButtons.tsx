import { Phone, MessageCircle } from 'lucide-react';
import type { StoreSettings } from '@/data/products';

interface FloatingButtonsProps {
  settings: StoreSettings;
}

const FloatingButtons = ({ settings }: FloatingButtonsProps) => {
  const whatsappUrl = `https://wa.me/${settings.whatsapp.replace(/\+/g, '')}?text=مرحباً، أريد الاستفسار عن خدمات تنجيد السيارات`;

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${settings.phone}`}
        className="phone-float"
        aria-label="اتصل بنا"
      >
        <Phone className="w-7 h-7 text-black" />
      </a>
    </>
  );
};

export default FloatingButtons;
