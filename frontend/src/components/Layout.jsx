import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Rocket, Radio, FileText, Bell, User, MoreHorizontal, Users, TrendingUp, Hash, UserPlus, Verified, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const { isAuthenticated } = useAuth();
  
  const menuItems = [
    { id: 'feed', name: 'Feed', icon: Home, path: '/' },
    { id: 'launchpad', name: 'Launchpad', icon: Rocket, path: '/launchpad' },
    { id: 'lives', name: 'Lives', icon: Radio, path: '/lives' },
    { id: 'articles', name: 'Articles', icon: FileText, path: '/articles' },
    { id: 'notifications', name: 'Notifications', icon: Bell, path: '/notifications' },
    { id: 'mypage', name: 'My Page', icon: User, path: '/mypage' },
    { id: 'more', name: 'More', icon: MoreHorizontal, path: '/more' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLoginRequired = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
    }
  };

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280); // xl breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const trendingTopics = [
    { name: 'YZI', posts: '1.2K' },
    { name: 'Apple', posts: '987' },
    { name: 'CMC Launch: Aster#', posts: '756' },
    { name: 'ANTGroup', posts: '543' },
    { name: 'CMC Quest: Earn Rewards#', posts: '432' },
  ];

  const recommendedAccounts = [
    {
      name: 'NewCoinListings',
      handle: 'NewCoinListings',
      verified: true,
      recentPosts: [
        { text: 'AI detecta patrón alcista en Bitcoin', time: 'Hace 5 min' },
        { text: 'Alerta de volatilidad en Ethereum', time: 'Hace 15 min' },
        { text: 'Nuevo protocolo DeFi analizado', time: 'Hace 1 hora' }
      ]
    },
    {
      name: 'SENTINEL AI',
      handle: 'SentinelAI',
      verified: true,
      recentPosts: [
        { text: 'Patrón de triángulo en ETH confirmado', time: 'Hace 12 min' },
        { text: 'Volumen inusual detectado en altcoins', time: 'Hace 25 min' },
        { text: 'Señales de compra en layer 2', time: 'Hace 45 min' }
      ]
    }
  ];

  const sidebarWidth = isSidebarMinimized ? 'w-16' : 'w-64';
  const mainMargin = isSidebarMinimized ? 'ml-16' : 'ml-64';

  return (
    <div className="flex min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f0f23 100%)' }}>
      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Left Sidebar - Community Navigation */}
      <div className={`${
        isMobile 
          ? `fixed left-0 top-24 h-full z-50 transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } w-64`
          : `${sidebarWidth} fixed left-0 top-24 h-full z-30 transition-all duration-300`
      } glass-effect border-r border-neon-blue/30`} style={{background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)', borderRightColor: 'rgba(0, 191, 255, 0.3)'}}>
        <div className="p-4">
          {/* Community Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-aqua-blue to-aqua-light rounded-full flex items-center justify-center shadow-aqua">
                <Users className="w-4 h-4 text-white" />
              </div>
              {(!isSidebarMinimized || isMobile) && (
                <h2 className="professional-title text-lg font-semibold">COMMUNITY</h2>
              )}
            </div>
            
            {/* Mobile close button */}
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-aqua-blue/10 rounded-full transition-all duration-300 text-aqua-blue hover:text-aqua-light"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            
            {/* Desktop minimize button */}
            {!isMobile && (
              <button
                onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
                className="p-2 hover:bg-aqua-blue/10 rounded-full transition-all duration-300 text-aqua-blue hover:text-aqua-light"
              >
                {isSidebarMinimized ? 
                  <ChevronRight className="w-5 h-5" /> : 
                  <ChevronLeft className="w-5 h-5" />
                }
              </button>
            )}
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(item.id === 'mypage' || item.id === 'notifications') ? handleLoginRequired : undefined}
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 group relative ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-aqua-blue/20 to-aqua-light/10 text-aqua-light border-l-4 border-aqua-blue shadow-aqua'
                    : 'text-aqua-blue hover:text-aqua-light hover:bg-aqua-blue/10 hover:border-l-4 hover:border-aqua-blue/50'
                } ${isSidebarMinimized && !isMobile ? 'justify-center' : ''}`}
                title={isSidebarMinimized && !isMobile ? item.name : undefined}
              >
                {/* Indicador de selección activa */}
                {isActive(item.path) && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-aqua-light to-aqua-blue rounded-r-lg"></div>
                )}
                <item.icon className={`w-5 h-5 ${
                  isActive(item.path) ? 'text-aqua-light' : 'text-aqua-blue group-hover:text-aqua-light'
                }`} />
                {(!isSidebarMinimized || isMobile) && (
                  <span className={`font-medium ${
                    isActive(item.path) ? 'text-aqua-light font-semibold' : ''
                  }`}>{item.name}</span>
                )}
                {/* Punto indicador para sidebar minimizado */}
                {isActive(item.path) && isSidebarMinimized && !isMobile && (
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-aqua-light rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isMobile ? 'ml-0' : mainMargin} ${isMobile ? 'mr-0' : 'mr-0 xl:mr-80'} transition-all duration-300`}>
        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="fixed top-28 left-4 z-30 p-2 bg-black/50 rounded-full border border-neon-blue/30 hover:bg-neon-blue/10 transition-all duration-300 text-neon-blue hover:text-neon-cyan shadow-neon"
          >
            <Users className="w-5 h-5" />
          </button>
        )}
        
        {children}
      </div>

      {/* Right Sidebar - Trending & Recommendations - Hidden on Mobile */}
      {!isMobile && (
        <div className="w-80 glass-effect border-l border-neon-blue/30 fixed right-0 top-24 h-full overflow-y-auto z-30" style={{background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)', borderLeftColor: 'rgba(0, 191, 255, 0.3)'}}>
          <div className="p-6 space-y-6">
            {/* Trending Topics */}
            <Card className="glass-effect border-neon-blue/30 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 neon-title">
                  <TrendingUp className="w-5 h-5 text-neon-cyan" />
                  <span>Trending Topics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-lg glass-effect hover:bg-neon-blue/10 transition-all duration-300 cursor-pointer group border border-transparent hover:border-neon-blue/30"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-neon-blue text-sm font-medium w-4">
                        {index + 1}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Hash className="w-4 h-4 text-neon-blue group-hover:text-neon-cyan transition-colors" />
                        <span className="text-neon-blue group-hover:text-neon-cyan transition-colors">
                          {topic.name}
                        </span>
                      </div>
                    </div>
                    <div className="text-neon-blue/70 text-sm">
                      {topic.posts}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended Accounts */}
            <Card className="glass-effect border-neon-blue/30 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 neon-title">
                  <Users className="w-5 h-5 text-neon-cyan" />
                  <span>Recommended Accounts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {recommendedAccounts.map((account, index) => (
                  <div key={index} className="border-b border-neon-blue/30 pb-4 last:border-0">
                    {/* Account Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center shadow-neon">
                          <span className="text-white font-medium">
                            {account.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <span className="neon-text font-medium text-sm">
                              {account.name}
                            </span>
                            {account.verified && (
                              <Verified className="w-4 h-4 text-neon-cyan" />
                            )}
                          </div>
                          <span className="text-neon-blue/70 text-xs">
                            @{account.handle}
                          </span>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="sentinel-button text-neon-blue text-xs px-3 py-1 hover:text-neon-cyan"
                      >
                        <UserPlus className="w-3 h-3 mr-1" />
                        Follow
                      </Button>
                    </div>

                    {/* Recent Posts */}
                    <div className="space-y-2">
                      {account.recentPosts.map((post, postIndex) => (
                        <div key={postIndex} className="glass-effect rounded-lg p-2 border border-neon-blue/20">
                          <p className="text-neon-blue text-xs mb-1">
                            {post.text}
                          </p>
                          <span className="text-neon-blue/60 text-xs">
                            {post.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default Layout;