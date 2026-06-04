const Task = require("../models/task");

// add new task

const createTask = async (taskData) => {

    const task = await Task.create(taskData);

    return task;
};

// get all tasks

const getAllTasks = async () => {

    const tasks = await Task.find();

    return tasks;
};

// get one task using id

const getTaskById = async (id) => {

    const task = await Task.findById(id);

    return task;
};

// update task

const updateTask = async (id, updatedData) => {

    const task = await Task.findById(id);

    if (!task) {
        return null;
    }

    // updating task details

    task.title = updatedData.title;
    task.description = updatedData.description;
    task.status = updatedData.status;

    await task.save();

    return task;
};

// delete task

const deleteTask = async (id) => {

    const task = await Task.findById(id);

    if (!task) {
        return null;
    }

    await Task.findByIdAndDelete(id);

    return task;
};

// search task by title

const searchTask = async (title) => {

    const tasks = await Task.find({
        title: title
    });

    return tasks;
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    searchTask
};