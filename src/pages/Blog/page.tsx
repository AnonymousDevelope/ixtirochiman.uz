import React from "react";
import { BlogHeader, BlogKeywords, BlogPost } from "@/components/blog";
import { Helmet } from "react-helmet-async"; // SEO uchun meta teglar
import { articles, keywords } from "@/data/pages/blog/blog.data";

const BlogPage: React.FC = () => (
  <main className="bg-tech-darker min-h-screen scrollbar-custom md:px-[200px]">
    <Helmet>
      <title>Blog | Ixtirochiman.uz - Tashkent Region Youth Technopark</title>
      <meta
        name="description"
        content="Explore the latest insights, success stories, and technological trends from Tashkent Region Youth Technopark. Stay updated with our blog on AI, robotics, startups, and more."
      />
      <meta name="keywords" content={keywords.join(", ")} />
    </Helmet>
    <BlogHeader />
    <BlogPost articles={articles} />
    <BlogKeywords keywords={keywords} />
  </main>
);

export default BlogPage;
