const Task = require('../models/taskModel');

async function createTaskService(taskData) {
  const { title, description, createdBy } = taskData;
  const newTask = new Task({ title, description, createdBy });
  await newTask.save();
  return newTask;
}

async function updateTaskService(taskId, updatedData) {
  const task = await Task.findById(taskId);
  if (!task) {
    throw new Error('Task not found');
  }

  Object.assign(task, updatedData);
  await task.save();
  return task;
}

async function deleteTaskService(taskId) {
  const task = await Task.findById(taskId);
  if (!task) {
    throw new Error('Task not found');
  }

  await Task.findByIdAndDelete(taskId);
  return { message: 'Task deleted successfully' };
}

module.exports = {
  createTaskService,
  updateTaskService,
  deleteTaskService
};
