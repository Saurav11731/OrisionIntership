import React, { useState } from 'react';
import productData from '../data/mockData.json';
import '../styles/ProductPage.css';


const ProductPage = () => {
  const [product] = useState(productData);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>${selectedVariant.price}</h3>
      <p>{selectedVariant.available ? 'In Stock' : 'Out of Stock'}</p>
      <div>
        {product.variants.map((variant) => (
          <button key={variant.id} onClick={() => handleVariantChange(variant)}>
            {variant.name}
          </button>
        ))}
      </div>
      <button disabled={!selectedVariant.available}>Add to Cart</button>
      <h3>Reviews:</h3>
      <ul>
        {product.reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.user}</strong>: {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
