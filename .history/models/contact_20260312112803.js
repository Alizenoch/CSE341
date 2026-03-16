const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String, re
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
});

module.exports = mongoose.model('Contact', contactSchema);