import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp, MoreHorizontal, UserPlus } from 'lucide-react';

const FeedPost = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // Aquí iría la lógica para seguir/dejar de seguir al usuario
  };

  return (
    <Card className="glass-effect border-neon-blue/30 hover:border-neon-blue/50 transition-all duration-300 group card-hover">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center shadow-neon">
              <span className="text-white font-medium">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="neon-text font-medium">{post.author}</span>
                {post.verified && (
                  <div className="w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center shadow-neon">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                <span className="text-neon-blue/70 text-sm">@{post.handle}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neon-blue/70">
                <span>{post.timestamp}</span>
                <span>•</span>
                <Badge variant="outline" className="text-xs border-neon-blue/30 text-neon-blue bg-neon-blue/5">
                  {post.type}
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Follow Button */}
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              onClick={handleFollow}
              className={`text-xs px-4 py-1 transition-all duration-300 border ${
                isFollowing 
                  ? 'bg-neon-blue/20 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/30' 
                  : 'sentinel-button text-neon-blue hover:text-neon-cyan'
              }`}
            >
              <UserPlus className="w-3 h-3 mr-1" />
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
            
            <button className="p-2 hover:bg-neon-blue/10 rounded-full transition-all duration-300 text-neon-blue hover:text-neon-cyan">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="neon-text text-base leading-relaxed mb-3">
            {post.content}
          </p>
          
          {/* Chart/Image */}
          {post.image && (
            <div className="relative overflow-hidden rounded-lg mb-3 border border-neon-blue/20">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {post.chartData && (
                <div className="absolute top-4 left-4 glass-effect px-3 py-1 rounded-full border border-neon-blue/30">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-neon-cyan" />
                    <span className="neon-text text-sm font-medium">{post.chartData}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs border-neon-blue/30 text-neon-blue hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 cursor-pointer bg-neon-blue/5 hover:bg-neon-blue/10"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Metrics */}
        {post.metrics && (
          <div className="bg-zinc-700/50 rounded-lg p-3 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Price: </span>
                <span className="text-white font-medium">{post.metrics.price}</span>
              </div>
              <div>
                <span className="text-slate-400">24h Change: </span>
                <span className={`font-medium ${post.metrics.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {post.metrics.change}
                </span>
              </div>
              <div>
                <span className="text-slate-400">Volume: </span>
                <span className="text-white font-medium">{post.metrics.volume}</span>
              </div>
              <div>
                <span className="text-slate-400">Market Cap: </span>
                <span className="text-white font-medium">{post.metrics.marketCap}</span>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-zinc-700 pt-4">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 hover:text-red-400 transition-colors ${
                isLiked ? 'text-red-400' : 'text-slate-400'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{post.likes}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-slate-400 hover:text-orange-400 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{post.comments}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-slate-400 hover:text-green-400 transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">{post.shares}</span>
            </button>
          </div>
          
          <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 hover:bg-zinc-700 rounded-full transition-colors ${
              isBookmarked ? 'text-yellow-400' : 'text-slate-400'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedPost;