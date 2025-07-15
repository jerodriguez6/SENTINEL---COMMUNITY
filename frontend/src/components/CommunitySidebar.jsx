import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hash, Radio, FileText, Bell, User, MoreHorizontal, Users } from 'lucide-react';

const CommunitySidebar = () => {
  const [activeItem, setActiveItem] = useState('articles');

  const menuItems = [
    { id: 'feed', name: 'Feed', icon: Home, path: '/feed' },
    { id: 'topics', name: 'Topics', icon: Hash, path: '/topics' },
    { id: 'lives', name: 'Lives', icon: Radio, path: '/lives' },
    { id: 'articles', name: 'Articles', icon: FileText, path: '/articles', active: true },
    { id: 'notifications', name: 'Notifications', icon: Bell, path: '/notifications' },
    { id: 'mypage', name: 'My Page', icon: User, path: '/mypage' },
    { id: 'more', name: 'More', icon: MoreHorizontal, path: '/more' },
  ];

  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen">
      <div className="p-4">
        {/* Community Header */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-white font-semibold text-lg">COMMUNITY</h2>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setActiveItem(item.id)}
              className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors group ${
                activeItem === item.id || item.active
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                activeItem === item.id || item.active ? 'text-blue-400' : 'text-slate-500 group-hover:text-white'
              }`} />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CommunitySidebar;