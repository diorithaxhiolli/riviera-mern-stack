const express = require('express');
const router = express.Router();

const { create, listByUser, list, cancel, requestChange } = require('../controllers/reservations');

router.post('/reservation', create);
router.get('/reservations/:id', listByUser);
router.get('/reservations', list);
router.put('/reservation/cancel/:id', cancel);
router.put('/reservation/requestChange/:id', requestChange);

module.exports = router;