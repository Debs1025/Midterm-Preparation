const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// POST /api/projects - Create a new project
router.post('/', projectController.createProject);

// GET /api/projects - Get all projects with their tasks
router.get('/', projectController.getAllProjectsWithTasks);

module.exports = router;