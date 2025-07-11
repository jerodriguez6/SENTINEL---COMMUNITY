import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, Users, Target, TrendingUp, ExternalLink } from 'lucide-react';

const LaunchpadCard = ({ project }) => {
  const [isInterested, setIsInterested] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Upcoming': return 'bg-blue-500';
      case 'Ended': return 'bg-gray-500';
      default: return 'bg-yellow-500';
    }
  };

  const getProgressPercentage = () => {
    return (project.raised / project.hardCap) * 100;
  };

  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${getStatusColor(project.status)} text-white`}>
              {project.status}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-black/70 text-white border-white/20">
              {project.type}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Project Info */}
        <div className="mb-4">
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-slate-400 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
          
          {/* Token Info */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-sm">
              <span className="text-slate-400">Token: </span>
              <span className="text-white font-medium">{project.token}</span>
            </div>
            <div className="text-sm">
              <span className="text-slate-400">Price: </span>
              <span className="text-white font-medium">{project.price}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-sm">Progress</span>
            <span className="text-white text-sm font-medium">
              {getProgressPercentage().toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-slate-400">
            <span>{project.raised} {project.currency}</span>
            <span>{project.hardCap} {project.currency}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-slate-400 text-xs">Participants</span>
            </div>
            <span className="text-white font-medium">{project.participants}</span>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-slate-400 text-xs">Ends In</span>
            </div>
            <span className="text-white font-medium">{project.timeLeft}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setIsInterested(!isInterested)}
          >
            <Target className="w-4 h-4 mr-2" />
            {isInterested ? 'Interested' : 'Join Sale'}
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Network: {project.network}</span>
            <span>Min: {project.minContribution}</span>
            <span>Max: {project.maxContribution}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LaunchpadCard;