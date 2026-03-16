const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String, reqired: true,
    lastName: String, required: 
    email: String,
    favoriteColor: String,
    birthday: Date
});

module.exports = mongoose.model('Contact', contactSchema);