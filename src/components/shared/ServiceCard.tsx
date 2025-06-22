import type { ServiceCardProps } from "@/types/mission-section";
import React from "react";

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  tags,
}) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
    <div className="p-8">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-3 text-foreground">
            {title}
          </h4>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ServiceCard;