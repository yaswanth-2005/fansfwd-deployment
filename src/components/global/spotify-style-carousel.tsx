"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SpotifyStyleCarousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full px-16 mx-auto bg-black text-white">
      {categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {category.products.map((product) => (
                <Card
                  key={product.id}
                  className="flex-shrink-0 w-40 bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <CardContent className="p-4">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                      {hoveredId === product.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">
                      {product.artist}
                    </p>
                  </CardContent>
                </Card>
              ))}
              {category.products.map((product) => (
                <Card
                  key={product.id}
                  className="flex-shrink-0 w-40 bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <CardContent className="p-4">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                      {hoveredId === product.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">
                      {product.artist}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
