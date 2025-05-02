import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🆕 for navigation
import './AgriculturePage.css';
import mannie from './mannie.png';
import logo from './logo.png';

function AgriculturePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // 🆕 get the navigate function

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleLoginClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/login'); // ⏩ after loader, go to SubsidyPage
    }, 1500);
  };

  return (
    <div className="swiggy-container">
      {/* Loader Overlay */}
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {/* Header */}
      <div className='gradient-part'>
        <header className="header">
          <div className="header-left">
            <img src={logo} alt="CropConnect Logo" className="logo" />
            <span className="brand-name">CropConnect</span>
          </div>

          <div className='header-right'>
            <button className='btns' onClick={() => navigate('/signup')} >About Us</button>
            <button className='btns' onClick={() => navigate('/signup')}>Sign Up</button>

            <button 
              className="button" 
              style={{ "--clr": "#7808d0" }}
              onClick={handleLoginClick} // ✨ click here triggers login flow
            >
              <span className="button__icon-wrapper">
                {/* SVGs */}
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button_icon-svg button_icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="hero-section">
          <div className='hero-left'>
            <p>Sow Knowledge.<br />Grow Connections.<br />Harvest Prosperity.</p>

            <button className='red' onClick={handleButtonClick}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Get Started</span>
            </button>
          </div>

          <div className='hero-right'>
            <img src={mannie} alt='mannie' className='photo' />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon"></div>
          <h3>FRESH PRODUCE</h3>
          <p>Vegetables, Fruits, Grains</p>
          <div className="discount-badge">UPTO 30% OFF</div>
        </div>

        <div className="service-card">
          <div className="service-icon"></div>
          <h3>FARMERS' MARKET</h3>
          <p>Weekly Local Markets</p>
          <div className="discount-badge">NEW ARRIVALS</div>
        </div>

        <div className="service-card">
          <div className="service-icon"></div>
          <h3>ORGANIC PRODUCTS</h3>
          <p>Certified Organic Farms</p>
          <div className="discount-badge">HEALTHY CHOICE</div>
        </div>

        <div className="service-card">
          <div className="service-icon"></div>
          <h3>FARMER SUPPORT</h3>
          <p>Training & Resources</p>
          <div className="discount-badge">FREE ACCESS</div>
        </div>
      </div>
    </div>
  );
}

export default AgriculturePage;