import React from 'react';
import ProductList from './ProductList'; 

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to CropConnect</h1>
      <ProductList />
    </div>
  );
}

export default HomePage;