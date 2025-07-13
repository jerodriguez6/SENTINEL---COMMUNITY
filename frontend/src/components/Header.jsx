import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, User, Menu, X, ChevronDown, Wallet, Shield, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const { isAuthenticated, user, logout } = useAuth();

  const navigationItems = [
    { name: 'Tech MarketCap', href: '#', icon: TrendingUp },
    { name: 'Auditorías', href: '#', icon: Shield },
    { name: 'Exchanges', href: '#' },
    { name: 'Community', href: '#', active: true },
  ];

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 via-gray-900 to-black border-b border-professional-blue/20 sticky top-0 z-50" style={{background: 'linear-gradient(135deg, #0f1419, #1a202c)', borderBottomColor: 'rgba(74, 144, 226, 0.2)', boxShadow: '0 2px 10px rgba(74, 144, 226, 0.1)'}}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300">
                <div className="header-logo-icon">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="hidden sm:block header-logo-text">
                  <div className="professional-title text-xl font-bold">SENTINEL IA</div>
                  <div className="text-xs text-professional-blue -mt-1">Tech MarketCap</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md border border-transparent ${
                    item.active 
                      ? 'text-professional-blue bg-professional-blue/10 border-professional-blue/30 shadow-subtle' 
                      : 'text-professional-blue hover:text-professional-blue-light hover:bg-professional-blue/5 hover:border-professional-blue/20'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-professional-blue" />
                </div>
                <Input
                  type="text"
                  placeholder="Buscar proyectos..."
                  className="w-64 pl-10 bg-black/50 border-professional-blue/30 text-professional-blue placeholder-professional-blue/60 focus:border-professional-blue-light focus:ring-professional-blue-light"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* User Authentication */}
              <div className="hidden md:flex items-center space-x-3">
                {isAuthenticated ? (
                  <div className="relative">
                    <Button 
                      size="sm" 
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="sentinel-button text-professional-blue flex items-center space-x-2 hover:text-professional-blue-light"
                    >
                      {user?.type === 'wallet' ? (
                        <>
                          <Wallet className="w-4 h-4" />
                          <span>{user.displayName}</span>
                        </>
                      ) : (
                        <>
                          <User className="w-4 h-4" />
                          <span>{user?.name || 'Usuario'}</span>
                        </>
                      )}
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                    
                    {/* User Dropdown Menu */}
                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-48 glass-effect border border-professional-blue/30 rounded-lg shadow-card py-2 z-50">
                        <Link 
                          to="/profile" 
                          className="block px-4 py-2 text-sm text-professional-blue hover:bg-professional-blue/10 hover:text-professional-blue-light transition-all duration-300"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Mi Perfil
                        </Link>
                        <Link 
                          to="/settings" 
                          className="block px-4 py-2 text-sm text-professional-blue hover:bg-professional-blue/10 hover:text-professional-blue-light transition-all duration-300"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Dashboard
                        </Link>
                        <Link 
                          to="/auditorias" 
                          className="block px-4 py-2 text-sm text-professional-blue hover:bg-professional-blue/10 hover:text-professional-blue-light transition-all duration-300"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Mis Auditorías
                        </Link>
                        <div className="border-t border-professional-blue/30 my-2"></div>
                        <button 
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-professional-blue hover:bg-professional-blue/10 hover:text-professional-blue-light transition-all duration-300"
                        >
                          Cerrar Sesión
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Button 
                    size="sm" 
                    onClick={handleLoginClick}
                    className="sentinel-button text-professional-blue hover:text-professional-blue-light"
                  >
                    Conectar
                  </Button>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-professional-blue hover:text-professional-blue-light hover:bg-professional-blue/10 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-professional-blue/30">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md border border-transparent ${
                      item.active 
                        ? 'text-professional-blue bg-professional-blue/10 border-professional-blue/30' 
                        : 'text-professional-blue hover:text-professional-blue-light hover:bg-professional-blue/5 hover:border-professional-blue/20'
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                <div className="pt-2 mt-2 border-t border-professional-blue/30">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <div className="px-3 py-2 text-professional-blue font-medium border border-professional-blue/30 rounded bg-professional-blue/5">
                        {user?.type === 'wallet' ? (
                          <div className="flex items-center space-x-2">
                            <Wallet className="w-4 h-4" />
                            <span>{user.displayName}</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{user?.name || 'Usuario'}</span>
                          </div>
                        )}
                      </div>
                      <Button 
                        onClick={handleLogout}
                        size="sm"
                        variant="outline" 
                        className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                      >
                        Cerrar Sesión
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      size="sm" 
                      onClick={handleLoginClick}
                      className="w-full sentinel-button text-professional-blue hover:text-professional-blue-light"
                    >
                      Conectar
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;