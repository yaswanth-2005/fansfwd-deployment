"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CategoryCarousel() {
  const [currentCategory, setCurrentCategory] = useState(0);

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setCurrentCategory(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  const category = categories[currentCategory];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{category.name}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prevCategory}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextCategory}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* @ts-ignore */}
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
