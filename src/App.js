import React from 'react';
import './App.css';
import { FaPhone, FaCalendarAlt, FaClock,FaUser } from 'react-icons/fa';

function App() {
  return (
    <div className="page">
      <div className="booking-container">
        <div className="booking-section">
          <h1>Book a Session</h1>
          <form className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Name" />
                <span className="input-icon"><FaUser /></span>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Phone" />
                <span className="input-icon"><FaPhone /></span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="date" />
                <span className="input-icon"><FaCalendarAlt /></span>
              </div>
              <div className="form-group">
                <input type="time" />
                <span className="input-icon"><FaClock /></span>
              </div>
            </div>
            <div className="form-group form-group-full">
              <textarea placeholder="Procedure to be made"></textarea>
            </div>
            <button type="submit">Book This Session</button>
          </form>
          <div className="contact-info">
            <p>Phone: <span className="highlight">+123 456-7890</span></p>
            <p>Email: <span className="highlight">contact@domain.com</span></p>
          </div>
        </div>
        <div className="image-section">
          <img src="images/girl2.jpeg" alt="Salon" />
        </div>
      </div>
    </div>
  );
}

export default App;
