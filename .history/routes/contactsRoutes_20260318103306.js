const express = require('express'); 
const router = express.Router(); 
const contactsController = require('../controllers/contactsController'); 

// ==== Contacts Routes ====

// Get all contacts
/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Retrieve all contacts
 *     responses:
 *       200:
 *         description: A list of contacts
 */
router.get('/', contactsController.getAllContacts);

// Get contact by ID
/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Retrieve a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact found
 *       404:
 *         description: Contact not found
 */
router.get('/:id', contactsController.getContactById);

// Create a new contact
/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created successfully
 */
router.post('/', contactsController.createContact);

// Update contact by ID
/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       404:
 *         description: Contact not found
 */
router.put('/:id', contactsController.updateContact);

// Delete contact by ID
/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       404:
 *         description: Contact not found
 */
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
