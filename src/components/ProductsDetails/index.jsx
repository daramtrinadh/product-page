import { useEffect, useState } from "react";
import CardItem from "../CardItem";
import './index.css';

const ProductsDetails = ({ selectedCategories, sortOrder }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let allProducts = [];

        if (selectedCategories.length === 0) {
          const response = await fetch('https://fakestoreapi.com/products');
          allProducts = await response.json();
        } else {
          const requests = selectedCategories.map((category) =>
            fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category.toLowerCase())}`)
              .then(res => res.json())
          );

          const results = await Promise.all(requests);
          allProducts = results.flat();
        }

        if (sortOrder === "low-to-high") {
          allProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-to-low") {
          allProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories, sortOrder]); 
  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <CardItem image={product.image} title={product.title} id={product.id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found matching the selected filters.</p>
      )}
    </div>
  );
};

export default ProductsDetails;
