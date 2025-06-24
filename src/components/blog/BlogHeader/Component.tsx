import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { blogImages } from "@/data/pages/blog/blog.data";

const BlogHeader: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-tech-cyan/10 to-tech-electric/10">
      <div className="container mx-auto px-4 root-container">
        {/* Header Matni */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Ixtirochiman.uz Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive into the latest insights, success stories, and technological trends
            from the Tashkent Region Youth Technopark. Our blog covers AI, robotics,
            startups, and more to inspire the next generation of innovators.
          </p>
        </div>

        {/* 🔥 Carousel Slayder */}
        <Carousel opts={{loop:true}} className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-1">
            {blogImages.map((imageUrl, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0 rounded overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={`Blog image ${index + 1}`}
                        className="w-full h-full object-cover aspect-square"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/blog-placeholder.jpg";
                        }}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default React.memo(BlogHeader);
