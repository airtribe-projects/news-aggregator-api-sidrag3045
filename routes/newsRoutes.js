const express = require('express');
const { getNews } = require('../controllers/newsController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/news', authMiddleware, getNews);

module.exports = router;
