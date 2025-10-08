const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    "id": { type: String, required: true, unique: true },
    "name": { type: String, required: true },
    "description": { type: String, required: true },
    "createdBy": { type: String, required: true }
});

module.exports = mongoose.model('Project', projectSchema);