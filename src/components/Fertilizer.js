// src/components/Fertilizer.js
import React, { useState } from 'react';
import './Fertilizer.css';

function Fertilizer() {
  const [formData, setFormData] = useState({
    name: '',
    landArea: '',
    cropType: '',
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
    if (formData.landArea > 0 && formData.farmerCategory && formData.cropType) {
      setEligibility('Eligible for Fertilizer Subsidy');
    } else {
      setEligibility('Not Eligible for Fertilizer Subsidy');
    }
  };

  return (
    <div className="fertilizer-form">
      <h1>Fertilizer Subsidy Eligibility</h1>
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
          <label htmlFor="landArea">Land Area (in acres):</label>
          <input
            type="number"
            id="landArea"
            name="landArea"
            value={formData.landArea}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="cropType">Crop Type:</label>
          <input
            type="text"
            id="cropType"
            name="cropType"
            value={formData.cropType}
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
            <option value="large">Large Farmer</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Check Eligibility</button>
      </form>

      {eligibility && <div className="eligibility-result">{eligibility}</div>}
    </div>
  );
}

export default Fertilizer;