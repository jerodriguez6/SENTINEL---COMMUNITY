import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp } from 'lucide-react';

const TrendingTokens = () => {
  const trendingTokens = [
    { name: 'HYPER', symbol: 'HYPER', price: '$0.0234', change: '+12.5%', color: 'bg-green-500' },
    { name: 'SPEND', symbol: 'SPEND', price: '$0.0156', change: '+8.3%', color: 'bg-blue-500' },
    { name: 'SNEK', symbol: 'SNEK', price: '$0.0089', change: '+15.2%', color: 'bg-purple-500' },
    { name: 'SHIB', symbol: 'SHIB', price: '$0.0000234', change: '+5.7%', color: 'bg-orange-500' },
    { name: 'MEME', symbol: 'MEME', price: '$0.0234', change: '+22.1%', color: 'bg-pink-500' },
  ];

  return (
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
  );
};

export default TrendingTokens;