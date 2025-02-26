import React from "react";
import Navbar from "./components/Navbar";
import { useCart } from "./App";
import "./ShoppingCart.css"; // Import your styling

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCompletePurchase = () => {
    console.log("Purchase completed!");
  };

  return (
    <>
      <Navbar />
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
            <div className="cart-total">
              <p>Total: ${calculateTotalPrice()}</p>
            </div>
            <button onClick={handleCompletePurchase}>Complete Purchase</button>
          </ul>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;