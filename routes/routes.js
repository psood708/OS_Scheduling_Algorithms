const express = require('express');
const router = express.Router();

const{postSchedule, getSchedule} = require('../controllers/bankerController');

router.post('/schedule',postSchedule);
router.get('/get/:id',getSchedule);

module.exports = router;

