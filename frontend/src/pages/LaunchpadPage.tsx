import React, { useState } from 'react';
import { Filter, Rocket, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import Layout from '../components/Layout';
import LaunchpadCard from '../components/LaunchpadCard';
import { mockLaunchpadProjects } from '../mockData';

const LaunchpadPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  return (
    <Layout>
      <div className="px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
                <Rocket className="w-8 h-8 mr-3 text-orange-400" />
                Launchpad
              </h1>
              <p className="text-slate-400">
                Descubre y participa en las mejores preventas de tokens
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-slate-800 rounded-lg px-4 py-2 border border-slate-700">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm font-medium">Total Raised: $12.4M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-40 bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="live">En Vivo</SelectItem>
                <SelectItem value="upcoming">Próximos</SelectItem>
                <SelectItem value="ended">Finalizados</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-40 bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="ieo">IEO</SelectItem>
                <SelectItem value="ido">IDO</SelectItem>
                <SelectItem value="ico">ICO</SelectItem>
                <SelectItem value="dao">DAO</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              size="sm" 
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros Avanzados
            </Button>
          </div>
        </div>

        {/* Launchpad Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockLaunchpadProjects.map((project) => (
            <LaunchpadCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
          >
            Ver Más Proyectos
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default LaunchpadPage;