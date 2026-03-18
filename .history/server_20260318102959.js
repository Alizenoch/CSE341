require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contacts API",
      version: "1.0.0",
      description: "API documentation for Contacts project",
    },
  },
  apis: ["./routes/*.js"], // adjust path if needed
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));



// Routes
app.use('/contacts', contactsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the CSE341 Contacts API');
});


// Connect DB and start server
connectDB();
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

