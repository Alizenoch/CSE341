const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
// Get all contacts
router.get('/', contactsController.getAllContacts);
// Get contact by ID
router.get('/:id', contactsController.getContactById);
// Create new contact
router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;