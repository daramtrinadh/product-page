import React, { useEffect, useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import the AuthContext
import './index.css';

const ProductItemDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const { addToCart, addToWishlist } = useAuth(); // Destructure functions from context

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} has been added to your cart!`);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    alert(`${product.title} has been added to your wishlist!`);
  };

  return (
    <div className='product-item-details'>
        <div className='product-item-image-div'>
            <img src={product.image} alt={product.title} className='product-item-image' />
            <h3 className='product-item-title'>{product.title}</h3>
        </div>    
        <div className='products-extra-details'>
            <h1 className='product-item-price'>Price: ${product.price}</h1>
            <div className='cart-section'>
                <CiCircleMinus size={23}/>
                <button 
                  type="button" 
                  className='cart-btn' 
                  onClick={handleAddToCart} // Add to cart functionality
                >
                  Add to Cart
                </button>
                <CiCirclePlus size={23}/>
            </div>
            <h3 className='product-item-category'> {product.category.toUpperCase()}</h3>
            <button 
              className='wishlist-btn' 
              onClick={handleAddToWishlist} // Add to wishlist functionality
            >
              Add to Wishlist
            </button>

            <h3 className='product-item-description'>Description: {product.description}</h3>
        </div>
    </div>
  );
};

export default ProductItemDetail;
