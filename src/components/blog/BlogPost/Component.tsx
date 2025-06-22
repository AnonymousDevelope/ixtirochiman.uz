// src/components/Component.tsx
import React from 'react';
import BlogCard from '@/components/shared/BlogCard';
import type { Article } from '@/types/blog-page';
interface ComponentProps {
  articles: Article[];
}

const Component: React.FC<ComponentProps> = ({ articles }) => (
  <section className="py-16 bg-tech-darker">
    <div className="container mx-auto px-4 root-container">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Recent Posts
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <BlogCard {...article} isLittle={false}/>
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(Component);