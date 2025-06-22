// src/components/StatCard.tsx
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
    <div className="text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

export default React.memo(StatCard);