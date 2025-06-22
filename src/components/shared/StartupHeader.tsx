// src/components/StartupHeader.tsx
import React from 'react';

const StartupHeader: React.FC = () => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Startup maktabi</h2>
    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
      Bepul video darslar orqali startapingizni noldan boshlashni va muvaffaqiyatli biznesga aylantirishni o'rganing
    </p>
  </div>
);

export default React.memo(StartupHeader);