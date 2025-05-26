const express = require('express');
const router = express.Router();
const { getAllSeats, getSeatByid, addSeat, updateSeat,  updataSeatStatus , deleteSeat } = require('../controllers/seats');

router.get('/tables/:tableId/seats', getAllSeats)
router.get('/seats/:id',getSeatByid )
router.post('/tables/:tableId/seats',addSeat )
router.put('/seats/:id', updateSeat) 
router.put('/seats/:id/status', updataSeatStatus)
router.delete('/seats/:id', deleteSeat)

module.exports = router;