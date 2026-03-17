const Contact = require('../models/contact');

// Create new contact
exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({ firstName, lastName, email, favoriteColor, birthday });
    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (err) {
    console.error('Error creating contact:', err); // 👈 logs the actual error
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

// Update contact
exports.updateContact = async (req, res) => {
  try {
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

    res.status(200).json(updatedContact);
  } catch (err) {
    console.error('Error updating contact:', err); // 👈 logs the actual error
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

    