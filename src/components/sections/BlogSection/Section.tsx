
import BlogHeader from '@/components/shared/BlogHeader';
import BlogCard from '@/components/shared/BlogCard';
import ViewAllButton from '@/components/shared/ViewAllButton';
import { articles } from '@/data/sections/blog.data';

const BlogSection = () => (
  <section
    id="blog"
    className="py-20 lg:px-[250px] bg-gray-50 dark:bg-gray-900 scrollbar-custom"
  >
    <div className="container mx-auto px-4 root-container">
      <BlogHeader />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articles.map((article) => (
          <BlogCard key={article.id} {...article} />
        ))}
      </div>
      <ViewAllButton />
    </div>
  </section>
);

export default BlogSection;