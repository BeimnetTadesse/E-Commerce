import React from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.css';
import Navbar from './components/Navbar';
import { useCart } from './App';

const productData = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    image: "https://images.ctfassets.net/vx12w8gtks6f/1jvf87prwZFWlaXnayhNNd/630e63c69291d8e02a37e6fbe8ebc06c/iPhone_14_Midnight_PDP_Image_Position-1_CAEN.jpg",
    price: 999.99,
    quantity: 1, 
    description: "The latest and greatest iPhone with a powerful A16 chip and a stunning triple-lens camera system.",
  },
  {
    id: 2,
    name: "iPhone 14",
    image: "https://www.istore.co.za/media/catalog/product/i/p/iphone_14_pro_deep_purple-6.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    price: 799.99,
    quantity: 1,
    description: "A great value iPhone with a powerful A16 chip and a beautiful dual-lens camera system.",
  },
  {
    id: 3,
    name: "iPhone SE 3",
    image: "https://game4u.co.za/wp-content/uploads/2022/04/iphone-x-silver.jpg",
    price: 429.99,
    quantity: 1,
    description: "A compact and affordable iPhone with a powerful A15 chip and a classic design.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id, 10));
  const { cartItems, addToCart, removeFromCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const handleCartAction = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <Navbar />
      <div className="product-details-container">
        <div>
          <img src={product.image} alt={product.name} className="product-details-image" />
        </div>
        <div className="product-details-info">
          <h2 className="product-details-name">{product.name}</h2>
          <p className="product-details-price">${product.price.toFixed(2)}</p>
          <p className="product-details-description">{product.description}</p>
          <button className="add-to-cart-button" onClick={handleCartAction}>
            {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
