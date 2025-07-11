import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Rocket, Radio, FileText, Bell, User, MoreHorizontal, Users, TrendingUp, Hash, UserPlus, Verified } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Layout = ({ children }) => {
  const location = useLocation();
  
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

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Left Sidebar - Community Navigation */}
      <div className="w-64 bg-slate-900 border-r border-slate-800 fixed left-0 top-16 h-full z-30">
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
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors group ${
                  isActive(item.path)
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <item.icon className={`w-5 h-5 ${
                  isActive(item.path) ? 'text-blue-400' : 'text-slate-500 group-hover:text-white'
                }`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 mr-80">
        {children}
      </div>

      {/* Right Sidebar - Trending & Recommendations */}
      <div className="w-80 bg-slate-900 border-l border-slate-800 fixed right-0 top-16 h-full overflow-y-auto z-30">
        <div className="p-6 space-y-6">
          {/* Trending Topics */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                <span>Trending Topics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-slate-500 text-sm font-medium w-4">
                      {index + 1}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Hash className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">
                        {topic.name}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-400 text-sm">
                    {topic.posts}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommended Accounts */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5 text-blue-400" />
                <span>Recommended Accounts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {recommendedAccounts.map((account, index) => (
                <div key={index} className="border-b border-slate-700 pb-4 last:border-0">
                  {/* Account Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">
                          {account.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="text-white font-medium text-sm">
                            {account.name}
                          </span>
                          {account.verified && (
                            <Verified className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                        <span className="text-slate-400 text-xs">
                          @{account.handle}
                        </span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1"
                    >
                      <UserPlus className="w-3 h-3 mr-1" />
                      Follow
                    </Button>
                  </div>

                  {/* Recent Posts */}
                  <div className="space-y-2">
                    {account.recentPosts.map((post, postIndex) => (
                      <div key={postIndex} className="bg-slate-700/30 rounded-lg p-2">
                        <p className="text-slate-300 text-xs mb-1">
                          {post.text}
                        </p>
                        <span className="text-slate-500 text-xs">
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
    </div>
  );
};

export default Layout;