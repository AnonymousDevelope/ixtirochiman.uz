import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "@/data/pages/blog/blog.data";
import NotFound from "@/components/shared/NotFound"; // Assume you have a NotFound component
import { Button } from "@/components/ui/button"; // Custom button component
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react";
import BlogCard from "@/components/shared/BlogCard";

const BlogPageSlug = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) {
    return <NotFound />;
  }
  const article = articles.find(
    (a) =>
      a.id === parseInt(slug as string) ||
      a.title.toLowerCase().includes(slug.toLowerCase())
  );
  const recentArticles = articles
  .slice(0, 3); 
  if (!article) {
    return <NotFound />;
  }
  return (
    <div className="bg-tech-darker md:px-[250px] min-h-screen text-white px-4 py-8 md:py-10 scrollbar-custom mt-[50px]">
      {/* SEO Metadata */}
      <Helmet>
        <title>{article.title} | Ixtirochiman.uz</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.tags.join(", ")} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />
      </Helmet>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-[7.5fr_4.5fr]">
        <article className="max-w-full">
          {/* Article Header */}
          <header className="mb-8">
            {/* Article image with fallback */}
            <div className="relative w-full h-64 md:h-full mb-6 rounded-lg overflow-hidden">
              <img
                src={article.image || "/images/blog-placeholder.jpg"}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/blog-placeholder.jpg";
                }}
              />
            </div>

            {/* Publication date and reading time */}
            <div className="flex items-center gap-4 text-gray-400 mb-4 text-sm">
              {article.date && (
                <span className="flex items-center gap-1">
                  <CalendarIcon size={16} />
                  {article.date}
                </span>
              )}
              {article.readTime && (
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {article.readTime}
                </span>
              )}
            </div>

            {/* Article title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {article.title}
            </h1>
            {article.description && (
              <p className="text-lg text-gray-300 mb-6">
                {article.description}
              </p>
            )}
          </header>

          <section className="prose prose-invert max-w-none mb-10">
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : (
              <p className="text-gray-400">Maqola kontenti mavjud emas</p>
            )}
          </section>

          {/* Tags */}
          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="bg-gray-700 hover:bg-gray-600 text-sm text-white px-3 py-1 rounded-full transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          {/* Back button */}
          <footer className="flex justify-start">
            <Button asChild variant="default">
              <Link to="/blog">
                <ArrowLeft className="mr-2" size={16} />
                Barcha maqolalar
              </Link>
            </Button>
          </footer>
        </article>
        <div className="flex flex-row gap-3 flex-wrap h-max">
          {
            recentArticles.map(a=>(
              <BlogCard {...a } isLittle={true}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogPageSlug;
