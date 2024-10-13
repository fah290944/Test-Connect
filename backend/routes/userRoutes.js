const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers, refreshToken } = require('../controllers/userController');
const { jwtValidate } = require('../middlewares/Vaildate');

router.post('/refresh', refreshToken);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', jwtValidate, getUsers);

module.exports = router;
