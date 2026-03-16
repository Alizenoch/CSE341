// server.js
const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
const client = new MongoClient(process.env.MONGODB_URI);

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const db = client.db('cse341');
    const contactsCollection = db.collection('contact');

    // Routes
    app.get('/contacts', async (req, res) => {
      const contacts = await contactsCollection.find().toArray();
      res.json(contacts);
    });

    app.get('/contacts/:id', async (req, res) => {
      const contact = await contactsCollection.findOne({ _id: new ObjectId(req.params.id) });
      res.json(contact);
    } catch (err) {
      res.status(400).json({ error: 'Invalid ID format'})
    }
    });


      app.get('/', (req, res) => {
     res.send('Contacts API is running!');
   });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

 

main();