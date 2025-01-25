const express = require('express');
const router = express.Router();

//controllers
const {create, list, read, remove, update} = require('../controllers/menuContent');

//routes
router.post('/menuContent', create);
router.get('/menuContent', list);
router.get('/menuContent/:id', read);
router.delete('/menuContent/:id', remove);
router.put('/menuContent/:id', update);

module.exports = router;