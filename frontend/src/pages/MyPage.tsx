import React, { useState } from 'react';
import Layout from '../components/Layout';
import LoginModal from '../components/LoginModal';

const MyPage: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(true);

  return (
    <Layout>
      <div className="px-6 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            Mi Página
          </h1>
          <p className="text-slate-400">
            Inicia sesión para acceder a tu página personal
          </p>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </Layout>
  );
};

export default MyPage;