import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Check,
  Save,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Banknote
} from 'lucide-react';
import { defaultProducts, type Product, type StoreSettings } from '@/data/products';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AdminProps {
  settings: StoreSettings;
  setSettings: (settings: StoreSettings) => void;
}

// Login Component
const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true');
      onLogin();
    } else {
      setError('كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="luxury-card p-8 rounded-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center mx-auto mb-4">
            <LayoutDashboard className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-2xl font-bold text-white">لوحة التحكم</h1>
          <p className="text-gray-400">تسجيل الدخول للمتابعة</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="luxury-input w-full px-4 py-3 rounded-xl"
              placeholder="أدخل كلمة المرور"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button type="submit" className="w-full gold-btn py-4 rounded-xl font-bold">
            تسجيل الدخول
          </button>
        </form>
        <p className="text-gray-500 text-sm text-center mt-4">
          كلمة المرور الافتراضية: admin123
        </p>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ orders }: { orders: any[] }) => {
  const stats = [
    { label: 'إجمالي الطلبات', value: orders.length, icon: ShoppingCart },
    { label: 'طلبات جديدة', value: orders.filter(o => o.status === 'pending').length, icon: Package },
    { label: 'طلبات مكتملة', value: orders.filter(o => o.status === 'completed').length, icon: Check },
    { label: 'إجمالي المبيعات', value: `${orders.reduce((sum, o) => sum + (o.total || 0), 0).toLocaleString()} ر.س`, icon: Banknote },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">نظرة عامة</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="luxury-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-[#d4af37]" />
              </div>
            </div>
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold gold-text">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="luxury-card rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-[#2a2a2a]">
          <h3 className="text-xl font-bold text-white">أحدث الطلبات</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="luxury-table">
            <thead>
              <tr>
                <th>رقم الطلب</th>
                <th>العميل</th>
                <th>الهاتف</th>
                <th>الإجمالي</th>
                <th>الحالة</th>
                <th>التاريخ</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id}>
                  <td className="text-[#d4af37]">#{order.id.toString().slice(-6)}</td>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>
                  <td className="text-[#d4af37]">{order.total} ر.س</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                      order.status === 'processing' ? 'bg-blue-500/20 text-blue-500' :
                      order.status === 'completed' ? 'bg-green-500/20 text-green-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {order.status === 'pending' ? 'جديد' :
                       order.status === 'processing' ? 'قيد المعالجة' :
                       order.status === 'completed' ? 'مكتمل' : 'ملغي'}
                    </span>
                  </td>
                  <td className="text-gray-400">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Products Management
const ProductsManagement = () => {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const handleSave = () => {
    if (!editingProduct) return;
    
    const newProducts = editingProduct.id 
      ? products.map(p => p.id === editingProduct.id ? editingProduct : p)
      : [...products, { ...editingProduct, id: Date.now() }];
    
    saveProducts(newProducts);
    setIsDialogOpen(false);
    setEditingProduct(null);
    toast.success('تم حفظ المنتج بنجاح');
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      const newProducts = products.filter(p => p.id !== id);
      saveProducts(newProducts);
      toast.success('تم حذف المنتج');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">إدارة المنتجات</h2>
        <button
          onClick={() => {
            setEditingProduct({
              id: 0,
              name: '',
              description: '',
              price: 0,
              image: '/images/products1.png',
              category: 'تنجيد',
            });
            setIsDialogOpen(true);
          }}
          className="gold-btn px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          منتج جديد
        </button>
      </div>

      <div className="luxury-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="luxury-table">
            <thead>
              <tr>
                <th>الصورة</th>
                <th>الاسم</th>
                <th>الفئة</th>
                <th>السعر</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td className="text-[#d4af37]">{product.price} ر.س</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingProduct(product);
                          setIsDialogOpen(true);
                        }}
                        className="p-2 rounded-lg bg-blue-500/20 text-blue-500 hover:bg-blue-500/30"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="modal-content max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white text-right">
              {editingProduct?.id ? 'تعديل منتج' : 'منتج جديد'}
            </DialogTitle>
          </DialogHeader>
          {editingProduct && (
            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">الاسم</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                  className="luxury-input w-full px-4 py-3 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">الوصف</label>
                <textarea
                  rows={3}
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                  className="luxury-input w-full px-4 py-3 rounded-xl resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">السعر</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({...editingProduct, price: parseInt(e.target.value) || 0})}
                    className="luxury-input w-full px-4 py-3 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">الفئة</label>
                  <input
                    type="text"
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                    className="luxury-input w-full px-4 py-3 rounded-xl"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-gray-400">
                  <input
                    type="checkbox"
                    checked={editingProduct.featured || false}
                    onChange={(e) => setEditingProduct({...editingProduct, featured: e.target.checked})}
                    className="w-5 h-5 rounded border-[#2a2a2a] text-[#d4af37]"
                  />
                  مميز
                </label>
                <label className="flex items-center gap-2 text-gray-400">
                  <input
                    type="checkbox"
                    checked={editingProduct.new || false}
                    onChange={(e) => setEditingProduct({...editingProduct, new: e.target.checked})}
                    className="w-5 h-5 rounded border-[#2a2a2a] text-[#d4af37]"
                  />
                  جديد
                </label>
              </div>
              <button onClick={handleSave} className="w-full gold-btn py-3 rounded-xl font-bold">
                <Save className="w-5 h-5 inline ml-2" />
                حفظ
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Orders Management
const OrdersManagement = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('orders');
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  const updateStatus = (orderId: number, status: string) => {
    const newOrders = orders.map(o => o.id === orderId ? { ...o, status } : o);
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
    toast.success('تم تحديث حالة الطلب');
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">إدارة الطلبات</h2>

      <div className="luxury-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="luxury-table">
            <thead>
              <tr>
                <th>رقم الطلب</th>
                <th>العميل</th>
                <th>الهاتف</th>
                <th>السيارة</th>
                <th>الإجمالي</th>
                <th>الحالة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="text-[#d4af37]">#{order.id.toString().slice(-6)}</td>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>
                  <td>{order.carModel} {order.carYear}</td>
                  <td className="text-[#d4af37]">{order.total} ر.س</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-1 text-sm"
                    >
                      <option value="pending">جديد</option>
                      <option value="processing">قيد المعالجة</option>
                      <option value="completed">مكتمل</option>
                      <option value="cancelled">ملغي</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/30"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="modal-content max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedOrder && (
            <>
              <DialogHeader>
                <DialogTitle className="text-white text-right">
                  تفاصيل الطلب #{selectedOrder.id.toString().slice(-6)}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1a1a1a] p-4 rounded-xl">
                    <p className="text-gray-400 text-sm">العميل</p>
                    <p className="text-white font-medium">{selectedOrder.name}</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-xl">
                    <p className="text-gray-400 text-sm">الهاتف</p>
                    <p className="text-white font-medium">{selectedOrder.phone}</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-xl">
                    <p className="text-gray-400 text-sm">السيارة</p>
                    <p className="text-white font-medium">{selectedOrder.carModel} {selectedOrder.carYear}</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-xl">
                    <p className="text-gray-400 text-sm">طريقة الدفع</p>
                    <p className="text-white font-medium">
                      {selectedOrder.paymentMethod === 'cash' ? 'كاش' :
                       selectedOrder.paymentMethod === 'bank' ? 'تحويل بنكي' : 'تقسيط'}
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-xl">
                  <p className="text-gray-400 text-sm mb-2">المنتجات</p>
                  <pre className="text-white text-sm whitespace-pre-wrap">{selectedOrder.selectedProductsList}</pre>
                </div>

                {selectedOrder.notes && (
                  <div className="bg-[#1a1a1a] p-4 rounded-xl">
                    <p className="text-gray-400 text-sm mb-2">ملاحظات</p>
                    <p className="text-white">{selectedOrder.notes}</p>
                  </div>
                )}

                <div className="flex items-center justify-between bg-[#d4af37]/10 p-4 rounded-xl">
                  <span className="text-gray-400">الإجمالي</span>
                  <span className="text-2xl font-bold gold-text">{selectedOrder.total} ر.س</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Settings Management
const SettingsManagement = ({ settings, setSettings }: AdminProps) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleSave = () => {
    setSettings(localSettings);
    toast.success('تم حفظ الإعدادات بنجاح');
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">إعدادات المتجر</h2>

      <div className="luxury-card p-8 rounded-2xl space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-2">اسم المتجر</label>
            <input
              type="text"
              value={localSettings.brandName}
              onChange={(e) => setLocalSettings({...localSettings, brandName: e.target.value})}
              className="luxury-input w-full px-4 py-3 rounded-xl"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">رقم الهاتف</label>
            <div className="relative">
              <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={localSettings.phone}
                onChange={(e) => setLocalSettings({...localSettings, phone: e.target.value})}
                className="luxury-input w-full pr-12 px-4 py-3 rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">واتساب</label>
            <input
              type="text"
              value={localSettings.whatsapp}
              onChange={(e) => setLocalSettings({...localSettings, whatsapp: e.target.value})}
              className="luxury-input w-full px-4 py-3 rounded-xl"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={localSettings.email}
                onChange={(e) => setLocalSettings({...localSettings, email: e.target.value})}
                className="luxury-input w-full pr-12 px-4 py-3 rounded-xl"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-400 text-sm mb-2">العنوان</label>
            <div className="relative">
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={localSettings.address}
                onChange={(e) => setLocalSettings({...localSettings, address: e.target.value})}
                className="luxury-input w-full pr-12 px-4 py-3 rounded-xl"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-400 text-sm mb-2">رابط خرائط Google</label>
            <input
              type="text"
              value={localSettings.googleMapsUrl}
              onChange={(e) => setLocalSettings({...localSettings, googleMapsUrl: e.target.value})}
              className="luxury-input w-full px-4 py-3 rounded-xl"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-400 text-sm mb-2">أوقات العمل</label>
            <div className="relative">
              <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={localSettings.workingHours}
                onChange={(e) => setLocalSettings({...localSettings, workingHours: e.target.value})}
                className="luxury-input w-full pr-12 px-4 py-3 rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Instagram</label>
            <div className="relative">
              <Instagram className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={localSettings.instagram}
                onChange={(e) => setLocalSettings({...localSettings, instagram: e.target.value})}
                className="luxury-input w-full pr-12 px-4 py-3 rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Facebook</label>
            <div className="relative">
              <Facebook className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={localSettings.facebook}
                onChange={(e) => setLocalSettings({...localSettings, facebook: e.target.value})}
                className="luxury-input w-full pr-12 px-4 py-3 rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">اسم البنك</label>
            <div className="relative">
              <Banknote className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={localSettings.bankName}
                onChange={(e) => setLocalSettings({...localSettings, bankName: e.target.value})}
                className="luxury-input w-full pr-12 px-4 py-3 rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">رقم الحساب / IBAN</label>
            <input
              type="text"
              value={localSettings.iban}
              onChange={(e) => setLocalSettings({...localSettings, iban: e.target.value})}
              className="luxury-input w-full px-4 py-3 rounded-xl"
            />
          </div>
        </div>

        <button onClick={handleSave} className="w-full gold-btn py-4 rounded-xl font-bold">
          <Save className="w-5 h-5 inline ml-2" />
          حفظ الإعدادات
        </button>
      </div>
    </div>
  );
};

// Main Admin Component
const Admin = ({ settings, setSettings }: AdminProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
    navigate('/admin');
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('orders');
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  const navItems = [
    { path: '/admin', label: 'الرئيسية', icon: LayoutDashboard },
    { path: '/admin/products', label: 'المنتجات', icon: Package },
    { path: '/admin/orders', label: 'الطلبات', icon: ShoppingCart },
    { path: '/admin/settings', label: 'الإعدادات', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111111] border-l border-[#2a2a2a] fixed h-full">
        <div className="p-6 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="font-bold text-white">لوحة التحكم</h1>
              <p className="text-gray-400 text-xs">{settings.brandName}</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all mb-2"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#2a2a2a]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 mr-64 p-8">
        <Routes>
          <Route path="/" element={<Dashboard orders={orders} />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/settings" element={<SettingsManagement settings={settings} setSettings={setSettings} />} />
        </Routes>
      </main>
    </div>
  );
};

export default Admin;
