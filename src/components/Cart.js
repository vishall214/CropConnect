import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Simulating loading cart items from storage
  useEffect(() => {
    // In a real app, you would load from localStorage or API
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
        calculateTotal(parsedCart);
      } catch (e) {
        console.error("Error parsing cart data", e);
      }
    }
  }, []);

  // Calculate total price
  const calculateTotal = (items) => {
    const sum = items.reduce((total, item) => {
      const priceStr = item.price;
      const numericPrice = parseInt(priceStr.replace(/[^\d]/g, ''));
      return total + (numericPrice * item.quantity);
    }, 0);
    setTotal(sum);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <Link to="/">
            <button className="cta">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src="/api/placeholder/80/80" alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">{item.price}</div>
              </div>
              <div className="cart-quantity">
                <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span className="quantity-number">{item.quantity}</span>
                <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total Amount:</span>
              <span>₹{total}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;