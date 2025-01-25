const express = require('express');
const router = express.Router();

// import controller methods
const { create, list, read, update, remove } = require('../controllers/menuCategory');

// routes
router.post('/menuCategory', create);
router.get('/menuCategories', list);
router.get('/menuCategory/:id', read);
router.put('/menuCategory/:id', update);
router.delete('/menuCategory/:id', remove);

module.exports = router;