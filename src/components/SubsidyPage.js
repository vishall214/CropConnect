import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubsidyPage.css';

const Subsidy = () => {
  const [selectedSubsidy, setSelectedSubsidy] = useState(null);
  const navigate = useNavigate();

  const subsidies = [
    {
      id: 1,
      title: "Fertilizer Subsidy",
      amount: "₹10,000",
      coverage: "Provides discounts on essential fertilizers",
      eligibility: "For all registered farmers",
      duration: "6 Months Validity",
      route: "/fertilizer",
      primary: false
    },
    {
      id: 2,
      title: "Livestock Subsidy",
      amount: "₹50,000",
      coverage: "Covers livestock purchase and healthcare",
      eligibility: "For farmers owning <10 animals",
      duration: "1 Year Validity",
      route: "/livestock",
      primary: true
    },
    {
      id: 3,
      title: "Seed Subsidy",
      amount: "₹20,000",
      coverage: "Discounts on certified seeds for cultivation",
      eligibility: "For farmers with <5 hectares of land",
      duration: "1 Year Validity",
      route: "/seed",
      primary: false
    }
  ];

  const handleApply = () => {
    if (selectedSubsidy) {
      const selectedRoute = subsidies.find(
        (subsidy) => subsidy.title === selectedSubsidy
      ).route;
     
      navigate(selectedRoute);
    } else {
      alert("Please select a subsidy first!");
    }
  };

  return (
    <div className="subsidy-container">
      <h1>Available Subsidies</h1>
      <div className="cards-container">
        {subsidies.map((subsidy) => (
          <div
            key={subsidy.id}
            className={`subsidy-card ${subsidy.primary ? 'primary' : ''}`}
          >
            <div className="card-header">
              <h2>{subsidy.title}</h2>
              
            </div>
            <div className="card-details">
              <p>📌 {subsidy.coverage}</p>
              <p>✅ {subsidy.eligibility}</p>
              <p>⏳ {subsidy.duration}</p>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                name="subsidy"
                value={subsidy.title}
                onChange={() => setSelectedSubsidy(subsidy.title)}
                checked={selectedSubsidy === subsidy.title}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="apply-button"
        onClick={handleApply}
      >
        Apply Now
      </button>
    </div>
  );
};

export default Subsidy;
