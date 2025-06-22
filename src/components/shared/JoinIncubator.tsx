// src/components/JoinIncubator.tsx
import React from 'react';

const JoinIncubator: React.FC = () => (
  <div className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
      Barcha darslarni tugatdingizmi?
    </h3>
    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
      Endi o'z startapingizni boshlash vaqti keldi! Bizning inkubatorimizga qo'shiling va professional yordam oling
    </p>
    <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-md hover:shadow-lg transition-all duration-300">
      Inkubatorga ariza berish
    </button>
  </div>
);

export default React.memo(JoinIncubator);