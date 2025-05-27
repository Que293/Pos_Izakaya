// Mock data for tables
let tables = [
  { id: 1, capacity: 4, location: 'Window', status: 'available' },
  { id: 2, capacity: 2, location: 'Window', status: 'available' },
  { id: 3, capacity: 6, location: 'Center', status: 'occupied', currentGuests: 5 },
  { id: 4, capacity: 4, location: 'Bar', status: 'available' },
  { id: 5, capacity: 8, location: 'Private Room', status: 'reserved' },
  { id: 6, capacity: 2, location: 'Window', status: 'available' },
  { id: 7, capacity: 4, location: 'Center', status: 'available' },
  { id: 8, capacity: 6, location: 'Center', status: 'available' },
  { id: 9, capacity: 2, location: 'Bar', status: 'occupied', currentGuests: 2 },
  { id: 10, capacity: 4, location: 'Window', status: 'available' },
  { id: 11, capacity: 8, location: 'Private Room', status: 'available' },
  { id: 12, capacity: 4, location: 'Center', status: 'available' },
];

// Get all tables
export function getTables() {
  return [...tables];
}

// Get a specific table by ID
export function getTable(id) {
  return tables.find(table => table.id === id);
}

// Update table status
export function updateTableStatus(id, status, currentGuests = null) {
  tables = tables.map(table => {
    if (table.id === id) {
      return { ...table, status, currentGuests };
    }
    return table;
  });
  return getTable(id);
}

// Add a new table
export function addTable(capacity, location) {
  // Find the highest ID and increment by 1
  const maxId = tables.reduce((max, table) => Math.max(max, table.id), 0);
  const newTable = {
    id: maxId + 1,
    capacity,
    location,
    status: 'available'
  };
  
  tables.push(newTable);
  return newTable;
}

// Delete a table
export function deleteTable(id) {
  tables = tables.filter(table => table.id !== id);
  return tables;
}

