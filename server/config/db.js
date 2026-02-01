const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // process.env
        await mongoose.connect('mongodb://127.0.0.1:27017/eatoes'); 
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;