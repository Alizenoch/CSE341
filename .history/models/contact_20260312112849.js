const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String, reqired: true,
    lastName: String, required: true,
    email: String, true,
    favoriteColor: String,
    birthday: Date
});

module.exports = mongoose.model('Contact', contactSchema);