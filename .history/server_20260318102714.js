require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection');
const contactsRoutes = require('./routes/contactsRoutes');
const swaggerJsdoc = requ

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());



// Routes
app.use('/contacts', contactsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the CSE341 Contacts API');
});


// Connect DB and start server
connectDB();
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

