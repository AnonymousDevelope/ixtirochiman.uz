import React from 'react';
import { MapPin } from 'lucide-react';

const MapCard: React.FC = () => (
  <div className="rounded-lg border bg-tech-dark/50 border-tech-cyan/20 shadow-sm overflow-hidden">
    <div className="relative w-full h-72">
      <iframe
        title="Ohangaron Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.189998571374!2d69.61333427548398!3d40.911579771364316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae33936fb77ee9%3A0x15adcb4b736134ed!2sOhangaron%20yoshlar%20texnoparki!5e0!3m2!1sen!2s!4v1750764028651!5m2!1sen!2s" 
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Optional: icon overlay */}
      <div className="absolute bottom-2 left-2 bg-black/60 px-3 py-1 rounded flex items-center gap-2 text-white text-sm">
        <MapPin className="w-4 h-4 text-tech-cyan" />
        Ohangaron, Tashkent Region
      </div>
    </div>
  </div>
);

export default React.memo(MapCard);
