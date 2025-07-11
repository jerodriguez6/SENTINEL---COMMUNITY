import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Eye, ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Article Image */}
          <div className="flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg w-32 h-24">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="flex-1">
            {/* Category Badge */}
            <div className="mb-2">
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                {article.category}
              </Badge>
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors cursor-pointer">
              {article.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-3 line-clamp-2">
              {article.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.slice(0, 3).map((tag, index) => (
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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    {article.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <span className="hover:text-blue-400 transition-colors cursor-pointer">
                    {article.author}
                  </span>
                  <span>•</span>
                  <span>{article.timestamp}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
                  <Eye className="w-4 h-4" />
                  <span>{article.views}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-green-400 transition-colors cursor-pointer">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{article.likes}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-yellow-400 transition-colors cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                  <span>{article.comments}</span>
                </div>
                <button className="p-1 hover:text-blue-400 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-1 hover:text-yellow-400 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;