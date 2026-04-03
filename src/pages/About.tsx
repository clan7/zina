import { 
  Award, 
  Users, 
  Clock, 
  Star,
  Check,
  Target,
  Eye,
  Heart
} from 'lucide-react';
import type { StoreSettings } from '@/data/products';

interface AboutProps {
  settings: StoreSettings;
}

const About = ({ settings }: AboutProps) => {
  const stats = [
    { icon: Clock, value: "15+", label: "سنة خبرة" },
    { icon: Users, value: "5000+", label: "عميل سعيد" },
    { icon: Award, value: "50+", label: "جائزة" },
    { icon: Star, value: "4.8", label: "تقييم" },
  ];

  const values = [
    { icon: Target, title: "الجودة", desc: "نستخدم فقط أفضل المواد العالمية" },
    { icon: Eye, title: "الدقة", desc: "اهتمام بالتفاصيل في كل عملية" },
    { icon: Heart, title: "الشغف", desc: "نحب ما نعمل ويتجلى ذلك في إبداعنا" },
    { icon: Check, title: "الأمانة", desc: "مصداقية تامة في التعامل" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-sm font-medium mb-4 block">من نحن</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">قصة نجاح {settings.brandName}</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            منذ أكثر من 15 عاماً، نقدم خدمات تنجيد سيارات فاخرة بأعلى معايير الجودة العالمية
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">قصتنا</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                بدأت مؤسسة البراك رحلتها في عالم تنجيد السيارات منذ أكثر من 15 عاماً، 
                بحلم بسيط: تقديم خدمة فاخرة تليق بأصحاب السيارات الفاخرة في المملكة العربية السعودية.
              </p>
              <p>
                منذ ذلك الحين، نمونا من ورشة صغيرة إلى مؤسسة رائدة في مجال تنجيد السيارات، 
                نخدم آلاف العملاء سنوياً ونحول داخلية سياراتهم إلى تحف فنية حقيقية.
              </p>
              <p>
                نفخر بفريقنا المكون من أكثر من 30 فنياً متخصصاً، جميعهم مدربون على أعلى مستوى 
                ويستخدمون أحدث التقنيات والمواد العالمية.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="/images/products5.png"
                alt="البراك لتنجيد السيارات"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-3xl font-bold text-black block">15+</span>
                <span className="text-black/70 text-sm">سنة</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="luxury-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#d4af37]" />
              </div>
              <span className="text-3xl font-bold gold-text block mb-2">{stat.value}</span>
              <span className="text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">قيمنا</h2>
            <p className="text-gray-400">المبادئ التي نؤمن بها ونعمل وفقها</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="luxury-card p-6 rounded-2xl text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img
              src="/images/products1.png"
              alt="لماذا تختارنا"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-white mb-6">لماذا تختار {settings.brandName}؟</h2>
            <div className="space-y-4">
              {[
                "مواد أوروبية فاخرة بأعلى جودة",
                "فريق فني متخصص ومدرب",
                "ضمان يصل إلى 5 سنوات",
                "سرعة في التنفيذ والتسليم",
                "أسعار تنافسية مع جودة عالية",
                "خدمة عملاء متميزة على مدار الساعة"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="luxury-card p-8 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">رسالتنا</h3>
            <p className="text-gray-400 leading-relaxed">
              تقديم خدمات تنجيد سيارات فاخرة بأعلى معايير الجودة العالمية، 
              مع التركيز على رضا العميل وتجاوز توقعاته في كل عملية ننجزها.
            </p>
          </div>
          <div className="luxury-card p-8 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">رؤيتنا</h3>
            <p className="text-gray-400 leading-relaxed">
              أن نكون الخيار الأول في المملكة العربية السعودية لتنجيد السيارات الفاخرة، 
              وأن نصبح علامة تجارية موثوقة عالمياً.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
