import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Hash, Radio, FileText, Bell, User, MoreHorizontal, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Layout = ({ children }) => {
  const menuItems = [
    { id: 'feed', name: 'Feed', icon: Home, path: '/feed' },
    { id: 'topics', name: 'Topics', icon: Hash, path: '/topics' },
    { id: 'lives', name: 'Lives', icon: Radio, path: '/lives' },
    { id: 'articles', name: 'Articles', icon: FileText, path: '/articles', active: true },
    { id: 'notifications', name: 'Notifications', icon: Bell, path: '/notifications' },
    { id: 'mypage', name: 'My Page', icon: User, path: '/mypage' },
    { id: 'more', name: 'More', icon: MoreHorizontal, path: '/more' },
  ];

  const trendingTopics = [
    { name: 'YZI', posts: '1.2K', trending: true },
    { name: 'Apple', posts: '987', trending: false },
    { name: 'CMC Launch: Aster#', posts: '756', trending: true },
    { name: 'ANTGroup', posts: '543', trending: false },
    { name: 'CMC Quest: Earn Rewards#', posts: '432', trending: true },
  ];

  const trendingTokens = [
    { name: 'HYPER', symbol: 'HYPER', price: '$0.0234', change: '+12.5%', color: 'bg-green-500' },
    { name: 'SPEND', symbol: 'SPEND', price: '$0.0156', change: '+8.3%', color: 'bg-blue-500' },
    { name: 'SNEK', symbol: 'SNEK', price: '$0.0089', change: '+15.2%', color: 'bg-purple-500' },
    { name: 'SHIB', symbol: 'SHIB', price: '$0.0000234', change: '+5.7%', color: 'bg-orange-500' },
    { name: 'MEME', symbol: 'MEME', price: '$0.0234', change: '+22.1%', color: 'bg-pink-500' },
  ];

  const recommendedAccounts = [
    { name: 'Mr Billionaire', handle: 'Mr_cbillionaire', followers: '125K', reputation: '95', verified: true },
    { name: 'brainsofweb3', handle: 'iambrainsofweb3', followers: '89K', reputation: '92', verified: true },
    { name: 'The Pumpamentals', handle: 'ThePumpamentals', followers: '67K', reputation: '88', verified: false },
    { name: 'Crypto Wave', handle: 'Lilianobodo', followers: '45K', reputation: '85', verified: true },
    { name: 'GalaxyTrading', handle: 'GalaxyTrading', followers: '32K', reputation: '90', verified: false },
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
                  item.active
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <item.icon className={`w-5 h-5 ${
                  item.active ? 'text-blue-400' : 'text-slate-500 group-hover:text-white'
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
                    {topic.trending && (
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {topic.posts}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Trending Tokens */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Trending Tokens</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingTokens.map((token, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-500 text-sm font-medium">{index + 1}</span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${token.color}`}>
                        <span className="text-white text-xs font-bold">
                          {token.symbol.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{token.symbol}</div>
                      <div className="text-slate-400 text-xs">{token.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-sm font-medium">{token.price}</div>
                    <div className="text-green-400 text-xs">{token.change}</div>
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
            <CardContent className="space-y-4">
              {recommendedAccounts.map((account, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {account.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-1">
                        <span className="text-white font-medium text-sm">
                          {account.name}
                        </span>
                      </div>
                      <span className="text-slate-400 text-xs">
                        @{account.handle}
                      </span>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors">
                    Follow
                  </button>
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