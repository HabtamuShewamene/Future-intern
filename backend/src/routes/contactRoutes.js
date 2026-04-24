const express = require('express');
const { submitContact } = require('../controllers/contactController');
const { validateContactInput } = require('../utils/validators');

const router = express.Router();

router.post('/', validateContactInput, submitContact);

module.exports = router;
