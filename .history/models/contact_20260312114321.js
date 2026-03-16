const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true, maxlength: 50},
    lastName: { type: String, required: true, maxlength: 50},
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ }, 
    favoriteColor: { type: String, },
    birthday: Date 
}, { timestamps: true});


module.exports = mongoose.model('Contact', contactSchema);