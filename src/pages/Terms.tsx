import type { StoreSettings } from '@/data/products';

interface TermsProps {
  settings: StoreSettings;
}

const Terms = ({ settings }: TermsProps) => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#d4af37] text-sm font-medium mb-4 block">الشروط</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">الشروط والأحكام</h1>
          <p className="text-gray-400">
            يرجى قراءة هذه الشروط بعناية قبل استخدام موقعنا
          </p>
        </div>

        <div className="luxury-card p-8 rounded-2xl space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. قبول الشروط</h2>
            <p className="text-gray-400 leading-relaxed">
              باستخدامك لموقع {settings.brandName}، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
              إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. الخدمات</h2>
            <p className="text-gray-400 leading-relaxed">
              نقدم خدمات تنجيد السيارات ومنتجات زينة السيارات. جميع الخدمات مشروطة بالتوفر 
              وقد تخضع لقيود إضافية حسب نوع السيارة والخدمة المطلوبة.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. الطلبات والدفع</h2>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">
                <strong className="text-white">3.1</strong> يجب تقديم طلب دقيق يتضمن جميع المعلومات المطلوبة.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">3.2</strong> الأسعار المعروضة تشمل الضرائب ما لم يُذكر خلاف ذلك.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">3.3</strong> الدفع يكون كاش أو تحويل بنكي أو تقسيط حسب الاتفاق.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">3.4</strong> قد يُطلب دفع عربون بنسبة 50% قبل بدء العمل.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. الضمان</h2>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">
                <strong className="text-white">4.1</strong> نقدم ضماناً على أعمال التنجيد يصل إلى 5 سنوات حسب نوع الخدمة.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">4.2</strong> الضمان يغطي عيوب الصناعة والمواد فقط.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">4.3</strong> لا يغطي الضمان الأضرار الناتجة عن:
              </p>
              <ul className="space-y-2 mr-6 mt-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                  <span>الاستخدام غير السليم</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                  <span>الحوادث أو التصادم</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                  <span>التعديلات من طرف ثالث</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                  <span>عوامل الطبيعة</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. سياسة الإلغاء والاسترجاع</h2>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">
                <strong className="text-white">5.1</strong> يمكن إلغاء الطلب قبل بدء العمل مع استرداد كامل المبلغ.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">5.2</strong> بعد بدء العمل، لا يمكن إلغاء الطلب أو استرداد المبلغ.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">5.3</strong> في حالة عدم الرضا عن الخدمة، يجب إبلاغنا خلال 48 ساعة من الاستلام.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. الملكية الفكرية</h2>
            <p className="text-gray-400 leading-relaxed">
              جميع المحتويات على هذا الموقع (النصوص، الصور، الشعارات) هي ملك لـ {settings.brandName} 
              ومحمية بموجب قوانين حقوق النشر. لا يجوز نسخ أو إعادة إنتاج أي محتوى دون إذن كتابي مسبق.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. حدود المسؤولية</h2>
            <p className="text-gray-400 leading-relaxed">
              {settings.brandName} غير مسؤولة عن أي أضرار غير مباشرة أو تبعية ناتجة عن استخدام 
              خدماتنا. مسؤوليتنا تقتصر على قيمة الخدمة المدفوعة فقط.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. التعديلات</h2>
            <p className="text-gray-400 leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التعديلات على هذه الصفحة 
              ويعتبر استمرار استخدامك للموقع قبولاً للشروط المعدلة.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. القانون الساري</h2>
            <p className="text-gray-400 leading-relaxed">
              تخضع هذه الشروط لقوانين المملكة العربية السعودية، ويكون الاختصاص القضائي 
              للمحاكم السعودية في أي نزاع ينشأ عن استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. التواصل</h2>
            <p className="text-gray-400 leading-relaxed">
              لأي استفسارات حول هذه الشروط، يمكنك التواصل معنا عبر:
            </p>
            <div className="mt-4 space-y-2 text-gray-400">
              <p>البريد الإلكتروني: {settings.email}</p>
              <p>الهاتف: {settings.phone}</p>
              <p>العنوان: {settings.address}</p>
            </div>
          </section>

          <div className="pt-8 border-t border-[#2a2a2a]">
            <p className="text-gray-500 text-sm text-center">
              آخر تحديث: يناير 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
