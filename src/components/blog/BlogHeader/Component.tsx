// src/components/BlogHeader.tsx
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const BlogHeader: React.FC = () => (
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
      {/* Banner Rasm */}
      {/* <div className="relative rounded-xl overflow-hidden shadow-xl mb-12">
        <img
          src="https://via.placeholder.com/1200x400.png?text=Innovation+Blog"
          alt="Tashkent Region Youth Technopark Blog"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-tech-cyan/20" />
      </div> */}

      {/* 🔥 Carousel Slayder */}
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold text-tech-cyan">
                      #{index + 1} Coming Soon
                    </span>
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

export default React.memo(BlogHeader);
