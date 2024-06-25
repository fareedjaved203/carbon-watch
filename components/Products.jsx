import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="container mx-auto px-4 md:px-16">
      <div className="flex justify-between items-center mt-20 mb-16">
        <div className="text-3xl md:text-4xl" style={{ fontWeight: "600" }}>
          Featured Products
        </div>
        <div className="text-gray-600 underline">See All</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex-1">
          <ProductCard />
        </div>
        <div className="flex-1">
          <ProductCard />
        </div>
        <div className="flex-1">
          <ProductCard />
        </div>
        <div className="flex-1">
          <ProductCard />
        </div>
        <div className="flex-1">
          <ProductCard />
        </div>
        <div className="flex-1">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
