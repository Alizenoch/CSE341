const express = require('express'); // Importing Express framework
const router = express.Router(); //Creating a new router instance
const contactsController = require('r../controllers/contactsController'); // Importing the contacts controller to handle the logic for each route


// ==== Contacts Routes ====

// Get all contacts
router.get('/', contactsController.getAllContacts); // This route will handle GET requests to the root of the contacts endpoint and will call the ger

// Get contact by ID
router.get('/:id', contactsController.getContactById);

// Create new contact
router.post('/', contactsController.createContact);

// Update contact by ID
router.put('/:id', contactsController.updateContact);

// Delete contact by ID 

router.delete('/:id', contactsController.deleteContact);

module.exports = router;