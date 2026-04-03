import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sofa, 
  Check, 
  ArrowLeft,
  Clock,
  Shield,
  Award,
  Sparkles
} from 'lucide-react';
import { services } from '@/data/products';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const serviceDetails: Record<number, {
    fullDescription: string;
    process: string[];
    pricing: string;
    duration: string;
    warranty: string;
  }> = {
    1: {
      fullDescription: "نقدم خدمة تنجيد المقاعد الفاخر باستخدام أجود أنواع الجلود الطبيعية والألكانتارا المستوردة من أوروبا. فريقنا المتخصص يضمن لك أعلى مستويات الجودة والدقة في التنفيذ.",
      process: [
        "فحص وقياس المقاعد الأصلية",
        "اختيار الخامة واللون المناسب",
        "إزالة التنجيد القديم",
        "تركيب التنجيد الجديد بدقة",
        "فحص جودة نهائي وتسليم"
      ],
      pricing: "يبدأ من 2,500 ر.س للمقعد الواحد",
      duration: "3-5 أيام عمل",
      warranty: "5 سنوات شامل"
    },
    2: {
      fullDescription: "خدمة التخصيص الكامل للديكور الداخلي تتيح لك تصميم داخلية سيارتك بالشكل الذي تحلم به. من الألوان إلى الخياطة والتطريز، كل شيء حسب رغبتك.",
      process: [
        "استشارة تصميم مع الخبير",
        "عرض نماذج وعينات",
        "تصميم 3D للمقصورة",
        "تنفيذ التصميم المختار",
        "مراجعة نهائية وتسليم"
      ],
      pricing: "يبدأ من 8,500 ر.س للطقم الكامل",
      duration: "5-7 أيام عمل",
      warranty: "3 سنوات شامل"
    },
    3: {
      fullDescription: "نظام إضاءة LED محيطية متعدد الألوان يضفي على مقصورة سيارتك أجواءً فاخرة وساحرة. يتم التحكم بالإضاءة عبر تطبيق مخصص على الهاتف.",
      process: [
        "تخطيط مواقع الإضاءة",
        "تركيب شرائط LED المخفية",
        "برمجة نظام التحكم",
        "اختبار جميع الألوان والأوضاع",
        "تسليم مع شرح الاستخدام"
      ],
      pricing: "يبدأ من 1,200 ر.س",
      duration: "1-2 يوم عمل",
      warranty: "سنتين شامل"
    },
    4: {
      fullDescription: "خدمات الصيانة الدورية والتجديد لضمان استمرار جودة وجمال داخلية سيارتك. تشمل التنظيف العميق والإصلاحات الصغيرة.",
      process: [
        "فحص شامل للداخلية",
        "تنظيف عميق بالبخار",
        "إصلاح أي تلفيات",
        "تجديد طبقة الحماية",
        "تلميع نهائي"
      ],
      pricing: "يبدأ من 500 ر.س",
      duration: "4-8 ساعات",
      warranty: "ضمان 6 أشهر على الإصلاحات"
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-sm font-medium mb-4 block">خدماتنا</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">خدمات فاخرة لسيارتك</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الاحترافية لتحويل داخلية سيارتك إلى تحفة فنية حقيقية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="luxury-card p-8 rounded-2xl cursor-pointer group"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Sofa className="w-8 h-8 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-[#d4af37]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
                <button className="flex items-center gap-2 text-[#d4af37] font-medium group-hover:gap-3 transition-all">
                  اطلب الخدمة
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#d4af37] text-sm font-medium mb-4 block">لماذا نحن</span>
            <h2 className="text-3xl font-bold text-white mb-4">اختيارك الأفضل</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "خبرة 15+ عام", desc: "في مجال تنجيد السيارات" },
              { icon: Shield, title: "ضمان شامل", desc: "يصل إلى 5 سنوات" },
              { icon: Sparkles, title: "مواد أوروبية", desc: "أعلى جودة عالمية" },
              { icon: Clock, title: "سرعة تنفيذ", desc: "أقل وقت ممكن" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-[#b8860b]/10"></div>
          <div className="absolute inset-0 bg-[#0a0a0a]/80"></div>
          <div className="relative z-10 px-8 py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              هل لديك استفسار عن خدماتنا؟
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              فريقنا جاهز للإجابة على جميع استفساراتك وتقديم استشارة مجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="gold-btn px-8 py-4 rounded-xl font-bold">
                تواصل معنا
              </Link>
              <Link to="/quick-order" className="outline-gold-btn px-8 py-4 rounded-xl font-medium">
                اطلب خدمة
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="modal-content max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-white text-right text-2xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
                    <Sofa className="w-6 h-6 text-black" />
                  </div>
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {serviceDetails[selectedService.id]?.fullDescription || selectedService.description}
                </p>

                {serviceDetails[selectedService.id] && (
                  <>
                    {/* Process */}
                    <div className="mb-6">
                      <h4 className="text-white font-bold mb-4">خطوات العمل</h4>
                      <div className="space-y-3">
                        {serviceDetails[selectedService.id].process.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center flex-shrink-0">
                              <span className="text-[#d4af37] text-sm font-bold">{idx + 1}</span>
                            </div>
                            <span className="text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-[#1a1a1a] p-4 rounded-xl">
                        <p className="text-gray-400 text-sm mb-1">السعر</p>
                        <p className="text-[#d4af37] font-bold">{serviceDetails[selectedService.id].pricing}</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-xl">
                        <p className="text-gray-400 text-sm mb-1">المدة</p>
                        <p className="text-white font-bold">{serviceDetails[selectedService.id].duration}</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-xl">
                        <p className="text-gray-400 text-sm mb-1">الضمان</p>
                        <p className="text-white font-bold">{serviceDetails[selectedService.id].warranty}</p>
                      </div>
                    </div>
                  </>
                )}

                <Link
                  to={`/quick-order?service=${selectedService.id}`}
                  className="block w-full gold-btn py-4 rounded-xl font-bold text-center"
                >
                  اطلب هذه الخدمة
                </Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
