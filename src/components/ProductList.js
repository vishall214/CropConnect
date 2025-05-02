import React, { useState } from 'react';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';

const initialProducts = [
  { id: 1, name: 'Wheat', category: 'Grain', price: '₹100/kg', supplier: 'Agarwal Farms', available: 50 },
  { id: 2, name: 'Rice', category: 'Grain', price: '₹120/kg', supplier: 'Singh Agro', available: 75 },
  { id: 3, name: 'Tomato', category: 'Vegetables', price: '₹30/kg', supplier: 'Green Valley', available: 30 },
  { id: 4, name: 'Potato', category: 'Vegetables', price: '₹25/kg', supplier: 'Fresh Farms', available: 100 },
  { id: 5, name: 'Apple', category: 'Fruits', price: '₹80/kg', supplier: 'Himalayan Orchards', available: 25 },
  { id: 6, name: 'Banana', category: 'Fruits', price: '₹50/kg', supplier: 'Tropical Farms', available: 40 },
  { id: 7, name: 'Carrot', category: 'Vegetables', price: '₹40/kg', supplier: 'Green Valley', available: 45 },
  { id: 8, name: 'Corn', category: 'Grain', price: '₹90/kg', supplier: 'Singh Agro', available: 60 },
  { id: 9, name: 'Chicken', category: 'Poultry', price: '₹180/kg', supplier: 'Farm Fresh', available: 20 },
  { id: 10, name: 'Mutton', category: 'Meat', price: '₹450/kg', supplier: 'Quality Meats', available: 15 },
];

function ProductList() {
  const [products] = useState(initialProducts);
  const [currentCategory, setCurrentCategory] = useState('All');

  const handleFilterChange = (category) => {
    setCurrentCategory(category);
  };

  const filteredProducts = currentCategory === 'All' 
    ? products 
    : products.filter(product => product.category === currentCategory);

  return (
    <div>
      <h1 className="main-title">Explore Fresh Farm Products</h1>
      <FilterBar onFilterChange={handleFilterChange} currentCategory={currentCategory} />
      <div className="products">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;