import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const currentTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="restaurant-info">
          <div className="avatar">IZ</div>
          <div className="name">Izakaya</div>
        </div>
        
        <nav className="nav-menu">
          <div className="nav-item active">
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">👥</span>
            <span>Manage employees</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">🎯</span>
            <span>promotion</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span>setting</span>
          </div>
        </nav>
        
        <div className="logout-button">
          <span className="nav-icon">⏻</span>
          <span>Log out</span>
        </div>
      </div>
      
      <div className="main-content">
        <div className="header">
          <h1>Store management system</h1>
          <div className="status-bar">
            <button className="status-button open">Open</button>
            <div className="date-time">
              <div className="date">
                <span className="icon">📅</span>
                <span>Date: {currentDate}</span>
              </div>
              <div className="time">
                <span className="icon">🕙</span>
                <span>Time: {currentTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-card" onClick={() => navigate('/tables')}>
            <div className="card-badge">10</div>
            <div className="card-icon table-icon">⚖️</div>
            <div className="card-title">Manage the table</div>
            <button className="card-button orange">Click</button>
          </div>
          
          <div className="dashboard-card">
            <div className="card-badge red">100</div>
            <div className="card-icon food-icon">🍔</div>
            <div className="card-title">Food list</div>
            <button className="card-button teal">Click</button>
          </div>
          
          <div className="dashboard-card">
            <div className="card-icon product-icon">📦</div>
            <div className="card-title">Manage products</div>
            <button className="card-button yellow">Click</button>
          </div>
          
          <div className="dashboard-card">
            <div className="card-icon report-icon">📊</div>
            <div className="card-title">report</div>
            <button className="card-button dark">Click</button>
          </div>
          
          <div className="dashboard-card">
            <div className="card-icon member-icon">👥</div>
            <div className="card-title">member</div>
            <button className="card-button red">Click</button>
          </div>
          
          <div className="dashboard-card">
            <div className="card-icon setting-icon">⚙️</div>
            <div className="card-title">setting</div>
            <button className="card-button blue">Click</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;


