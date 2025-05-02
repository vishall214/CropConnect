import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="logo" onClick={() => navigate('/')}>CropConnect</div>
      <div className="nav-links">
        <button className="cta subsidy-btn" onClick={() => navigate('/subsidy')}>
          <span>Get Subsidy</span>
        </button>
        <button className="cta" onClick={() => navigate('/signup')}>
          <span>Sign Up</span>
        </button>
        <button className="cta" onClick={() => navigate('/login')}>
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;