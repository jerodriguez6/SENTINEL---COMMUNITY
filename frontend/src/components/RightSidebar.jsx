import React from 'react';
import TrendingTopics from './TrendingTopics';
import TrendingTokens from './TrendingTokens';
import RecommendedAccounts from './RecommendedAccounts';
import { mockTrendingTopics, mockRecommendedAccounts } from '../mockData';

const RightSidebar = () => {
  return (
    <div className="w-80 space-y-6">
      <TrendingTopics topics={mockTrendingTopics} />
      <TrendingTokens />
      <RecommendedAccounts accounts={mockRecommendedAccounts} />
    </div>
  );
};

export default RightSidebar;