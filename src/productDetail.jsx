import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function productDetail() {
    const productId = parseInt(match.params.id);
    const product = productData.find((p) => p.id === productId);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
      </div>
    );
  }
export default productDetail

