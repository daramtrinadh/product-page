
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

import './index.css'; // Create this file for custom styles

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useAuth();

  // Calculate the total price of items in the cart
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Function to handle placing an order
  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    // Add any additional order logic here, such as clearing the cart or sending order details to a backend
  };

  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='empty-cart-message'>Your cart is empty.</p>
      ) : (
        <div className='cart-content'>
          <ul className='cart-items-list'>
            {cartItems.map((item) => (
              <li key={item.id} className='cart-item'>
                <img src={item.image} alt={item.title} className='cart-item-image' />
                <div className='cart-item-details'>
                  <h3 className='cart-item-title'>{item.title}</h3>
                  <p className='cart-item-price'>Price: ${item.price}</p>
                  <div className='quantity-controls'>
                    <p>Quantity</p>
                    <button
                      className='quantity-btns'
                      onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <CiCircleMinus/>
                    </button>
                    <span className='quantity-value'>{item.quantity}</span>
                    <button
                      className='quantity-btns'
                      onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                    >
                      <CiCirclePlus/>
                    </button>
                  </div>
                  <p className='cart-item-total'>
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button className='remove-btn' onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className='cart-summary'>
            <h3 className='cart-total'>Total: ${total.toFixed(2)}</h3>
            <button className='place-order-btn' onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
