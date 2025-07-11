import React, { useState } from 'react';
import { Filter, TrendingUp, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import Layout from '../components/Layout';
import FeedPost from '../components/FeedPost';
import { mockFeedPosts } from '../mockData';

const FeedPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  return (
    <Layout>
      <div className="px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Feed
              </h1>
              <p className="text-slate-400">
                Análisis de mercado, gráficos y noticias de la comunidad crypto
              </p>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Crear Post
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-40 bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="Filtros" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="analysis">Análisis</SelectItem>
                <SelectItem value="news">Noticias</SelectItem>
                <SelectItem value="alerts">Alertas</SelectItem>
                <SelectItem value="research">Research</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="Ordenar" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="recent">Más Recientes</SelectItem>
                <SelectItem value="popular">Más Populares</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="following">Siguiendo</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              size="sm" 
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              <Filter className="w-4 h-4 mr-2" />
              Más Filtros
            </Button>
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-6">
          {mockFeedPosts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
          >
            Cargar Más Posts
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default FeedPage;