// بيانات المنتجات - قابلة للتعديل من لوحة التحكم

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  featured?: boolean;
  new?: boolean;
  badge?: string;
}

export interface StoreSettings {
  name: string;
  brandName: string;
  logo: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  workingHours: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  bankName: string;
  bankAccount: string;
  iban: string;
}

// إعدادات المتجر الافتراضية
export const defaultStoreSettings: StoreSettings = {
  name: "تنجيد سيارات - مؤسسة البراك فرع 4",
  brandName: "البراك لتنجيد السيارات",
  logo: "/images/logo.png",
  phone: "+966570255802",
  whatsapp: "+966570255802",
  email: "info@alburak-car.com",
  address: "طريق العروبة، المعذر الشمالي، الرياض 12211",
  googleMapsUrl: "https://maps.app.goo.gl/7weKru2US38hzHP59",
  workingHours: "السبت - الخميس: 8:00 ص - 2:30 م",
  instagram: "@alburak_car",
  tiktok: "@alburak_car",
  facebook: "alburakcar",
  bankName: "البنك الأهلي السعودي",
  bankAccount: "************",
  iban: "SA**********************",
};

// المنتجات الافتراضية
export const defaultProducts: Product[] = [
  // الصورة 1 - المنتجات 1-4
  {
    id: 1,
    name: "أغطية المقاعد المخصصة",
    description: "تنجيد المقاعد الفاخر بأعلى جودة من الجلد والألكانتارا، خياطة دقيقة وتصميمات حصرية",
    price: 2500,
    image: "/images/products1.png",
    category: "تنجيد",
    featured: true,
    badge: "الأكثر مبيعاً"
  },
  {
    id: 2,
    name: "فرش الأرضيات المخصص 3D/5D",
    description: "حصائر مخصصة بالكامل (3D) بحواف مرتفعة وحماية مفاضة للماء والأتربة",
    price: 800,
    image: "/images/products1.png",
    category: "أرضيات",
    featured: true
  },
  {
    id: 3,
    name: "أغطية المقود الفاخرة",
    description: "أغطية مقود احترافية مخملية أو جلدية فاخرة، ملمس ناعم وأنيق",
    price: 350,
    image: "/images/products1.png",
    category: "مقود",
  },
  {
    id: 4,
    name: "منظمات السيارة الداخلية",
    description: "حلول تنظيم ذكية وعملية لمقصورتك، تجمع بين الأناقة والسهولة",
    price: 250,
    image: "/images/products1.png",
    category: "تنظيم",
  },
  // الصورة 2 - المنتجات 5-8
  {
    id: 5,
    name: "وسائد الرقبة والظهر",
    description: "وسائد دعم مريحة بتقنيات عالية، تصنع من بقايا الجلد أو القماش الفاخر",
    price: 180,
    image: "/images/products2.png",
    category: "راحة",
  },
  {
    id: 6,
    name: "أغطية أحزمة الأمان المبطنة",
    description: "أشرطة مبطنة أنيقة تُلف حول أحزمة الأمان لتخفيف الضغط على الكتف والرقبة",
    price: 120,
    image: "/images/products2.png",
    category: "راحة",
  },
  {
    id: 7,
    name: "منظم حاجب الشمس",
    description: "قطعة عملية تثبت على حاجب الشمس وتحتوي على جيوب منظمة لحفظ الرخص والبطاقات",
    price: 150,
    image: "/images/products2.png",
    category: "تنظيم",
  },
  {
    id: 8,
    name: "غطاء الطبلون",
    description: "غطاء مصمم لتغطية سطح الطبلون بالكامل، يحميه من أشعة الشمس المباشرة والتشققات",
    price: 200,
    image: "/images/products2.png",
    category: "حماية",
  },
  // الصورة 3 - المنتجات 9-12
  {
    id: 9,
    name: "منظم الفراغ بين المقاعد",
    description: "منظم ذكي يعفن على الفضائية الحرارة ويحتفظ بها حول وصال أجملت المعتدل",
    price: 180,
    image: "/images/products3.png",
    category: "تنظيم",
    new: true
  },
  {
    id: 10,
    name: "منظم الشنطة الخلفية",
    description: "منظم الشنطة / صندوق المعاد وأفريف تساريت الطقوت والعرويلة الأنمل الفنطية بالسما",
    price: 350,
    image: "/images/products3.png",
    category: "تنظيم",
  },
  {
    id: 11,
    name: "غطاء ناقل الحركة بتصميم مبتكر",
    description: "هودي ناقل الحركة التمييدعات الستق أويسر الصاحبير، والعاظر",
    price: 150,
    image: "/images/products3.png",
    category: "تصميم",
    new: true
  },
  {
    id: 12,
    name: "وسادة مسند الذراع بجيوب",
    description: "وسادة مسند الذراع بجيوب جانبية، تتحمل وسادة مسند الذراع الذراع بجيوب جانبية",
    price: 280,
    image: "/images/products3.png",
    category: "راحة",
  },
  // الصورة 4 - المنتجات 13-16
  {
    id: 13,
    name: "أغطية رؤوس المقاعد المخصصة",
    description: "أغطية منفصلة لمساند الرأس، يمكن تنفيذها بنفس خامة المقاعد أو بخامة متباينة",
    price: 450,
    image: "/images/products4.png",
    category: "تنجيد",
  },
  {
    id: 14,
    name: "سلة مهملات سيارة فاخرة",
    description: "سلة صغيرة مصممة للسيارة، أو خامة فاخرة مقاوم للسوائل، أو خامة قابلة للتنظيف",
    price: 120,
    image: "/images/products4.png",
    category: "تنظيم",
  },
  {
    id: 15,
    name: "إضاءة محيطية داخلية مخفية",
    description: "ألواح جلد مثقب تخرج من خلفها ضوء ناعم ومتدرج، ليعطي تأثير الإضاءة المحيطية الفاخرة",
    price: 1200,
    image: "/images/products4.png",
    category: "إضاءة",
    featured: true,
    badge: "جديد"
  },
  {
    id: 16,
    name: "قطع Alcantara مع خياطة Diamond Stitch",
    description: "قطع ألكانتارا فاخرة مع خياطة ماسية بارزة تمنحها طابعاً فاخراً واحترافياً للغاية",
    price: 1800,
    image: "/images/products4.png",
    category: "تنجيد فاخر",
    featured: true
  },
  // الصورة 5 - المنتجات 17-20
  {
    id: 17,
    name: "طقم داخلي متكامل (شد وكالة)",
    description: "الغخامة التي تليق بك، بتفاصيل شخصية ترفع قيمة سيارتك",
    price: 8500,
    originalPrice: 10000,
    image: "/images/products5.png",
    category: "باقات",
    featured: true,
    badge: "باقة مميزة"
  },
  {
    id: 18,
    name: "نظام المقاعد القابل للتبديل",
    description: "غيّر مقعدك حسب مزاجك وموسمك بلمح البصر، مستقبل التخصيص هنا",
    price: 5500,
    image: "/images/products5.png",
    category: "باقات",
    new: true
  },
  {
    id: 19,
    name: "أغطية ومقاعد موسمية",
    description: "راحتك في كل فصل، استثمار ذكي لسيارتك طوال العام",
    price: 1500,
    image: "/images/products5.png",
    category: "موسمي",
  },
  {
    id: 20,
    name: "طقم العائلة والطفل",
    description: "حماية، تنظيم، وراحة لا تنتهي لكل رحلة عائلية",
    price: 2200,
    image: "/images/products5.png",
    category: "عائلي",
  },
  // الصورة 6 - المنتجات 21-23
  {
    id: 21,
    name: "طقم حماية الحيوانات الأليفة",
    description: "غطاء كامل مقاوم للماء والخدش، تصميم Hammock يمنع الاتساخ ويؤفر الراحة التامة",
    price: 950,
    image: "/images/products6.png",
    category: "حيوانات",
  },
  {
    id: 22,
    name: "خدمة تخصيص الاسم أو شعار السيارة",
    description: "طباعة اسم العميل، شعار السيارة، أو لون الخياطة المفضل، لمسة شخصية تعزز القيمة",
    price: 300,
    image: "/images/products6.png",
    category: "تخصيص",
  },
  {
    id: 23,
    name: "تنجيد مقاعد فاخر مخصص بالكامل",
    description: "تنجيد راقٍ بجلد Nappa أو Alcantara، خياطة Diamond Stitch حمراء، وتطريز شعار السيارة واسم العميل",
    price: 12000,
    image: "/images/products6.png",
    category: "تنجيد فاخر",
    featured: true,
    badge: "VIP"
  },
  // الصورة 7 - المنتجات 24-27
  {
    id: 24,
    name: "منظم مسند الذراع / الكونسول الوسطي",
    description: "حل ذكي ومظهر مرتب لمسند الذراع، جيوب ومساحة مبطنة",
    price: 320,
    image: "/images/products7.png",
    category: "تنظيم",
  },
  {
    id: 25,
    name: "حماية المقاعد الخلفية",
    description: "غطاء شامل مقاوم للماء والخدش، حماية حقيقية ونظافة تامة للأطفال أو الحيوانات",
    price: 750,
    image: "/images/products7.png",
    category: "حماية",
  },
  {
    id: 26,
    name: "نظام إضاءة محيطية متكامل",
    description: "وسائد أحزمة الأمان الفاخرة: راحة ناعمة ومجامل تفاصيل فاخرة",
    price: 2500,
    image: "/images/products7.png",
    category: "إضاءة",
    featured: true
  },
  {
    id: 27,
    name: "سقف داخلي فخم بإضاءة نجمية",
    description: "تخصيص فاخر يلف الانتباه، هدوء وراحة وتجربة سماء نجمية",
    price: 5500,
    image: "/images/products7.png",
    category: "سقف",
    featured: true,
    badge: "فاخر"
  },
  // الصورة 8 - المنتجات 28-29
  {
    id: 28,
    name: "طقم التحديث السريع للديكور الداخلي",
    description: "منظم وسط السيارة / Armrest Organizer، حل ذكي ومظهر مرتب لمسند الذراع",
    price: 1800,
    image: "/images/products8.png",
    category: "تحديث",
    new: true
  },
  {
    id: 29,
    name: "أغطية ناقل الحركة الاحترافية",
    description: "حماية كاملة للمقاعد الخلفية للأطفال أو الحيوانات، غطاء شامل مقاوم للماء والخدش",
    price: 280,
    image: "/images/products8.png",
    category: "ناقل حركة",
  },
];

