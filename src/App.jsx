import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TableManagement from './pages/TableManagement'
import TableDetail from './pages/TableDetail'
import OrderPage from './pages/OrderPage'
import Billing from './pages/Billing'
import Payment from './pages/Payment'
import FoodList from './pages/FoodList'
import LoginPage from './pages/LoginPage' // <-- Import your LoginPage
import './App.css'

// Helper component to protect routes
const RequireAuth = ({ children }) => {
  if (localStorage.getItem('isAdmin') !== 'true') {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path="/tables"
        element={
          <RequireAuth>
            <TableManagement />
          </RequireAuth>
        }
      />
      <Route
        path="/table/:tableId"
        element={
          <RequireAuth>
            <TableDetail />
          </RequireAuth>
        }
      />
      <Route
        path="/table/:tableId/order"
        element={
          <RequireAuth>
            <OrderPage />
          </RequireAuth>
        }
      />
      <Route
        path="/table/:tableId/billing"
        element={
          <RequireAuth>
            <Billing />
          </RequireAuth>
        }
      />
      <Route
        path="/table/:tableId/payment"
        element={
          <RequireAuth>
            <Payment />
          </RequireAuth>
        }
      />
      <Route
        path="/foods"
        element={
          <RequireAuth>
            <FoodList />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

export default App

