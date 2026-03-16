require('dotenv').config();
const express = require('express');
const express = require('express');
const connectdb = require('./db/connection');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/contact', contactsRou());
