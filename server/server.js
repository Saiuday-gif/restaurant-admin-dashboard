const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');
const app = express();

// 1. Database connection
connectDB();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Route
app.use('/api/menu', menuRoutes);
app.get('/', (req, res) => {
    res.send('Restaurant Menu API is running');
});

// 4. Port setup
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});