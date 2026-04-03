import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Shield, 
  Clock, 
  Award,
  ChevronLeft,
  ChevronRight,
  Sofa,
  Lightbulb,
  Palette,
  Wrench
} from 'lucide-react';
import { defaultProducts, testimonials, faqs } from '@/data/products';
import type { StoreSettings } from '@/data/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface HomeProps {
  settings: StoreSettings;
}

const Home = ({ settings }: HomeProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  // Featured products
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  // Hero slides
  const heroSlides = [
    {
      title: "فخامة تنجيد السيارات",
      subtitle: "تجربة قيادة لا مثيل لها",
      description: "نقدم خدمات تنجيد سيارات فاخرة بأعلى معايير الجودة العالمية",
      image: "/images/products1.png"
    },
    {
      title: "تخصيص كامل للداخلية",
      subtitle: "حسب ذوقك الفريد",
      description: "صمم داخلية سيارتك بالطريقة التي تحلم بها",
      image: "/images/products5.png"
    },
    {
      title: "إضاءة محيطية ساحرة",
      subtitle: "أجواء فاخرة في كل رحلة",
      description: "نظام إضاءة LED متعدد الألوان يتحكم به من تطبيقك",
      image: "/images/products4.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const features = [
    { icon: Shield, title: "ضمان 5 سنوات", desc: "على جميع أعمال التنجيد" },
    { icon: Clock, title: "سرعة التنفيذ", desc: "3-7 أيام عمل فقط" },
    { icon: Award, title: "جودة عالمية", desc: "مواد أوروبية فاخرة" },
    { icon: Star, title: "4.8 تقييم", desc: "من أكثر من 60 عميل" },
  ];

  const services = [
    { icon: Sofa, title: "تنجيد المقاعد", desc: "جلد طبيعي وألكانتارا فاخرة" },
    { icon: Palette, title: "تخصيص الديكور", desc: "تصميم فريد حسب ذوقك" },
    { icon: Lightbulb, title: "الإضاءة المحيطية", desc: "LED متعدد الألوان" },
    { icon: Wrench, title: "الصيانة والتجديد", desc: "خدمات ما بعد البيع" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-right order-2 lg:order-1">
              <div className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
                <span className="text-[#d4af37] text-sm font-medium">{settings.brandName}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="gold-text">{heroSlides[currentSlide].title}</span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl text-white mb-6">
                {heroSlides[currentSlide].subtitle}
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                {heroSlides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products" className="gold-btn px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2">
                  تصفح المنتجات
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="outline-gold-btn px-8 py-4 rounded-xl text-lg font-medium flex items-center justify-center gap-2">
                  احصل على عرض
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-8">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-8 bg-[#d4af37]' 
                        : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-3xl"></div>
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-contain rounded-3xl"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1a1a1a]/80 border border-[#2a2a2a] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1a1a1a]/80 border border-[#2a2a2a] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm font-medium mb-4 block">خدماتنا المميزة</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">حلول شاملة لسيارتك</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">نقدم مجموعة متكاملة من الخدمات الفاخرة لتحويل داخلية سيارتك إلى تحفة فنية</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="luxury-card p-8 rounded-2xl text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-[#d4af37] text-sm font-medium mb-4 block">منتجات مميزة</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">أفضل منتجاتنا</h2>
            </div>
            <Link to="/products" className="outline-gold-btn px-6 py-3 rounded-xl flex items-center gap-2">
              عرض الكل
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="luxury-card rounded-2xl overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 badge-gold">{product.badge}</span>
                  )}
                  {product.new && !product.badge && (
                    <span className="absolute top-4 right-4 badge-new">جديد</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="price-tag">{product.price} ر.س</span>
                      {product.originalPrice && (
                        <span className="original-price mr-2">{product.originalPrice} ر.س</span>
                      )}
                    </div>
                    <Link 
                      to={`/quick-order?product=${product.id}`}
                      className="w-10 h-10 rounded-lg bg-[#d4af37] flex items-center justify-center text-black hover:bg-[#f4d03f] transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm font-medium mb-4 block">آراء عملائنا</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">ما يقوله عملاؤنا</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="luxury-card p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.comment}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
                    <span className="text-black font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.car}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm font-medium mb-4 block">الأسئلة الشائعة</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">كل ما تريد معرفته</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="luxury-card rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-white hover:text-[#d4af37] text-right py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 text-right">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-[#b8860b]/10"></div>
            <div className="absolute inset-0 bg-[#0a0a0a]/80"></div>
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                جاهز لتحويل سيارتك؟
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                احصل على استشارة مجانية وعرض سعر مخصص لسيارتك. فريقنا جاهز لخدمتك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quick-order" className="gold-btn px-8 py-4 rounded-xl text-lg font-bold">
                  اطلب الآن
                </Link>
                <Link to="/contact" className="outline-gold-btn px-8 py-4 rounded-xl text-lg font-medium">
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
