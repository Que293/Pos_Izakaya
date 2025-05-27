import { createContext, useContext, useState } from 'react';

const POSContext = createContext();

export function POSProvider({ children }) {
  const [tables, setTables] = useState({});
  
  // Setup a table with seats
  const setupTable = (tableId, seatCount, isReservation = false) => {
    const seats = Array.from({ length: seatCount }, (_, i) => ({
      seatNumber: i + 1,
      course: null,
      extras: []
    }));
    
    setTables(prev => ({
      ...prev,
      [tableId]: {
        tableId,
        isReservation,
        seats
      }
    }));
  };
  
  // Get table data
  const getTableData = (tableId) => {
    return tables[tableId];
  };
  
  // Get formatted order data for billing
  const getFormattedOrderData = () => {
    // For simplicity, we'll just return the first table's data
    // In a real app, you'd need to track the active table
    const tableIds = Object.keys(tables);
    if (tableIds.length === 0) return null;
    
    return tables[tableIds[0]];
  };
  
  // Set course for a seat
  const setCourseForSeat = (tableId, seatNumber, course) => {
    setTables(prev => {
      const tableData = { ...prev[tableId] };
      const seatIndex = tableData.seats.findIndex(seat => seat.seatNumber === seatNumber);
      
      if (seatIndex !== -1) {
        tableData.seats[seatIndex] = {
          ...tableData.seats[seatIndex],
          course
        };
      }
      
      return {
        ...prev,
        [tableId]: tableData
      };
    });
  };
  
  // Add extra to a seat
  const addExtraToSeat = (tableId, seatNumber, extra) => {
    setTables(prev => {
      const tableData = { ...prev[tableId] };
      const seatIndex = tableData.seats.findIndex(seat => seat.seatNumber === seatNumber);
      
      if (seatIndex !== -1) {
        const updatedExtras = [...tableData.seats[seatIndex].extras, extra];
        tableData.seats[seatIndex] = {
          ...tableData.seats[seatIndex],
          extras: updatedExtras
        };
      }
      
      return {
        ...prev,
        [tableId]: tableData
      };
    });
  };
  
  // Remove extra from a seat
  const removeExtraFromSeat = (tableId, seatNumber, extraId) => {
    setTables(prev => {
      const tableData = { ...prev[tableId] };
      const seatIndex = tableData.seats.findIndex(seat => seat.seatNumber === seatNumber);
      
      if (seatIndex !== -1) {
        const updatedExtras = tableData.seats[seatIndex].extras.filter(
          extra => extra.id !== extraId
        );
        
        tableData.seats[seatIndex] = {
          ...tableData.seats[seatIndex],
          extras: updatedExtras
        };
      }
      
      return {
        ...prev,
        [tableId]: tableData
      };
    });
  };
  
  // Reset table (clear order)
  const resetTable = () => {
    setTables({});
  };
  
  const value = {
    setupTable,
    getTableData,
    getFormattedOrderData,
    setCourseForSeat,
    addExtraToSeat,
    removeExtraFromSeat,
    resetTable
  };
  
  return (
    <POSContext.Provider value={value}>
      {children}
    </POSContext.Provider>
  );
}

export function usePOS() {
  const context = useContext(POSContext);
  if (!context) {
    throw new Error('usePOS must be used within a POSProvider');
  }
  return context;
}

function TableDetail() {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const { tables, setupTable, getTableData } = usePOS();
  
  const [seatCount, setSeatCount] = useState(4);
  
  useEffect(() => {
    // If table data is already set, use that seat count
    if (tables && tables[tableId]) {
      setSeatCount(tables[tableId].seats.length);
    }
  }, [tables, tableId]);
  
  const handleSetupTable = () => {
    setupTable(parseInt(tableId), seatCount);
    navigate(`/table/${tableId}/order`);
  };
  
  const handleContinueOrder = () => {
    navigate(`/table/${tableId}/order`);
  };
  
  return (
    <div className="table-detail">
      <h1>Table {tableId}</h1>
      
      <div className="table-info">
        <p><strong>Status:</strong> <span className="status">{tables[tableId]?.status || 'available'}</span></p>
        <p><strong>Capacity:</strong> {tables[tableId]?.seats.length || '4'} seats</p>
      </div>
      
      {tables[tableId] && tables[tableId].seats ? (
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
            <label htmlFor="seatCount">Number of Guests:</label>
            <input 
              type="number" 
              id="seatCount"
              min="1"
              max="12"
              value={seatCount}
              onChange={(e) => setSeatCount(parseInt(e.target.value))}
            />
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
              onClick={handleSetupTable}
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













