const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    created_at: { type: Date, default: Date.now },
    last_modified: Date,
    data: Object, // Store project data (e.g., video clips, timeline data)
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
