const Contact = require('../models/contact');

// Get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET single contact
exports.getContactById = async (req, res) => {
    try {
       const   
    }
} 