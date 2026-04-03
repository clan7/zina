import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Heart, 
  ShoppingCart,
  Grid3X3,
  List,
  X
} from 'lucide-react';
import { defaultProducts, categories, type Product } from '@/data/products';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Products = () => {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(defaultProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      const parsed = JSON.parse(savedProducts);
      setProducts(parsed);
      setFilteredProducts(parsed);
    }

    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products]);

  const toggleFavorite = (productId: number) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    
    if (!favorites.includes(productId)) {
      toast.success('تمت الإضافة إلى المفضلة');
    }
  };

  const addToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      const newCart = [...cart, productId];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      toast.success('تمت الإضافة إلى السلة');
    } else {
      toast.info('المنتج موجود في السلة بالفعل');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#d4af37] text-sm font-medium mb-4 block">منتجاتنا</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">اكتشف منتجاتنا الفاخرة</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            مجموعة واسعة من منتجات تنجيد وزينة السيارات بأعلى جودة
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="luxury-input w-full pr-12 pl-4 py-3 rounded-xl"
            />
          </div>

          {/* Category Filter - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'category-active'
                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#2a2a2a]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* View Mode & Filter Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden p-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-gray-400 hover:text-white"
            >
              <Filter className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#d4af37] text-black'
                  : 'bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a]'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl transition-all ${
                viewMode === 'list'
                  ? 'bg-[#d4af37] text-black'
                  : 'bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a]'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-400">
            <span className="text-[#d4af37] font-bold">{filteredProducts.length}</span> منتج
          </p>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="flex items-center gap-2 text-gray-400 hover:text-[#d4af37] text-sm"
            >
              <X className="w-4 h-4" />
              إلغاء التصفية
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className={`luxury-card rounded-2xl overflow-hidden group ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                }`}
              >
                {/* Image */}
                <div 
                  className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'sm:w-72 aspect-video sm:aspect-auto' : 'aspect-square'
                  }`}
                >
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
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        favorites.includes(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-black/50 text-white hover:bg-black/70'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => addToCart(product.id)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        cart.includes(product.id)
                          ? 'bg-[#d4af37] text-black'
                          : 'bg-black/50 text-white hover:bg-black/70'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white line-clamp-1">{product.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="price-tag text-lg">{product.price} ر.س</span>
                      {product.originalPrice && (
                        <span className="original-price mr-2 text-sm">{product.originalPrice} ر.س</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 outline-gold-btn py-2.5 rounded-lg text-sm font-medium"
                    >
                      عرض التفاصيل
                    </button>
                    <Link
                      to={`/quick-order?product=${product.id}`}
                      className="flex-1 gold-btn py-2.5 rounded-lg text-sm font-medium text-center"
                    >
                      طلب الآن
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 rounded-full bg-[#1a1a1a] flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">لا توجد منتجات</h3>
            <p className="text-gray-400">جرب البحث بكلمات مختلفة أو تصفية أخرى</p>
          </div>
        )}
      </div>

      {/* Mobile Filter Dialog */}
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogContent className="modal-content max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-white text-right">تصفية المنتجات</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setIsFilterOpen(false);
                }}
                className={`w-full px-4 py-3 rounded-xl text-right font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'category-active'
                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Product Details Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="modal-content max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-white text-right text-2xl">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">السعر</span>
                    <div className="flex items-center gap-3">
                      <span className="price-tag text-2xl">{selectedProduct.price} ر.س</span>
                      {selectedProduct.originalPrice && (
                        <span className="original-price">{selectedProduct.originalPrice} ر.س</span>
                      )}
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-gray-400 text-sm">الفئة</span>
                    <p className="text-[#d4af37] font-medium">{selectedProduct.category}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link
                    to={`/quick-order?product=${selectedProduct.id}`}
                    className="flex-1 gold-btn py-3 rounded-xl font-bold text-center"
                  >
                    طلب الآن
                  </Link>
                  <button
                    onClick={() => addToCart(selectedProduct.id)}
                    className="px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-[#d4af37] hover:bg-[#d4af37]/10"
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
