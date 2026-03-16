// server.js
const express = require('express');
const dotnev = require('dotenv');
const { MogonClient } = require('mongodb');

dotnev.config();
const app = express();
const port = process.env.PORT || 3000;

// Mongo