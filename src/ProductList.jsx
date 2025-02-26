import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
import Navbar from './components/Navbar';
import { useCart } from './App';

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

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>iPhone List</h1>
        <div className="product-list-container">
          {productData.map((product) => (
            <div key={product.id} className="product-list-item">
              <Link to={`/product/${product.id}`} className="product-list-link">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-list-image"
                />
                <h2 className="product-list-name">{product.name}</h2>
                <p className="product-list-price">${product.price.toFixed(2)}</p>
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
