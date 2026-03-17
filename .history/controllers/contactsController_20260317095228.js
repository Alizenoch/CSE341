const Contact = require('../models/contact');
const mongoose = require('mongoose');

// Get all contacts
exports.getAllContacts = async (req, res) => { 
  try {
    const contacts = await Contact.find();
    res.status(200).json({ contacts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single contact
exports.getContactById = async (req, res) => {
  try {
    // Validates ObjectId format first
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid contact ID format'});
    }
    const contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }   
};

// Create new contact
exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({ firstName, lastName, email, favoriteColor, birthday });
    const savedContact = await newContact.save();

    res.status(201).json( savedContact );
  } catch (err) {
    res.status(400).json({ message: err.message });     
  }
};

// Update contact
exports.updateContact = async (req, res) => {
  try {
    // Validate ObjectId format first
    if(mongoose.Types.ObjectId.isValid(req.params.id))
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, favoriteColor, birthday },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({
      message: 'Contact updated successfully',
      contact: updatedContact
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({message: 'Invalid contact ID format'});
    }
    res.status(500).json({ message: err.message });
  }
};

 
    