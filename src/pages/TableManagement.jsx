import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTables, addTable, updateTableStatus, deleteTable } from '../data/tableData';
import '../styles/TableManagement.css';

function TableManagement() {
  const navigate = useNavigate();
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [newTableData, setNewTableData] = useState({
    capacity: 4,
    location: 'Center'
  });

  useEffect(() => {
    // Load tables from data
    loadTables();
  }, []);

  const loadTables = () => {
    setTables(getTables());
  };

  const handleAddTable = () => {
    addTable(newTableData.capacity, newTableData.location);
    setIsAddModalOpen(false);
    setNewTableData({ capacity: 4, location: 'Center' });
    loadTables();
  };

  const handleEditTable = () => {
    // In a real app, you would have an updateTable function
    // For now, we'll just update the status as an example
    updateTableStatus(selectedTable.id, selectedTable.status);
    setIsEditModalOpen(false);
    setSelectedTable(null);
    loadTables();
  };

  const handleDeleteTable = () => {
    deleteTable(selectedTable.id);
    setIsDeleteModalOpen(false);
    setSelectedTable(null);
    loadTables();
  };

  const handleStatusChange = (status) => {
    updateTableStatus(selectedTable.id, status);
    setIsStatusModalOpen(false);
    setSelectedTable(null);
    loadTables();
  };

  const handleTableClick = (table) => {
    setSelectedTable(table);
    setIsStatusModalOpen(true);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="restaurant-info">
          <div className="avatar">IZ</div>
          <div className="name">Izakaya</div>
        </div>
        
        <nav className="nav-menu">
          <div className="nav-item">
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
          <h1>Manage the table</h1>
          <div className="action-buttons">
            <button className="action-button add" onClick={() => setIsAddModalOpen(true)}>
              <span className="icon">+</span>
              <span>add</span>
            </button>
            <button 
              className="action-button edit" 
              onClick={() => {
                if (selectedTable) setIsEditModalOpen(true);
                else alert('Please select a table first');
              }}
            >
              <span className="icon">✏️</span>
              <span>Edit</span>
            </button>
            <button 
              className="action-button delete"
              onClick={() => {
                if (selectedTable) setIsDeleteModalOpen(true);
                else alert('Please select a table first');
              }}
            >
              <span className="icon">🗑️</span>
              <span>delete</span>
            </button>
          </div>
        </div>
        
        <div className="floor-layout">
          <div className="tables-grid">
            {tables.map((table) => (
              <div 
                key={table.id} 
                className={`table-item ${table.status} ${selectedTable?.id === table.id ? 'selected' : ''}`}
                onClick={() => handleTableClick(table)}
              >
                <div className="table-code">A01</div>
                <div className="table-visual">
                  <div className="table-seats">
                    <div className="seat left-seats">
                      <div className="seat-icon"></div>
                      <div className="seat-icon"></div>
                    </div>
                    <div className="table-icon"></div>
                    <div className="seat right-seats">
                      <div className="seat-icon"></div>
                      <div className="seat-icon"></div>
                    </div>
                  </div>
                </div>
                <div className="table-capacity">{table.capacity} seats</div>
                <div className="table-status-badge">
                  {table.status === 'available' ? 'free' : table.status}
                </div>
              </div>
            ))}
          </div>
          
          <div className="restaurant-decorations">
            <div className="decoration reception">
              <img src="/src/assets/reception.png" alt="Reception" />
            </div>
            <div className="decoration bamboo-wall">
              <img src="/src/assets/bamboo.png" alt="Bamboo" />
            </div>
            <div className="decoration kitchen">
              <img src="/src/assets/kitchen.png" alt="Kitchen" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Table Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Table</h2>
            <div className="form-group">
              <label>Capacity:</label>
              <input 
                type="number" 
                value={newTableData.capacity}
                onChange={(e) => setNewTableData({...newTableData, capacity: parseInt(e.target.value)})}
                min="1"
                max="12"
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <select 
                value={newTableData.location}
                onChange={(e) => setNewTableData({...newTableData, location: e.target.value})}
              >
                <option value="Window">Window</option>
                <option value="Center">Center</option>
                <option value="Bar">Bar</option>
                <option value="Private Room">Private Room</option>
              </select>
            </div>
            <div className="modal-actions">
              <button className="cancel-button" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
              <button className="confirm-button" onClick={handleAddTable}>Add Table</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Table Modal */}
      {isEditModalOpen && selectedTable && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Table {selectedTable.id}</h2>
            <div className="form-group">
              <label>Capacity:</label>
              <input 
                type="number" 
                value={selectedTable.capacity}
                onChange={(e) => setSelectedTable({...selectedTable, capacity: parseInt(e.target.value)})}
                min="1"
                max="12"
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <select 
                value={selectedTable.location}
                onChange={(e) => setSelectedTable({...selectedTable, location: e.target.value})}
              >
                <option value="Window">Window</option>
                <option value="Center">Center</option>
                <option value="Bar">Bar</option>
                <option value="Private Room">Private Room</option>
              </select>
            </div>
            <div className="modal-actions">
              <button className="cancel-button" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
              <button className="confirm-button" onClick={handleEditTable}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Table Modal */}
      {isDeleteModalOpen && selectedTable && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Delete Table</h2>
            <p>Are you sure you want to delete Table {selectedTable.id}?</p>
            <div className="modal-actions">
              <button className="cancel-button" onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
              <button className="delete-button" onClick={handleDeleteTable}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Change Status Modal */}
      {isStatusModalOpen && selectedTable && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Table {selectedTable.id} Status</h2>
            <div className="table-detail">
              <p>Current status: <span className="status-text">{selectedTable.status}</span></p>
              <p>Capacity: {selectedTable.capacity} seats</p>
              <p>Location: {selectedTable.location}</p>
            </div>
            <div className="status-options">
              <button 
                className={`status-button free ${selectedTable.status === 'available' ? 'active' : ''}`}
                onClick={() => handleStatusChange('available')}
              >
                free
              </button>
              <button 
                className={`status-button reserve ${selectedTable.status === 'reserved' ? 'active' : ''}`}
                onClick={() => handleStatusChange('reserved')}
              >
                reserve
              </button>
              <button 
                className={`status-button use ${selectedTable.status === 'occupied' ? 'active' : ''}`}
                onClick={() => handleStatusChange('occupied')}
              >
                use
              </button>
            </div>
            <div className="modal-actions">
              <button className="cancel-button" onClick={() => setIsStatusModalOpen(false)}>Cancel</button>
              <button className="confirm-button" onClick={() => navigate(`/table/${selectedTable.id}`)}>
                Add a customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableManagement;




