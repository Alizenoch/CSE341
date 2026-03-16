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
   console.log('Connected to MongoDB Atlas');
   
   const db = client.db('cse341');
   const contactsCollection = db.collection('contact');

   // Routes
   app.get('/contacts' , async (req, res) => {
    const contacts = await contactsCollection.find().toArray();
    res.json(contacts);
   });

   app.get('/contacts/:id', async (req, res) => {
   const { ObjectId } = require('mongodb');
   const contact = await contactsCollection.findOne({ _id: new ObjectId(req.params.id) });
   res.json() 
   

   })
  }  
}