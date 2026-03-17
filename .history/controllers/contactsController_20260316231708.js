const Contact = require('../models/contact');

// Get all contacts
exports.getAllContacts = async (req, res) => { 
    try {
        const contacts = await Contact.find();

        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET single contact
exports.getContactById = async (req, res) => {
    try {
       const contact = await Contact.findById(req.params.id);
       if (!contact) return res.status(404).json({ message: 'Contact not found' });
       res.json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }   
};

// POST new contact
exports.updateContact = async (req, res) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

         // Validates all required fields
        if (!firstName ||!lastName || !email || !favoriteColor || !birthday) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Attempt to update the contact
        const update
// POST new contact
exports.updateContact = async (req, res) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

         // Validates all required fields
        if (!firstName ||!lastName || !email || !favoriteColor || !birthday) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create and save new contact
        const newContact = new Contact({ firstName, lastName, email, favoriteColor, birthday });
        const savedContact = await newContact.save();

        // Return only the new contact 
        res.status(201).json({ id: savedContact._id });
    } catch (err) {
        res.status(400).json({ message: err.message });     
    }
 };

 // PUT update contact
 exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(updatedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });

    }
                    
};

// DELETE contact
exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);

        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json({ message: 'Contact deleted'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};    


 
    