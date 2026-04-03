import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Percent, 
  Clock, 
  Gift,
  Tag,
  Check,
  Copy
} from 'lucide-react';
import { defaultProducts } from '@/data/products';
import { toast } from 'sonner';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: number;
  code: string;
  validUntil: string;
  image: string;
  products?: number[];
  minOrder?: number;
  terms: string[];
}

const Offers = () => {
  const [products, setProducts] = useState<Product[]>(defaultProducts);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  const offers: Offer[] = [
    {
      id: 1,
      title: "عرض الطقم الكامل",
      description: "احصل على خصم 20% عند طلب تنجيد كامل للمقاعد الأمامية والخلفية",
      discount: 20,
      code: "FULL20",
      validUntil: "2025-05-01",
      image: "/images/products5.png",
      products: [17, 18],
      minOrder: 5000,
      terms: [
        "العرض ساري على الطلبات فوق 5000 ر.س",
        "لا يمكن الجمع مع عروض أخرى",
        "العرض ساري حتى نهاية الشهر"
      ]
    },
    {
      id: 2,
      title: "عرض الإضاءة المجانية",
      description: "احصل على نظام إضاءة محيطية مجاني مع أي طلب تنجيد فاخر",
      discount: 100,
      code: "LIGHTFREE",
      validUntil: "2025-04-30",
      image: "/images/products4.png",
      products: [15, 26, 27],
      terms: [
        "العرض ساري على طلبات التنجيد الفاخر فقط",
        "قيمة الإضاءة المجانية تصل إلى 2500 ر.س",
        "العرض محدود الكمية"
      ]
    },
    {
      id: 3,
      title: "خصم العائلة",
      description: "خصم 15% على طقم العائلة والطفل الكامل",
      discount: 15,
      code: "FAMILY15",
      validUntil: "2025-04-20",
      image: "/images/products5.png",
      products: [20],
      terms: [
        "العرض ساري على طقم العائلة فقط",
        "يشمل جميع منتجات الأطفال والحماية",
        "لا يمكن الجمع مع خصومات أخرى"
      ]
    },
    {
      id: 4,
      title: "عرض الصيانة المجانية",
      description: "صيانة مجانية لمدة سنة مع أي طلب تنجيد جديد",
      discount: 100,
      code: "MAINTAIN",
      validUntil: "2025-12-31",
      image: "/images/products1.png",
      terms: [
        "الصيانة تشمل التنظيف والتجديد",
        "صالحة لمدة سنة من تاريخ الطلب",
        "يمكن استخدامها 4 مرات في السنة"
      ]
    }
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('تم نسخ الكود');
  };

  const getDiscountedPrice = (productId: number, discount: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return null;
    return Math.round(product.price * (1 - discount / 100));
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-sm font-medium mb-4 block">عروض حصرية</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">أفضل العروض والخصومات</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            استفد من عروضنا الحصرية ووفّر أكثر على طلباتك
          </p>
        </div>

        {/* Featured Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b8860b]"></div>
          <div className="relative z-10 px-8 py-12 md:px-16 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-right">
                <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full mb-4">
                  <Gift className="w-5 h-5" />
                  <span className="text-sm font-medium">عرض محدود</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  خصم يصل إلى 25%
                </h2>
                <p className="text-black/80 text-lg mb-6">
                  على جميع خدمات التنجيد الفاخر هذا الشهر
                </p>
                <Link to="/quick-order" className="inline-block bg-black text-[#d4af37] px-8 py-4 rounded-xl font-bold hover:bg-black/80 transition-colors">
                  احصل على العرض
                </Link>
              </div>
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-black/10 flex items-center justify-center">
                <Percent className="w-16 h-16 md:w-24 md:h-24 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {offers.map((offer) => (
            <div key={offer.id} className="luxury-card rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#d4af37] text-black px-4 py-2 rounded-full font-bold">
                    خصم {offer.discount}%
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-white text-sm">حتى {offer.validUntil}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-gray-400 mb-4">{offer.description}</p>
                
                {/* Code */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-[#d4af37]" />
                    <span className="text-[#d4af37] font-mono font-bold">{offer.code}</span>
                  </div>
                  <button
                    onClick={() => copyCode(offer.code)}
                    className="p-3 rounded-lg bg-[#d4af37] text-black hover:bg-[#f4d03f] transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>

                {/* Terms */}
                <div className="space-y-2 mb-6">
                  {offer.terms.map((term, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{term}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/quick-order?offer=${offer.code}`}
                  className="block w-full gold-btn py-3 rounded-xl font-bold text-center"
                >
                  استخدم العرض
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <div className="bg-[#111111] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">كيفية استخدام العروض</h2>
            <p className="text-gray-400">خطوات بسيطة للاستفادة من خصوماتنا</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: 1, title: "اختر العرض", desc: "تصفح العروض واختر ما يناسبك" },
              { step: 2, title: "انسخ الكود", desc: "اضغط على زر النسخ لحفظ الكود" },
              { step: 3, title: "أرسل الطلب", desc: "استخدم الكود عند إرسال الطلب" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">{item.step}</span>
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
