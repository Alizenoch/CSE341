const express = require('express'); // Importing Express framework
const router = express.Router(); //Creating a new router instance
const contactsController = require('r../controllers/contactsController'); // Importing the contacts controller to handle the logic for each route


// ==== Contacts Routes ====

// Get all contacts
router.get('/', contactsController.getAllContacts); // This route will handle GET requests to the root of the contacts endpoint and will call the getAllContacts method in the contactsController to retrieve all contacts from the database.

// Get contact by ID
router.get('/:id', contactsController.getContactById); // This route will handle GET requests to the /:id path and will call the getContactById method in the contactsController to retrieve a specific contact by their ID.

// Create new contact
router.post('/', contactsController.createContact); // This route will handle POST requests to the root  of the contacts endpoint and will call the createContact method in the contactsController to create a new contact in the database.

// Update contact by ID
router.put('/:id', contactsController.updateContact); // This route will handle PUT requests to the /:id path and will call the updateContact method in the contactsController to update a specific contact by their ID.

// Delete contact by ID 

router.delete('/:id', contactsController.deleteContact); // This route will handle 

module.exports = router;