import React from 'react';
import { MapPin } from 'lucide-react';

const MapCard: React.FC = () => (
  <div className="rounded-lg border bg-tech-dark/50 border-tech-cyan/20 shadow-sm">
    <div className="h-64 bg-gradient-to-br from-tech-cyan/10 to-tech-electric/10 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <MapPin className="w-12 h-12 text-tech-cyan mx-auto mb-4" />
        <p className="text-foreground/50">Interactive Map</p>
        <p className="text-sm text-gray-400">Ohangaron, Tashkent Region</p>
      </div>
    </div>
  </div>
);

export default React.memo(MapCard);