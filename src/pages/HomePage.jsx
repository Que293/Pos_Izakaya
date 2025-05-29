import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not admin
    if (localStorage.getItem('isAdmin') !== 'true') {
      navigate('/login');
    }
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    });
  };

  const ADMIN_PIN = '1234'; // Example admin PIN, this should be securely stored

  const handleAdminAccess = (pin) => {
    if (pin === ADMIN_PIN) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/');
    } else {
      alert('Invalid admin PIN');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="background-overlay"></div>
      
      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-profile">
          <div className="avatar">IZ</div>
          <span className="username">Izakaya</span>
        </div>
        
        <nav className="navigation">
          <div className="nav-item active">
            <div className="nav-icon">🏠</div>
            <span>Home</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon">👥</div>
            <span>Manage employees</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon">🎯</div>
            <span>promotion</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon">⚙️</div>
            <span>setting</span>
          </div>
        </nav>
        
        <div className="logout" onClick={() => {
  localStorage.removeItem('isAdmin');
  navigate('/login');
}}>
  <div className="nav-icon">⏻</div>
  <span>Log out</span>
</div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1 className="title">Store management system</h1>
          <div className="header-right">
            <div className="status-badge">Open</div>
            <div className="datetime-info">
              <div className="date-badge">
                <span className="icon">📅</span>
                <span>Date: {formatDate(currentTime)}</span>
              </div>
              <div className="time-badge">
                <span className="icon">🕙</span>
                <span>Time: {formatTime(currentTime)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cards-grid">
          <div className="card">
            <div className="card-badge red">10</div>
            <div className="card-icon">⚖️</div>
            <div className="card-title">Manage the table</div>
            <button className="card-button orange" onClick={() => navigate('/tables')}>Click</button>
          </div>
          
          <div className="card">
            <div className="card-badge red">100</div>
            <div className="card-icon">🍔</div>
            <div className="card-title">Food list</div>
            <button className="card-button green" onClick={() => navigate('/foods')}>Click</button>
          </div>
          
          <div className="card">
            <div className="card-icon">📦</div>
            <div className="card-title">Manage products</div>
            <button className="card-button yellow">Click</button>
          </div>
          
          <div className="card">
            <div className="card-icon">📊</div>
            <div className="card-title">report</div>
            <button className="card-button purple">Click</button>
          </div>
          
          <div className="card">
            <div className="card-icon">👥</div>
            <div className="card-title">member</div>
            <button className="card-button red">Click</button>
          </div>
          
          <div className="card">
            <div className="card-icon">⚙️</div>
            <div className="card-title">setting</div>
            <button className="card-button blue">Click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

