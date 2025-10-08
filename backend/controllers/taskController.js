const {
  createTaskService,
  updateTaskService,
  deleteTaskService
} = require('../services/taskService');
const { createTaskValidator, updateTaskValidator } = require('../validators/taskValidator');
const Task = require('../models/taskModel');

// ✅ Create a new task
async function createTaskController(req, res) {
  const { error } = createTaskValidator(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      details: error.details[0].message
    });
  }

  try {
    const task = await createTaskService(req.body);
    return res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create task',
      error: err.message
    });
  }
}

// ✅ Get all tasks
async function getAllTasksController(req, res) {
  try {
    const tasks = await Task.find();
    return res.status(200).json({
      success: true,
      message: 'Tasks retrieved successfully',
      data: tasks
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch tasks',
      error: err.message
    });
  }
}

// ✅ Update a task
async function updateTaskController(req, res) {
  const { error } = updateTaskValidator(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      details: error.details[0].message
    });
  }

  try {
    const updatedTask = await updateTaskService(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: updatedTask
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message || 'Task not found'
    });
  }
}

// ✅ Delete a task
async function deleteTaskController(req, res) {
  try {
    const result = await deleteTaskService(req.params.id);
    return res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message || 'Task not found'
    });
  }
}

module.exports = {
  createTaskController,
  getAllTasksController,
  updateTaskController,
  deleteTaskController
};
