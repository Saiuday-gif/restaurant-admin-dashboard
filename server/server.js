const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Environment variables కోసం

const app = express();

// 1. Middlewares
app.use(cors());
app.use(express.json());

// 2. MongoDB Connection
// process.env.MONGO_URI 
const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB Atlas Connected Successfully! ✅"))
    .catch((err) => console.log("Database connection error: ❌", err));

// 3. Simple Route for Testing
app.get('/', (req, res) => {
    res.send('Restaurant Menu API is running...');
});

app.use('/api/menu', menuRoutes)


// 4. Port Setup
// Render 
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});