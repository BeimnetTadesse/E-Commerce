import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useCart } from './App';
import './ProductDetails.css';

const productData = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-16-pro-202409?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1739284570852",
    price: 999.99,
    description: "The latest and greatest iPhone with a powerful A16 chip and a stunning triple-lens camera system.",
  },
  {
    id: 2,
    name: "iPhone 16",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-16-202409?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1739284570526",
    price: 799.99,
    description: "A great value iPhone with a powerful A16 chip and a beautiful dual-lens camera system.",
  },
  {
    id: 3,
    name: "iPhone 15",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-202409?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1739284570573",
    price: 699.99,
    description: "A compact and affordable iPhone with a powerful A15 chip and a classic design.",
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-details-container">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
