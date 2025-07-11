import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Eye, ThumbsUp, MessageCircle, ExternalLink } from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-blue-600/90 text-white backdrop-blur-sm">
              {article.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {article.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Author and Stats */}
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">
                {article.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="hover:text-blue-400 transition-colors cursor-pointer">
              {article.author}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{article.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{article.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{article.comments}</span>
            </div>
            <button className="p-1 hover:text-blue-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Timestamp */}
        <div className="mt-3 text-xs text-slate-500">
          {article.timestamp}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;