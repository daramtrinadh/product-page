import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductsDetails from '../ProductsDetails';
import './index.css';

const Products = () => {
  const [filter, setFilter] = useState(false);
  const [tempSelectedCategories, setTempSelectedCategories] = useState([]); 
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  const categories = [
    "Electronics",
    "jewelery",
    "Men's Clothing",
    "Women's Clothing"
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setTempSelectedCategories((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((category) => category !== value)
        : [...prevSelected, value]
    );
  };

  const handleApplyFilters = () => {
    setSelectedCategories(tempSelectedCategories); 
    setFilter(false); 
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value); 
  };

  return (
    <div className='products-component'>
      <div className='filter-section'>
        <div className='count-filter-section'>
          <div className='filter-items'>
            {filter ? (
              <div className='filter-btn-icon'>
                <MdOutlineKeyboardArrowLeft />
                <button onClick={() => setFilter(false)} className='filter-btn-hide'>Hide Filters</button>
              </div>
            ) : (
              <div className='filter-btn-icon'>
                <button onClick={() => setFilter(true)} className='filter-btn'>Show Filters</button>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
        </div>
        <div>
          <select onChange={handleSortChange} value={sortOrder}>
            <option value="">Recommended</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>
      <hr className='grey-line' />
      <div>
        {filter ? (
          <div className='filters-products'>
            <div className='filters-part'>
              <h4>Select Categories:</h4>
              {categories.map((category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    value={category}
                    checked={tempSelectedCategories.includes(category)}
                    onChange={handleCheckboxChange}
                  />
                  {category}
                </label>
              ))}
              <button className='apply-btn' onClick={handleApplyFilters}>Apply</button>
            </div>
            <ProductsDetails selectedCategories={selectedCategories} sortOrder={sortOrder} />
            </div>
        ):
        <div className='products'>
          <ProductsDetails selectedCategories={selectedCategories} sortOrder={sortOrder} />
        </div>
      }
      </div>
    </div>
  );
};

export default Products;
