const express = require('express');
const { createFilm, getFilms } = require('../controllers/filmController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createFilm);
router.get('/', getFilms);

module.exports = router;
