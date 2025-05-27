import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { usePOS } from '../contexts/POSContext';
import { usePaymentSystem } from '../hooks/usePaymentSystem';
import QRCode from 'react-qr-code';
import '../styles/Payment.css';

function Payment() {
  const { tableId } = useParams();
  const [searchParams] = useSearchParams();
  const paymentMethod = searchParams.get('method') || 'individual';
  const navigate = useNavigate();
  const { getFormattedOrderData, resetTable } = usePOS();
  
  const orderData = getFormattedOrderData();
  
  const {
    paymentStatus,
    isComplete,
    generatePaymentLink,
    simulatePayment
  } = usePaymentSystem(
    parseInt(tableId),
    orderData?.seats.reduce((acc, seat) => {
      acc[seat.seatNumber] = { course: seat.course, extras: seat.extras };
      return acc;
    }, {}),
    paymentMethod
  );
  
  const calculateSeatTotal = (seat) => {
    const coursePrice = seat.course ? seat.course.price : 0;
    const extrasTotal = seat.extras.reduce((sum, item) => sum + item.price, 0);
    return coursePrice + extrasTotal;
  };
  
  const calculateCoursesTotal = () => {
    return orderData.seats.reduce((total, seat) => total + (seat.course?.price || 0), 0);
  };
  
  const calculateExtrasTotal = (seatNumber) => {
    const seat = orderData.seats.find(s => s.seatNumber === seatNumber);
    return seat ? seat.extras.reduce((total, item) => total + item.price, 0) : 0;
  };
  
  const handleFinish = () => {
    resetTable();
    navigate('/');
  };
  
  // For demo purposes, let's simulate payments when clicking on QR codes
  const handleQRClick = (key) => {
    simulatePayment(key);
  };
  
  if (!orderData || !orderData.seats) {
    return (
      <div className="payment">
        <h1>No order data available</h1>
        <button 
          className="secondary-button"
          onClick={() => navigate(`/table/${tableId}/billing`)}
        >
          Back to Billing
        </button>
      </div>
    );
  }

  return (
    <div className="payment">
      <h1>Payment for Table {tableId}</h1>
      
      {isComplete ? (
        <div className="payment-complete">
          <div className="success-icon">✓</div>
          <h2>All Payments Complete!</h2>
          <button 
            className="primary-button"
            onClick={handleFinish}
          >
            Finish
          </button>
        </div>
      ) : (
        <div className="payment-methods">
          <h2>Scan QR Code to Pay</h2>
          <p className="demo-note">For demo purposes, click on any QR code to simulate payment</p>
          
          {paymentMethod === 'individual' ? (
            <div className="individual-payments">
              {orderData.seats.map(seat => {
                const status = paymentStatus[`seat${seat.seatNumber}`] || 'pending';
                const seatTotal = calculateSeatTotal(seat);
                
                return (
                  <div key={seat.seatNumber} className={`payment-card ${status}`}>
                    <h3>Seat {seat.seatNumber}</h3>
                    <p>Total: ${seatTotal.toFixed(2)}</p>
                    
                    {status === 'pending' ? (
                      <div className="qr-container">
                        <QRCode 
                          value={generatePaymentLink('seat', seat.seatNumber, seatTotal)} 
                          size={128}
                          onClick={() => handleQRClick(`seat${seat.seatNumber}`)}
                          style={{ cursor: 'pointer' }}
                        />
                        <p>Scan to pay</p>
                        <p className="demo-note">(Click QR to simulate payment)</p>
                      </div>
                    ) : (
                      <div className="status-completed">
                        <span>✓</span> Payment Complete
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : paymentMethod === 'courseShared' ? (
            <div className="shared-payment">
              <div className={`payment-card ${paymentStatus.courses || 'pending'}`}>
                <h3>Course Payment</h3>
                <p>Total for all courses: ${calculateCoursesTotal().toFixed(2)}</p>
                
                {(paymentStatus.courses || 'pending') === 'pending' ? (
                  <div className="qr-container">
                    <QRCode 
                      value={generatePaymentLink('courses', tableId, calculateCoursesTotal())} 
                      size={128}
                      onClick={() => handleQRClick('courses')}
                      style={{ cursor: 'pointer' }}
                    />
                    <p>Scan to pay for all courses</p>
                    <p className="demo-note">(Click QR to simulate payment)</p>
                  </div>
                ) : (
                  <div className="status-completed">
                    <span>✓</span> Payment Complete
                  </div>
                )}
              </div>
              
              {orderData.seats.map(seat => {
                if (seat.extras.length === 0) return null;
                
                const status = paymentStatus[`extras_${seat.seatNumber}`] || 'pending';
                const extrasTotal = calculateExtrasTotal(seat.seatNumber);
                
                return (
                  <div key={seat.seatNumber} className={`payment-card ${status}`}>
                    <h3>Seat {seat.seatNumber} Extras</h3>
                    <p>Total for extras: ${extrasTotal.toFixed(2)}</p>
                    
                    {status === 'pending' ? (
                      <div className="qr-container">
                        <QRCode 
                          value={generatePaymentLink('extras', seat.seatNumber, extrasTotal)} 
                          size={128}
                          onClick={() => handleQRClick(`extras_${seat.seatNumber}`)}
                          style={{ cursor: 'pointer' }}
                        />
                        <p>Scan to pay for extras</p>
                        <p className="demo-note">(Click QR to simulate payment)</p>
                      </div>
                    ) : (
                      <div className="status-completed">
                        <span>✓</span> Payment Complete
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="single-payment">
              <div className={`payment-card ${paymentStatus.table || 'pending'}`}>
                <h3>Table Payment</h3>
                <p>Total for entire table: ${orderData.seats.reduce((total, seat) => total + calculateSeatTotal(seat), 0).toFixed(2)}</p>
                
                {(paymentStatus.table || 'pending') === 'pending' ? (
                  <div className="qr-container">
                    <QRCode 
                      value={generatePaymentLink('table', tableId, orderData.seats.reduce((total, seat) => total + calculateSeatTotal(seat), 0))} 
                      size={200}
                      onClick={() => handleQRClick('table')}
                      style={{ cursor: 'pointer' }}
                    />
                    <p>Scan to pay for the entire table</p>
                    <p className="demo-note">(Click QR to simulate payment)</p>
                  </div>
                ) : (
                  <div className="status-completed">
                    <span>✓</span> Payment Complete
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="payment-actions">
        <button 
          className="secondary-button"
          onClick={() => navigate(`/table/${tableId}/billing`)}
        >
          Back to Billing
        </button>
      </div>
    </div>
  );
}

export default Payment;

