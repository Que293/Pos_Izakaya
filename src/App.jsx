import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TableManagement from './pages/TableManagement'
import TableDetail from './pages/TableDetail'
import OrderPage from './pages/OrderPage'
import Billing from './pages/Billing'
import Payment from './pages/Payment'
import FoodList from './pages/FoodList';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tables" element={<TableManagement />} />
      <Route path="/table/:tableId" element={<TableDetail />} />
      <Route path="/table/:tableId/order" element={<OrderPage />} />
      <Route path="/table/:tableId/billing" element={<Billing />} />
      <Route path="/table/:tableId/payment" element={<Payment />} />
      <Route path="/foods" element={<FoodList />} />
    </Routes>
  )
}

export default App

