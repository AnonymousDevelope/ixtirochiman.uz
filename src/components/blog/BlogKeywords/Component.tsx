// src/components/Component.tsx
import React from 'react';

interface ComponentProps {
  keywords: string[];
}

const Component: React.FC<ComponentProps> = ({ keywords }) => (
  <section className="py-16 bg-tech-darker border-t border-tech-cyan/20">
    <div className="container mx-auto px-4 root-container">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Keywords
      </h2>
      <ul className="flex flex-wrap gap-3 justify-center">
        {keywords.map((keyword, index) => (
          <li
            key={index}
            className="px-3 py-1 bg-tech-cyan/20 text-tech-cyan rounded-full text-sm font-medium hover:bg-tech-cyan hover:text-tech-dark transition-colors duration-200"
          >
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default React.memo(Component);