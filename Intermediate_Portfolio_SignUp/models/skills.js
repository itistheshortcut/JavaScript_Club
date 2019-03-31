const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create skills Schema
const skillsSchema = new Schema({
    skill: {
        type: String,
        required: true
    }
})

module.exports =  mongoose.model('Skills', skillsSchema);
