import React from 'react';

const ProductCard = ({ product }) => {
  const imgUrl = "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=";
  return (
    <div className="product-card">
      <img src={imgUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Fresh organic produce grown without pesticides</p>
      <p className="price">{product.price}</p>
      <p>By {product.supplier}</p>
      <p>Available: {product.available} kg</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
