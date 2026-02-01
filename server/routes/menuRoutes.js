const express = require('express');

const router = express.Router();

// GET all menus
router.get('/', (req, res) => {
    res.json({ message: 'Get all menus' });
});

// GET menu by ID
router.get('/:id', (req, res) => {
    res.json({ message: `Get menu ${req.params.id}` });
});

// POST create new menu
router.post('/', (req, res) => {
    res.json({ message: 'Create new menu' });
});

// PUT update menu
router.put('/:id', (req, res) => {
    res.json({ message: `Update menu ${req.params.id}` });
});

// DELETE menu
router.delete('/:id', (req, res) => {
    res.json({ message: `Delete menu ${req.params.id}` });
});

module.exports = router;