import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import seller_router from './Routes/vendor_routes.js';
import restro_router from './Routes/Restro_routes.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/vendor', seller_router);
app.use('/restro',restro_router)

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});