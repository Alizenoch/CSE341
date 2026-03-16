const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
});

module.export