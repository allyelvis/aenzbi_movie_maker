const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create a new project
router.post('/create', async (req, res) => {
    const project = new Project(req.body);
    try {
        const savedProject = await project.save();
        res.json(savedProject);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all projects
router.get('/list', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a project
router.put('/update/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a project
router.delete('/delete/:id', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
