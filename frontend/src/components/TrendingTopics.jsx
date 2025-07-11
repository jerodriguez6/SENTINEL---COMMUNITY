import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Hash } from 'lucide-react';

const TrendingTopics = ({ topics }) => {
  return (
    <Card className="bg-slate-800 border-slate-700 sticky top-20">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <TrendingUp className="w-5 h-5 text-blue-400" />
          <span>Trending Topics</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topics.map((topic, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors cursor-pointer group"
          >
            <div className="flex items-center space-x-2">
              <Hash className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              <span className="text-slate-300 group-hover:text-white transition-colors">
                {topic.name}
              </span>
            </div>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 text-xs">
              {topic.posts} posts
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingTopics;