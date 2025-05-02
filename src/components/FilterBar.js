import React from 'react';

const FilterBar = ({ onFilterChange, currentCategory }) => {
  return (
    <div className="filterbar">
      <button 
        className={`filter-btn ${currentCategory === 'Vegetables' ? 'active' : ''}`} 
        onClick={() => onFilterChange('Vegetables')}
      >
        Vegetables
      </button>
      <button 
        className={`filter-btn ${currentCategory === 'Fruits' ? 'active' : ''}`} 
        onClick={() => onFilterChange('Fruits')}
      >
        Fruits
      </button>
      <button 
        className={`filter-btn ${currentCategory === 'Grain' ? 'active' : ''}`} 
        onClick={() => onFilterChange('Grain')}
      >
        Grain
      </button>
      <button 
        className={`filter-btn ${currentCategory === 'Meat' ? 'active' : ''}`} 
        onClick={() => onFilterChange('Meat')}
      >
        Meat
      </button>
      <button 
        className={`filter-btn ${currentCategory === 'Poultry' ? 'active' : ''}`} 
        onClick={() => onFilterChange('Poultry')}
      >
        Poultry
      </button>
      <button 
        className={`filter-btn ${currentCategory === 'All' ? 'active' : ''}`} 
        onClick={() => onFilterChange('All')}
      >
        All
      </button>
    </div>
  );
};

export default FilterBar;