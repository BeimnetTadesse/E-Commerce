import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'
import Navbar from './components/Navbar';

const productData = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      image: "https://images.ctfassets.net/vx12w8gtks6f/1jvf87prwZFWlaXnayhNNd/630e63c69291d8e02a37e6fbe8ebc06c/iPhone_14_Midnight_PDP_Image_Position-1_CAEN.jpg",
      price: 999.99,
      description: "The latest and greatest iPhone with a powerful A16 chip and a stunning triple-lens camera system.",
    },
    {
      id: 2,
      name: "iPhone 14",
      image: "https://www.istore.co.za/media/catalog/product/i/p/iphone_14_pro_deep_purple-6.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      price: 799.99,
      description: "A great value iPhone with a powerful A16 chip and a beautiful dual-lens camera system.",
    },
    {
      id: 3,
      name: "iPhone SE 3",
      image: "https://game4u.co.za/wp-content/uploads/2022/04/iphone-x-silver.jpg",
      price: 429.99,
      description: "A compact and affordable iPhone with a powerful A15 chip and a classic design.",
    } 
  ];
  

const ProductList = () => {
  return (
    <>
    <Navbar />
      <div className="container">
        <h1>Iphone List</h1>
        <div className="product-list-container">
          {productData.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-list-link"
            >
              <div className="product-list-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-list-image"
                />
                <h2 className="product-list-name">{product.name}</h2>
                <p className="product-list-price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
