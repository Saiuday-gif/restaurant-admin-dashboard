const Menu = require('../models/Menu');

// Get all menus
exports.getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get menu by ID
exports.getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create menu
exports.createMenu = async (req, res) => {
    const menu = new Menu(req.body);
    try {
        const savedMenu = await menu.save();
        res.status(201).json(savedMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update menu
exports.updateMenu = async (req, res) => {
    try {
        const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(menu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete menu
exports.deleteMenu = async (req, res) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Menu deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};