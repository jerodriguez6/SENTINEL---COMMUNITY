import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Hash, TrendingUp } from 'lucide-react';

const TrendingTopics = ({ topics }) => {
  const trendingTopics = [
    { name: 'YZI', posts: '1.2K', trending: true },
    { name: 'Apple', posts: '987', trending: false },
    { name: 'CMC Launch: Aster#', posts: '756', trending: true },
    { name: 'ANTGroup', posts: '543', trending: false },
    { name: 'CMC Quest: Earn Rewards#', posts: '432', trending: true },
  ];

  return (
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
  );
};

export default TrendingTopics;