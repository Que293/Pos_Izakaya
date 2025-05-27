const express = require('express');
const router = express.Router();
const { getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    updateOrderStatus,
    cancelledOrderOrder,
    getOrdersByTableId,
    getOrdersBySeatId } = require('../controllers/orders');

router.get('/orders', getAllOrders)
router.get('/orders/:id', getOrderById)
router.post('/orders', createOrder)
router.put('/orders/:id', updateOrder)
router.put('/orders/:id/status', updateOrderStatus)
router.delete('/orders/:id', cancelledOrderOrder)
router.get('/tables/:tableId/orders', getOrdersByTableId)
router.get('/seats/:seatId/orders', getOrdersBySeatId)

module.exports = router;

