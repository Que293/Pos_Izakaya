const express = require('express');
const router = express.Router();
const { pinLogin,
    logout } = require('../controllers/auth');

router.post('/auth/pin-login',pinLogin );
router.post('/auth/logout',logout );

module.exports = router;