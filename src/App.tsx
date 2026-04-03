import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import About from './pages/About';
import QuickOrder from './pages/QuickOrder';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Admin from './pages/Admin';
import { defaultStoreSettings } from './data/products';

function App() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('storeSettings');
    return saved ? JSON.parse(saved) : defaultStoreSettings;
  });

  useEffect(() => {
    localStorage.setItem('storeSettings', JSON.stringify(settings));
  }, [settings]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" dir="rtl">
      <Toaster 
        position="top-center" 
        richColors 
        toastOptions={{
          style: {
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            color: '#fff',
          },
        }}
      />
      
      <Routes>
        {/* Admin Route - No Navbar/Footer */}
        <Route path="/admin/*" element={<Admin settings={settings} setSettings={setSettings} />} />
        
        {/* Public Routes */}
        <Route path="*" element={
          <>
            <Navbar settings={settings} />
            <main>
              <Routes>
                <Route path="/" element={<Home settings={settings} />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/contact" element={<Contact settings={settings} />} />
                <Route path="/about" element={<About settings={settings} />} />
                <Route path="/quick-order" element={<QuickOrder settings={settings} />} />
                <Route path="/privacy" element={<Privacy settings={settings} />} />
                <Route path="/terms" element={<Terms settings={settings} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer settings={settings} />
            <FloatingButtons settings={settings} />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
