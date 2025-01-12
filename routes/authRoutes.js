const express = require('express');
const { register, login, getPreferences, updatePreferences } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', register); // Matches test: POST /users/signup
router.post('/login', login);     // Matches test: POST /users/login
router.get('/preferences', authMiddleware, getPreferences); // Matches test: GET /users/preferences
router.put('/preferences', authMiddleware, updatePreferences); // Matches test: PUT /users/preferences

module.exports = router;

