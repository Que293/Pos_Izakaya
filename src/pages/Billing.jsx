import { useParams, useNavigate } from 'react-router-dom';
import { usePOS } from '../contexts/POSContext';
import '../styles/Billing.css';

function Billing() {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const { getTableData } = usePOS();
  
  const tableData = getTableData(parseInt(tableId));
  
  if (!tableData) {
    return (
      <div className="billing">
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
  
  const calculateSeatTotal = (seat) => {
    const coursePrice = seat.course ? seat.course.price : 0;
    const extrasTotal = seat.extras.reduce((sum, item) => sum + item.price, 0);
    return coursePrice + extrasTotal;
  };
  
  const tableTotal = tableData.seats.reduce((total, seat) => {
    return total + calculateSeatTotal(seat);
  }, 0);
  
  const handlePaymentMethod = (method) => {
    navigate(`/table/${tableId}/payment?method=${method}`);
  };
  
  return (
    <div className="billing">
      <h1>Table {tableId} Billing</h1>
      
      <div className="bill-container">
        <div className="bill-header">
          <h2>Bill Summary</h2>
          <div className="bill-total">
            Total: ${tableTotal.toFixed(2)}
          </div>
        </div>
        
        <div className="bill-items">
          {tableData.seats.map(seat => {
            const seatTotal = calculateSeatTotal(seat);
            
            if (seatTotal === 0) return null;
            
            return (
              <div key={seat.seatNumber} className="seat-bill">
                <div className="seat-header">
                  <h3>Seat {seat.seatNumber}</h3>
                  <div className="seat-total">${seatTotal.toFixed(2)}</div>
                </div>
                
                {seat.course && (
                  <div className="bill-item">
                    <div className="item-name">{seat.course.name}</div>
                    <div className="item-price">${seat.course.price.toFixed(2)}</div>
                  </div>
                )}
                
                {seat.extras.map(extra => (
                  <div key={extra.id} className="bill-item extra-item">
                    <div className="item-name">{extra.name}</div>
                    <div className="item-price">${extra.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="payment-options">
        <h2>Select Payment Method</h2>
        
        <div className="payment-methods">
          <div className="payment-method" onClick={() => handlePaymentMethod('individual')}>
            <h3>Individual Payment</h3>
            <p>Each seat pays for their own items</p>
          </div>
          
          <div className="payment-method" onClick={() => handlePaymentMethod('courseShared')}>
            <h3>Split Courses</h3>
            <p>One person pays for all courses, individuals pay for their extras</p>
          </div>
          
          <div className="payment-method" onClick={() => handlePaymentMethod('single')}>
            <h3>Single Payment</h3>
            <p>One person pays for the entire bill</p>
          </div>
        </div>
      </div>
      
      <div className="billing-actions">
        <button 
          className="secondary-button"
          onClick={() => navigate(`/table/${tableId}/order`)}
        >
          Back to Order
        </button>
      </div>
    </div>
  );
}

export default Billing;










