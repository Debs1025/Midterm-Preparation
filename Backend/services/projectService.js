const Project = require('../models/projectModel');
const axios = require('axios');

// Create project
const createProject = async (id, name, description, createdBy) => {
    const project = new Project({
        id,
        name,
        description,
        createdBy
    });

    await project.save();
    return project;
}

// Fetch all projects with their tasks from another backend
const fetchAllProjectsWithTasks = async () => {
    const projects = await Project.find();
    const projectsWithTasks = await Promise.all(
        projects.map(async (project) => {
            // Replace with your actual tasks backend URL
            const tasksResponse = await axios.get(`http://tasks-backend/api/tasks?projectId=${project.id}`);
            return {
                ...project.toObject(),
                tasks: tasksResponse.data
            };
        })
    );
    return projectsWithTasks;
}

module.exports = { createProject, fetchAllProjectsWithTasks };