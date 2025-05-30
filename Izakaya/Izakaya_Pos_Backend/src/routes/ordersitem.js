const express = require('express');
const router = express.Router();
const { getOrdersItem,
    addOrdersItem,
    updateOrdersItem,
    updateOrdersItemStatus,
    deleteOrdersItem } = require('../controllers/ordersitem');

router.get('/orders/:orderId/items', getOrdersItem)
router.post('/orders/:orderId/items', addOrdersItem)
router.put('/orders/:orderId/items/:id', updateOrdersItem)
router.put('/orders/:orderId/items/:id/status', updateOrdersItemStatus)
router.delete('/orders/:orderId/items/:id', deleteOrdersItem)

module.exports = router;
