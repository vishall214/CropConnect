import React, { useState } from 'react';
import './SeedSubsidy.css';

const SeedSubsidy = () => {
  const [formData, setFormData] = useState({
    name: '',
    cropType: '',
    landSize: '',
    seedQuantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Application submitted successfully!');
    // Here, you can add functionality to send the data to a server or database
  };

  return (
    <div className="seed-subsidy-form">
      <h2>Apply for Seed Subsidy</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Crop Type:
          <input
            type="text"
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
            placeholder="Enter crop type"
            required
          />
        </label>

        <label>
          Land Size (in acres):
          <input
            type="number"
            name="landSize"
            value={formData.landSize}
            onChange={handleChange}
            placeholder="Enter land size"
            required
          />
        </label>

        <label>
          Seed Quantity (in kg):
          <input
            type="number"
            name="seedQuantity"
            value={formData.seedQuantity}
            onChange={handleChange}
            placeholder="Enter seed quantity required"
            required
          />
        </label>

        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
};

export default SeedSubsidy;