import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Users, UserPlus, Verified } from 'lucide-react';

const RecommendedAccounts = ({ accounts }) => {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <Users className="w-5 h-5 text-blue-400" />
          <span>Recommended Accounts</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {accounts.map((account, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {account.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col">
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
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                    {account.followers} followers
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-600 text-green-400">
                    {account.reputation}% reputation
                  </Badge>
                </div>
              </div>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <UserPlus className="w-3 h-3 mr-1" />
              Follow
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecommendedAccounts;