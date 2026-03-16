require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/contacts', contactsRoutes);

// Connect DB and start server
connectDB();
app.listen(PORT, () => console.log(`Server running on http port ${PORT}`));

