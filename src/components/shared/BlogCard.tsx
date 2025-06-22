import React from "react";
import { Tag, User, Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Article } from "@/types/blog-page";

interface BlogCardProps extends Article {
  isLittle?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  category,
  tags,
  title,
  description,
  author,
  readTime,
  date,
  isLittle = false, // default: false
  image,
}) => (
  <article
    className={`bg-white h-fit dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${
      isLittle ? "max-w-sm" : ""
    }`}
  >
    {/* Rasm qismi */}
    <div
      className={`${
        isLittle ? "h-40" : "aspect-video"
      } relative overflow-hidden`}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`}
      />
      <div className="absolute inset-0 bg-tech-cyan/10 group-hover:bg-tech-cyan/20 transition-colors duration-300" />
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-tech-cyan/20 text-tech-cyan border-tech-cyan/30 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          {category}
        </span>
      </div>
    </div>
    {/* Matn qismi */}
    <div className={`${isLittle ? "p-4" : "p-6"}`}>
      <div className={`flex flex-wrap gap-2 ${isLittle ? "mb-2" : "mb-3"}`}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-tech-cyan/20 text-tech-cyan border-tech-cyan/30 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <h3
        className={`font-bold text-gray-900 dark:text-gray-100 ${
          isLittle ? "text-lg mb-2" : "text-xl mb-3"
        } group-hover:text-tech-cyan transition-colors duration-200`}
      >
        {title}
      </h3>
      <p
        className={`text-gray-600 dark:text-gray-400 ${
          isLittle ? "text-sm mb-3" : "mb-4"
        } line-clamp-3`}
      >
        {description}
      </p>
      <div
        className={`flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 ${
          isLittle ? "mb-3" : "mb-4"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {author}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
      </div>
      <Link to={`/blog/${title}`}>
        <Button
          className={`w-full group-hover:bg-tech-cyan group-hover:text-tech-dark ${
            isLittle ? "text-sm py-1 h-auto" : ""
          }`}
          variant={"default"}
        >
          Read Article
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </Link>
    </div>
  </article>
);

export default React.memo(BlogCard);
