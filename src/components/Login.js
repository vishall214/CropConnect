import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

  return (
        <div className="form-container">
      <button className="back-btn" onClick={handleBack}>← Back</button>
      <h2>Login to CropConnect</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
        </div>
        <button className="submit-btn">
          <span>login <Link to="/signup">Sign up</Link> </span>
        </button>
      </form>
      <div className="form-footer">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );

export default Login;