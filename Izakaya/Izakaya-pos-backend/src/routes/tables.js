const express = require('express');
const router = express.Router();
const { getAlltables,
    getTableById, 
    walkInTable, 
    reserveTable, 
    updateTable } 
    = require('../controller/tables');


router.get('/tables', getAlltables);
router.get('/tables/:id', getTableById);
router.post('/tables/:id/occupy', walkInTable);
router.post('/tables/:id/reserve', reserveTable);
router.put('/tables/:id/status', updateTable);


module.exports = router;
