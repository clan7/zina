import type { StoreSettings } from '@/data/products';

interface PrivacyProps {
  settings: StoreSettings;
}

const Privacy = ({ settings }: PrivacyProps) => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#d4af37] text-sm font-medium mb-4 block">الخصوصية</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">سياسة الخصوصية</h1>
          <p className="text-gray-400">
            نحن نهتم بخصوصيتك ونلتزم بحماية بياناتك الشخصية
          </p>
        </div>

        <div className="luxury-card p-8 rounded-2xl space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. مقدمة</h2>
            <p className="text-gray-400 leading-relaxed">
              تلتزم {settings.brandName} بحماية خصوصيتك وبياناتك الشخصية. 
              توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدامك لموقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. البيانات التي نجمعها</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              قد نجمع المعلومات التالية عند استخدامك لموقعنا:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>الاسم الكامل</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>رقم الهاتف</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>عنوان البريد الإلكتروني</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>معلومات السيارة (النوع، الموديل)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. كيفية استخدام البيانات</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              نستخدم بياناتك للأغراض التالية:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>معالجة طلباتك وطلبات الخدمة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>التواصل معك بخصوص طلباتك</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>تحسين خدماتنا وتجربة المستخدم</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>إرسال العروض والتحديثات (بموافقتك)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. حماية البيانات</h2>
            <p className="text-gray-400 leading-relaxed">
              نتخذ إجراءات أمنية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التعديل 
              أو الإفصاح أو الإتلاف. نستخدم تقنيات تشفير حديثة لحماية البيانات الحساسة.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. مشاركة البيانات</h2>
            <p className="text-gray-400 leading-relaxed">
              لا نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة. قد نشارك البيانات فقط مع:
            </p>
            <ul className="space-y-2 text-gray-400 mt-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>مزودي الخدمات الذين يساعدوننا في تشغيل موقعنا</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>الجهات القانونية عند الضرورة</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. حقوقك</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              لديك الحق في:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>الوصول إلى بياناتك الشخصية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>تصحيح بياناتك غير الدقيقة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>حذف بياناتك (في ظروف معينة)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>الاعتراض على معالجة بياناتك</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. التواصل معنا</h2>
            <p className="text-gray-400 leading-relaxed">
              إذا كان لديك أي استفسارات حول سياسة الخصوصية، يمكنك التواصل معنا عبر:
            </p>
            <div className="mt-4 space-y-2 text-gray-400">
              <p>البريد الإلكتروني: {settings.email}</p>
              <p>الهاتف: {settings.phone}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. تحديثات السياسة</h2>
            <p className="text-gray-400 leading-relaxed">
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة 
              مع تاريخ التحديث.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              آخر تحديث: يناير 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
