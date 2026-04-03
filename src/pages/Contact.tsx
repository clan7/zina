import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Instagram,
  Facebook,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import type { StoreSettings } from '@/data/products';
import { toast } from 'sonner';

interface ContactProps {
  settings: StoreSettings;
}

const Contact = ({ settings }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('تم إرسال رسالتك بنجاح، سنتواصل معك قريباً');
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const whatsappUrl = `https://wa.me/${settings.whatsapp.replace(/\+/g, '')}?text=مرحباً، أريد الاستفسار عن خدمات تنجيد السيارات`;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-sm font-medium mb-4 block">تواصل معنا</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">نحن هنا لمساعدتك</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            تواصل معنا للاستفسارات أو لطلب عرض سعر مخصص لسيارتك
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Location */}
            <div className="luxury-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">الموقع</h3>
                  <p className="text-gray-400 text-sm mb-3">{settings.address}</p>
                  <a 
                    href={settings.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#d4af37] text-sm hover:underline"
                  >
                    عرض على الخريطة
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="luxury-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">الهاتف</h3>
                  <p className="text-gray-400 text-sm mb-3">{settings.phone}</p>
                  <a 
                    href={`tel:${settings.phone}`}
                    className="inline-flex items-center gap-2 text-[#d4af37] text-sm hover:underline"
                  >
                    اتصل الآن
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="luxury-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">واتساب</h3>
                  <p className="text-gray-400 text-sm mb-3">{settings.whatsapp}</p>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-500 text-sm hover:underline"
                  >
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="luxury-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-400 text-sm mb-3">{settings.email}</p>
                  <a 
                    href={`mailto:${settings.email}`}
                    className="inline-flex items-center gap-2 text-[#d4af37] text-sm hover:underline"
                  >
                    إرسال بريد
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="luxury-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">أوقات العمل</h3>
                  <p className="text-gray-400 text-sm">{settings.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="luxury-card p-6 rounded-2xl">
              <h3 className="font-bold text-white mb-4">تابعنا</h3>
              <div className="flex items-center gap-3">
                <a 
                  href={`https://instagram.com/${settings.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href={`https://facebook.com/${settings.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href={`https://tiktok.com/@${settings.tiktok.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="luxury-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="luxury-input w-full px-4 py-3 rounded-xl"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">رقم الجوال *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="luxury-input w-full px-4 py-3 rounded-xl"
                      placeholder="05xxxxxxxx"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="luxury-input w-full px-4 py-3 rounded-xl"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">الموضوع *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="luxury-input w-full px-4 py-3 rounded-xl"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="inquiry">استفسار عام</option>
                      <option value="quote">طلب عرض سعر</option>
                      <option value="appointment">حجز موعد</option>
                      <option value="complaint">شكوى</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">الرسالة *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="luxury-input w-full px-4 py-3 rounded-xl resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-btn py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
