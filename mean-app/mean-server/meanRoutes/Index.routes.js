const express = require('express');
const router = express.Router();

const ctrlUser = require('../meanControllers/user.Controllers');

router.post('/register', ctrlUser.register);

module.exports = router;