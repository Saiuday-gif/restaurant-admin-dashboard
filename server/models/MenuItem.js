const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, default: 'Available' }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);