const express = require('express');
const router = express.Router();
const { getAllTables, getTablesByid, createTables, updataTables, deleteTables, statusTables, refreshAllTableCapacity } = require('../controllers/tables');


router.get('/tables', getAllTables)
router.get('/tables/:id',getTablesByid )
router.post('/tables',createTables )
router.put('/tables/:id', updataTables) 
router.delete('/tables/:id', deleteTables)
router.put('/tables/:id/status', statusTables)
router.put('/refresh-all-capacities',refreshAllTableCapacity )


module.exports = router;