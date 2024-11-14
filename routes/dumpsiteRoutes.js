const express = require('express');
const router = express.Router();
const DumpsiteController = require('../controllers/dumpsiteController');

router.get('/', DumpsiteController.getAllDumpsites);
router.post('/', DumpsiteController.addDumpsite);
module.exports = router;