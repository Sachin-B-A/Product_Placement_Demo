const express = require('express');
const { createBid, getBids } = require('../controllers/bidController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createBid);
router.get('/:filmId', getBids);

module.exports = router;
