const express = require('express');
const router = express.Router();

const {
  createTaskController,
  getAllTasksController,
  updateTaskController,
  deleteTaskController
} = require('../controllers/taskController');

// Create a new task
router.post('/api/tasks', createTaskController);

// Get all tasks
router.get('/api/tasks', getAllTasksController);

// Update a specific task by ID
router.put('/api/tasks/:id', updateTaskController);

// Delete a specific task by ID
router.delete('/api/tasks/:id', deleteTaskController);

module.exports = router;
