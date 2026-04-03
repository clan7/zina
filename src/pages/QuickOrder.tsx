import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Send, 
  Check, 
  Car,
  User,
  MessageSquare,
  Package,
  CreditCard,
  Banknote,
  Truck
} from 'lucide-react';
import { defaultProducts, type Product, type StoreSettings } from '@/data/products';
import { toast } from 'sonner';

interface QuickOrderProps {
  settings: StoreSettings;
}

const QuickOrder = ({ settings }: QuickOrderProps) => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    carYear: '',
    selectedProducts: [] as number[],
    notes: '',
    paymentMethod: 'cash',
    offerCode: searchParams.get('offer') || '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      setProducts(JSON.parse(saved));
    }

    // Pre-select product if specified
    const productId = searchParams.get('product');
    if (productId) {
      setFormData(prev => ({
        ...prev,
        selectedProducts: [parseInt(productId)]
      }));
    }
  }, [searchParams]);

  const toggleProduct = (productId: number) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(productId)
        ? prev.selectedProducts.filter(id => id !== productId)
        : [...prev.selectedProducts, productId]
    }));
  };

  const calculateTotal = () => {
    return formData.selectedProducts.reduce((total, id) => {
      const product = products.find(p => p.id === id);
      return total + (product?.price || 0);
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.selectedProducts.length === 0) {
      toast.error('الرجاء اختيار منتج واحد على الأقل');
      return;
    }

    setIsSubmitting(true);

    // Prepare order data
    const selectedProductsList = formData.selectedProducts.map(id => {
      const product = products.find(p => p.id === id);
      return `${product?.name} - ${product?.price} ر.س`;
    }).join('\n');

    const orderData = {
      ...formData,
      selectedProductsList,
      total: calculateTotal(),
      orderDate: new Date().toLocaleString('ar-SA'),
    };

    // Save to localStorage for admin panel
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({
      id: Date.now(),
      ...orderData,
      status: 'pending'
    });
    localStorage.setItem('orders', JSON.stringify(orders));

    // Simulate sending to Google Forms
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('تم إرسال طلبك بنجاح، سنتواصل معك قريباً');
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">تم إرسال طلبك بنجاح!</h2>
          <p className="text-gray-400 mb-8">
            شكراً لك {formData.name}، سنتواصل معك قريباً على الرقم {formData.phone} لتأكيد الطلب.
          </p>
          <div className="luxury-card p-6 rounded-2xl mb-8">
            <h3 className="font-bold text-white mb-4">تفاصيل الطلب</h3>
            <div className="space-y-2 text-right">
              <p className="text-gray-400">رقم الطلب: <span className="text-[#d4af37]">#{Date.now().toString().slice(-6)}</span></p>
              <p className="text-gray-400">إجمالي الطلب: <span className="text-[#d4af37]">{calculateTotal()} ر.س</span></p>
            </div>
          </div>
          <a href="/" className="gold-btn px-8 py-4 rounded-xl font-bold inline-block">
            العودة للرئيسية
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#d4af37] text-sm font-medium mb-4 block">طلب سريع</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">اطلب الآن بخطوات بسيطة</h1>
          <p className="text-gray-400">
            املأ النموذج وسنتواصل معك لتأكيد الطلب
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <div className="luxury-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-[#d4af37]" />
              المعلومات الشخصية
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">الاسم الكامل *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="luxury-input w-full px-4 py-3 rounded-xl"
                  placeholder="أدخل اسمك الكامل"
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
          </div>

          {/* Car Info */}
          <div className="luxury-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Car className="w-6 h-6 text-[#d4af37]" />
              معلومات السيارة
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">نوع السيارة *</label>
                <input
                  type="text"
                  required
                  value={formData.carModel}
                  onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                  className="luxury-input w-full px-4 py-3 rounded-xl"
                  placeholder="مثال: رنج روفر"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">سنة الصنع *</label>
                <input
                  type="number"
                  required
                  value={formData.carYear}
                  onChange={(e) => setFormData({...formData, carYear: e.target.value})}
                  className="luxury-input w-full px-4 py-3 rounded-xl"
                  placeholder="2023"
                />
              </div>
            </div>
          </div>

          {/* Products Selection */}
          <div className="luxury-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Package className="w-6 h-6 text-[#d4af37]" />
              اختر المنتجات
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
              {products.map((product) => (
                <label
                  key={product.id}
                  className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.selectedProducts.includes(product.id)
                      ? 'border-[#d4af37] bg-[#d4af37]/10'
                      : 'border-[#2a2a2a] hover:border-[#d4af37]/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.selectedProducts.includes(product.id)}
                    onChange={() => toggleProduct(product.id)}
                    className="w-5 h-5 rounded border-[#2a2a2a] text-[#d4af37] focus:ring-[#d4af37] bg-transparent"
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">{product.name}</p>
                    <p className="text-[#d4af37] font-bold">{product.price} ر.س</p>
                  </div>
                </label>
              ))}
            </div>
            
            {/* Total */}
            <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">المنتجات المختارة:</span>
                <span className="text-white font-bold">{formData.selectedProducts.length}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-400">الإجمالي:</span>
                <span className="text-2xl font-bold gold-text">{calculateTotal()} ر.س</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="luxury-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#d4af37]" />
              طريقة الدفع
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <label
                className={`flex flex-col items-center gap-3 p-6 rounded-xl border cursor-pointer transition-all ${
                  formData.paymentMethod === 'cash'
                    ? 'border-[#d4af37] bg-[#d4af37]/10'
                    : 'border-[#2a2a2a] hover:border-[#d4af37]/50'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                  className="hidden"
                />
                <Banknote className="w-8 h-8 text-[#d4af37]" />
                <span className="text-white font-medium">كاش</span>
              </label>
              <label
                className={`flex flex-col items-center gap-3 p-6 rounded-xl border cursor-pointer transition-all ${
                  formData.paymentMethod === 'bank'
                    ? 'border-[#d4af37] bg-[#d4af37]/10'
                    : 'border-[#2a2a2a] hover:border-[#d4af37]/50'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                  className="hidden"
                />
                <Truck className="w-8 h-8 text-[#d4af37]" />
                <span className="text-white font-medium">تحويل بنكي</span>
              </label>
              <label
                className={`flex flex-col items-center gap-3 p-6 rounded-xl border cursor-pointer transition-all ${
                  formData.paymentMethod === 'installment'
                    ? 'border-[#d4af37] bg-[#d4af37]/10'
                    : 'border-[#2a2a2a] hover:border-[#d4af37]/50'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="installment"
                  checked={formData.paymentMethod === 'installment'}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                  className="hidden"
                />
                <CreditCard className="w-8 h-8 text-[#d4af37]" />
                <span className="text-white font-medium">تقسيط</span>
              </label>
            </div>
          </div>

          {/* Offer Code */}
          <div className="luxury-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6">كود الخصم (اختياري)</h2>
            <input
              type="text"
              value={formData.offerCode}
              onChange={(e) => setFormData({...formData, offerCode: e.target.value})}
              className="luxury-input w-full px-4 py-3 rounded-xl"
              placeholder="أدخل كود الخصم إن وجد"
            />
          </div>

          {/* Notes */}
          <div className="luxury-card p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-[#d4af37]" />
              ملاحظات إضافية
            </h2>
            <textarea
              rows={4}
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="luxury-input w-full px-4 py-3 rounded-xl resize-none"
              placeholder="أي ملاحظات خاصة بالطلب..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full gold-btn py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-8 h-8 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
            ) : (
              <>
                <Send className="w-6 h-6" />
                إرسال الطلب
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickOrder;
