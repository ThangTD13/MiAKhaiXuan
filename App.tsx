
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PetalBackground } from './components/Petal';
import { LandingPage } from './pages/LandingPage';
import { RSVPPage } from './pages/RSVPPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'rsvp'>('landing');

  const handleRSVPSubmit = async (data: { name: string; phone: string; attending: string }) => {
    // Logic gửi email
    const mailSubject = encodeURIComponent(`Đăng ký Khai Xuân MiA - ${data.name}`);
    const mailBody = encodeURIComponent(
      `Họ tên: ${data.name}\n` +
      `Số điện thoại: ${data.phone}\n` +
      `Trạng thái tham gia: ${data.attending === 'yes' ? 'Tham gia' : 'Không tham gia'}`
    );
    
    // Mở ứng dụng email của user
    window.location.href = `mailto:your-email@example.com?subject=${mailSubject}&body=${mailBody}`;
    
    // Giả lập delay gửi data
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      {/* Hiệu ứng cánh hoa rơi toàn cục */}
      <PetalBackground />

      <AnimatePresence mode="wait">
        {currentPage === 'landing' ? (
          <LandingPage 
            key="landing" 
            onRSVPClick={() => setCurrentPage('rsvp')} 
          />
        ) : (
          <RSVPPage 
            key="rsvp" 
            onBack={() => setCurrentPage('landing')}
            onSubmit={handleRSVPSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
