const express = require('express'); // Importing Express framework
const router = express.Router(); //Creating a new router instance
const contactsController = require('../controllers/contactsController'); // Importing the contacts co


// ==== Contacts Routes ====

// Get all contacts
router.get('/', contactsController.getAllContacts);

// Get contact by ID
router.get('/:id', contactsController.getContactById);

// Create new contact
router.post('/', contactsController.createContact);

// Update contact by ID
router.put('/:id', contactsController.updateContact);

// Delete contact by ID 

router.delete('/:id', contactsController.deleteContact);

module.exports = router;