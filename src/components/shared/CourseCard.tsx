// src/components/CourseCard.tsx
import React from 'react';
import { Play, Clock, Users, Star } from 'lucide-react';
import type { CourseCardProps } from '@/types/course-card';


const CourseCard: React.FC<CourseCardProps> = ({ title, description, duration, views, rating }) => (
  <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 group">
    <div className="p-0">
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <Play className="h-16 w-16 text-white/80" />
        </div>
        <div className="absolute top-4 left-4 bg-black/60 text-white px-2 py-1 rounded text-sm flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {duration}
        </div>
        <button className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <Play className="h-12 w-12 text-white" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {views} ko'rishlar
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
            {rating}
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 h-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md hover:shadow-lg transition-all duration-300">
          <Play className="h-4 w-4 mr-2" />
          Darsni boshlash
        </button>
      </div>
    </div>
  </div>
);

export default React.memo(CourseCard);