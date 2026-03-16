// server.js
const express = require('express');
const dotnev = require('dotenv');
const { MogonClient } = require('mongodb');

dotnev.config();
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI);

async function main() {
  try {
   await client.connect();
   console.log('Connected to Mongo') 
  }  
}