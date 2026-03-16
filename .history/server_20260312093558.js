require('dotenv').config();
const express = require('express');
const express = require('express');
const connectdb = require('./db/connection');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
const PORT = process.