// src/components/BlogHeader.tsx
import React from 'react';

const BlogHeader: React.FC = () => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
      Innovation Blog
    </h2>
    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
      Stay informed with the latest insights, success stories, and technological
      developments from the Tashkent Region Youth Technopark
    </p>
  </div>
);

export default React.memo(BlogHeader);