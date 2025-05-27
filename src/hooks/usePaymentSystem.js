import { useState } from 'react';

export function usePaymentSystem(tableId, orderData, paymentMethod) {
  const [paymentStatus, setPaymentStatus] = useState({});
  
  // Generate a payment link (in a real app, this would create a real payment link)
  const generatePaymentLink = (type, id, amount) => {
    // This is just a mock function that would normally generate a real payment URL
    return `https://payment.example.com/pay?table=${tableId}&type=${type}&id=${id}&amount=${amount}`;
  };
  
  // Simulate a payment being completed
  const simulatePayment = (key) => {
    setPaymentStatus(prev => ({
      ...prev,
      [key]: 'completed'
    }));
  };
  
  // Check if all required payments are complete
  const isComplete = () => {
    if (paymentMethod === 'individual') {
      // Check if all seats have paid
      const seatKeys = Object.keys(orderData || {}).map(seatNumber => `seat${seatNumber}`);
      return seatKeys.every(key => paymentStatus[key] === 'completed');
    } else if (paymentMethod === 'courseShared') {
      // Check if courses payment and all extras payments are complete
      if (paymentStatus.courses !== 'completed') return false;
      
      const extrasKeys = Object.keys(orderData || {})
        .filter(seatNumber => {
          const seat = orderData[seatNumber];
          return seat.extras && seat.extras.length > 0;
        })
        .map(seatNumber => `extras_${seatNumber}`);
      
      return extrasKeys.every(key => paymentStatus[key] === 'completed');
    } else {
      // Single payment - just check if the table payment is complete
      return paymentStatus.table === 'completed';
    }
  };
  
  return {
    paymentStatus,
    isComplete: isComplete(),
    generatePaymentLink,
    simulatePayment
  };
}









