// src/components/Livestock.js
import React, { useState } from 'react';
import './Livestock.css';

function Livestock() {
  const [formData, setFormData] = useState({
    name: '',
    livestockType: '',
    livestockCount: '',
    farmerCategory: ''
  });

  const [eligibility, setEligibility] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Check eligibility based on form data
  const checkEligibility = (e) => {
    e.preventDefault();

    // Simple eligibility criteria for demonstration purposes
    if (formData.livestockCount > 0 && formData.livestockType && formData.farmerCategory) {
      setEligibility('Eligible for National Livestock Mission');
    } else {
      setEligibility('Not Eligible for National Livestock Mission');
    }
  };

  return (
    <div className="livestock-form">
      <h1>National Livestock Mission Eligibility</h1>
      <form onSubmit={checkEligibility}>
        <div className="form-field">
          <label htmlFor="name">Farmer Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="livestockType">Livestock Type:</label>
          <input
            type="text"
            id="livestockType"
            name="livestockType"
            value={formData.livestockType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="livestockCount">Number of Livestock:</label>
          <input
            type="number"
            id="livestockCount"
            name="livestockCount"
            value={formData.livestockCount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="farmerCategory">Farmer Category:</label>
          <select
            id="farmerCategory"
            name="farmerCategory"
            value={formData.farmerCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="small">Small Farmer</option>
            <option value="marginal">Marginal Farmer</option>
            <option value="scst">SC/ST Farmer</option>
            <option value="large">Large Farmer</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Check Eligibility</button>
      </form>

      {eligibility && <div className="eligibility-result">{eligibility}</div>}
    </div>
  );
}

export default Livestock;