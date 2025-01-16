import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/similarProducts.json"; // Mock data for similar products

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to Our eCommerce Store</h1>
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default HomePage;