// الفئات
export const categories = [
  { id: "all", name: "الكل", icon: "Grid3X3" },
  { id: "تنجيد", name: "تنجيد", icon: "Sofa" },
  { id: "تنجيد فاخر", name: "تنجيد فاخر", icon: "Crown" },
  { id: "أرضيات", name: "أرضيات", icon: "Layers" },
  { id: "إضاءة", name: "إضاءة", icon: "Lightbulb" },
  { id: "تنظيم", name: "تنظيم", icon: "Box" },
  { id: "حماية", name: "حماية", icon: "Shield" },
  { id: "راحة", name: "راحة", icon: "Heart" },
  { id: "باقات", name: "باقات", icon: "Package" },
];

// الخدمات
export const services = [
  {
    id: 1,
    title: "تنجيد المقاعد الفاخر",
    description: "تنجيد احترافي للمقاعد باستخدام أجود أنواع الجلود والألكانتارا",
    icon: "Sofa",
    features: ["جلد طبيعي فاخر", "ضمان 5 سنوات", "خياطة يدوية دقيقة"]
  },
  {
    id: 2,
    title: "تخصيص الديكور الداخلي",
    description: "تصميم داخلي مخصص حسب ذوقك ومتطلباتك",
    icon: "Palette",
    features: ["تصميم فريد", "مواد عالية الجودة", "إشراف هندسي"]
  },
  {
    id: 3,
    title: "تركيب الإضاءة المحيطية",
    description: "إضاءة LED متعددة الألوان للمقصورة الداخلية",
    icon: "Lightbulb",
    features: ["ألوان متعددة", "تحكم بالتطبيق", "تركيب احترافي"]
  },
  {
    id: 4,
    title: "صيانة وتجديد",
    description: "خدمات الصيانة الدورية وتجديد التنجيد",
    icon: "Wrench",
    features: ["فحص شامل", "تنظيف عميق", "إصلاحات سريعة"]
  }
];

