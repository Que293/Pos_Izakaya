const express = require('express');
const router = express.Router();
const { getAllReservations,
    getReservationByid,
    addReservation,
    updateReservation,
    deleteReservation,
    getReservationByDate,
    getReservationByTableId,
    refreshTableAndSeatStatus } = require('../controllers/reservations');

router.get('/reservations', getAllReservations)
router.get('/reservations/:id', getReservationByid)
router.post('/reservations', addReservation)
router.put('/reservations/:id', updateReservation)
router.delete('/reservations/:id', deleteReservation)
router.get('/reservations/date/:date', getReservationByDate)
router.get('/tables/:tableId/reservations', getReservationByTableId)
router.put('/refreshstatus',refreshTableAndSeatStatus )

module.exports = router;