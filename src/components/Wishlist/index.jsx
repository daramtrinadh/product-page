
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './index.css'; 

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useAuth(); // Access wishlist items and remove function

  return (
    <div className='wishlist-container'>
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id} className='wishlist-item'>
              <img src={item.image} alt={item.title} className='wishlist-item-image' />
              <div className='wishlist-item-details'>
                <h3>{item.title}</h3>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