// التقييمات
export const testimonials = [
  {
    id: 1,
    name: "أحمد العلي",
    rating: 5,
    comment: "خدمة ممتازة وجودة عالية في التنجيد. أنصح الجميع بالتعامل معهم.",
    car: "رنج روفر 2023"
  },
  {
    id: 2,
    name: "محمد السالم",
    rating: 5,
    comment: "تعامل احترافي وسرعة في التنفيذ. النتيجة كانت أفضل من توقعاتي.",
    car: "لكزس LX 2022"
  },
  {
    id: 3,
    name: "فهد الدوسري",
    rating: 5,
    comment: "أفضل محل تنجيد في الرياض بلا منازع. جودة لا مثيل لها.",
    car: "مرسيدس S-Class 2023"
  }
];

// الأسئلة الشائعة
export const faqs = [
  {
    question: "ما هي مدة ضمان التنجيد؟",
    answer: "نقدم ضمان يصل إلى 5 سنوات على جميع أعمال التنجيد حسب نوع المادة المستخدمة."
  },
  {
    question: "كم تستغرق عملية التنجيد؟",
    answer: "تتراوح المدة بين 3-7 أيام عمل حسب حجم المشروع وتعقيده."
  },
  {
    question: "هل تستخدمون جلد طبيعي؟",
    answer: "نعم، نستخدم جلد طبيعي 100% من أفضل المصادر العالمية، بالإضافة إلى الألكانتارا الفاخرة."
  },
  {
    question: "هل يمكن تخصيص التصميم؟",
    answer: "بالتأكيد! نقدم خدمة التخصيص الكامل حسب رغبتك من حيث اللون، الخياطة، والتطريز."
  },
  {
    question: "هل لديكم خدمة توصيل؟",
    answer: "نعم، نوفر خدمة استلام وتوصيل السيارة داخل الرياض."
  }
];

// روابط Google Forms للطلبات
export const orderFormUrl = "https://forms.gle/your-order-form-link";
export const contactFormUrl = "https://forms.gle/your-contact-form-link";
