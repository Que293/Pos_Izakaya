import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePOS } from '../contexts/POSContext';
import { MENU_ITEMS } from '../data/menuData';
import '../styles/OrderPage.css';

function OrderPage() {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const { getTableData, setCourseForSeat, addExtraToSeat, removeExtraFromSeat } = usePOS();
  
  const [activeTab, setActiveTab] = useState('courses');
  const [activeCategory, setActiveCategory] = useState('starters');
  const [activeSeat, setActiveSeat] = useState(1);
  
  const tableData = getTableData(parseInt(tableId));
  
  if (!tableData) {
    return (
      <div className="order-page">
        <h1>No table data found</h1>
        <button 
          className="secondary-button"
          onClick={() => navigate('/')}
        >
          Back to Tables
        </button>
      </div>
    );
  }
  
  const filteredMenuItems = MENU_ITEMS.filter(
    item => item.type === activeTab && item.category === activeCategory
  );
  
  const categories = [...new Set(MENU_ITEMS
    .filter(item => item.type === activeTab)
    .map(item => item.category))];
  
  const activeSeatData = tableData.seats.find(seat => seat.seatNumber === activeSeat);
  
  const handleMenuItemClick = (item) => {
    if (activeTab === 'courses') {
      setCourseForSeat(parseInt(tableId), activeSeat, item);
    } else {
      addExtraToSeat(parseInt(tableId), activeSeat, item);
    }
  };
  
  const handleRemoveCourse = () => {
    setCourseForSeat(parseInt(tableId), activeSeat, null);
  };
  
  const handleRemoveExtra = (extraId) => {
    removeExtraFromSeat(parseInt(tableId), activeSeat, extraId);
  };
  
  const handleProceedToBilling = () => {
    navigate(`/table/${tableId}/billing`);
  };
  
  return (
    <div className="order-page">
      <div className="order-header">
        <h1>Table {tableId} Order</h1>
        <button 
          className="primary-button proceed-button"
          onClick={handleProceedToBilling}
        >
          Proceed to Billing
        </button>
      </div>
      
      <div className="order-container">
        <div className="seat-selection">
          <h2>Select Seat</h2>
          <div className="seats">
            {tableData.seats.map(seat => (
              <div 
                key={seat.seatNumber}
                className={`seat ${seat.seatNumber === activeSeat ? 'active' : ''}`}
                onClick={() => setActiveSeat(seat.seatNumber)}
              >
                Seat {seat.seatNumber}
              </div>
            ))}
          </div>
        </div>
        
        <div className="menu-section">
          <div className="menu-tabs">
            <button 
              className={`menu-tab ${activeTab === 'courses' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('courses');
                setActiveCategory('starters');
              }}
            >
              Courses
            </button>
            <button 
              className={`menu-tab ${activeTab === 'extras' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('extras');
                setActiveCategory('drinks');
              }}
            >
              Extras
            </button>
          </div>
          
          <div className="menu-categories">
            {categories.map(category => (
              <button 
                key={category}
                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="menu-items">
            {filteredMenuItems.map(item => (
              <div 
                key={item.id}
                className="menu-item"
                onClick={() => handleMenuItemClick(item)}
              >
                <div className="item-name">{item.name}</div>
                <div className="item-price">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="course-section">
            <h3>Course</h3>
            {activeSeatData.course ? (
              <div className="selected-course">
                <div className="course-info">
                  <div className="course-name">{activeSeatData.course.name}</div>
                  <div className="course-price">${activeSeatData.course.price.toFixed(2)}</div>
                </div>
                <button 
                  className="remove-button"
                  onClick={handleRemoveCourse}
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="empty-selection">No course selected</div>
            )}
          </div>
          
          <div className="extras-section">
            <h3>Extras</h3>
            {activeSeatData.extras.length > 0 ? (
              <div className="selected-extras">
                {activeSeatData.extras.map(extra => (
                  <div key={extra.id} className="selected-extra">
                    <div className="extra-info">
                      <div className="extra-name">{extra.name}</div>
                      <div className="extra-price">${extra.price.toFixed(2)}</div>
                    </div>
                    <button 
                      className="remove-button"
                      onClick={() => handleRemoveExtra(extra.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-selection">No extras selected</div>
            )}
          </div>
          
          <div className="seat-total">
            <span>Seat Total:</span>
            <span>
              ${(
                (activeSeatData.course ? activeSeatData.course.price : 0) +
                activeSeatData.extras.reduce((sum, item) => sum + item.price, 0)
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;

