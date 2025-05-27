import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePOS } from '../contexts/POSContext';
import { getTable, updateTableStatus } from '../data/tableData';
import '../styles/TableDetail.css';

function TableDetail() {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const { setupTable, getTableData } = usePOS();
  
  const [customerCount, setCustomerCount] = useState(4);
  const [isReservation, setIsReservation] = useState(false);
  
  const table = getTable(parseInt(tableId));
  const tableData = getTableData(parseInt(tableId));
  
  const handleStartOrder = () => {
    // Update table status
    updateTableStatus(parseInt(tableId), 'occupied', customerCount);
    
    // Setup table in POS context
    setupTable(parseInt(tableId), customerCount, isReservation);
    
    // Navigate to order page
    navigate(`/table/${tableId}/order`);
  };
  
  const handleContinueOrder = () => {
    navigate(`/table/${tableId}/order`);
  };
  
  if (!table) {
    return (
      <div className="table-detail">
        <h1>Table not found</h1>
        <button 
          className="secondary-button"
          onClick={() => navigate('/')}
        >
          Back to Tables
        </button>
      </div>
    );
  }

  return (
    <div className="table-detail">
      <div className="table-header">
        <h1>Table {table.id}</h1>
        <div className={`status-badge ${table.status}`}>
          {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
        </div>
      </div>
      
      <div className="table-info">
        <div className="info-item">
          <span className="info-label">Capacity:</span>
          <span className="info-value">{table.capacity} guests</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">Location:</span>
          <span className="info-value">{table.location}</span>
        </div>
        
        {table.status === 'occupied' && (
          <div className="info-item">
            <span className="info-label">Current Guests:</span>
            <span className="info-value">{table.currentGuests || 'Unknown'}</span>
          </div>
        )}
      </div>
      
      {tableData && tableData.seats ? (
        <div className="occupied-actions">
          <p>This table already has an active order.</p>
          <button 
            className="primary-button"
            onClick={handleContinueOrder}
          >
            Continue Order
          </button>
        </div>
      ) : (
        <div className="setup-form">
          <h2>Setup Table</h2>
          
          <div className="form-group">
            <label htmlFor="customerCount">Number of Guests:</label>
            <input 
              type="number" 
              id="customerCount"
              min="1"
              max="12"
              value={customerCount}
              onChange={(e) => setCustomerCount(parseInt(e.target.value))}
            />
          </div>
          
          <div className="form-group checkbox">
            <input 
              type="checkbox" 
              id="isReservation"
              checked={isReservation}
              onChange={(e) => setIsReservation(e.target.checked)}
            />
            <label htmlFor="isReservation">Is this a reservation?</label>
          </div>
          
          <div className="form-actions">
            <button 
              className="secondary-button"
              onClick={() => navigate('/')}
            >
              Back
            </button>
            
            <button 
              className="primary-button"
              onClick={handleStartOrder}
              disabled={table.status === 'occupied'}
            >
              Start Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableDetail;







