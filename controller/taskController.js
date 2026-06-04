const taskService = require("../services/taskService");

// create task

const createTask = async (req, res) => {

    try {

        const { title, description } = req.body;

        // title should not be empty

        if (!title) {

            return res.status(400).json({
                message: "Task title is required"
            });
        }

        const task = await taskService.createTask({
            title,
            description
        });

        res.status(201).json(task);

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

// get all tasks

const getAllTasks = async (req, res) => {

    try {

        const tasks = await taskService.getAllTasks();

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

// get single task

const getTaskById = async (req, res) => {

    try {

        const task = await taskService.getTaskById(req.params.id);

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

// update task

const updateTask = async (req, res) => {

    try {

        const task = await taskService.updateTask(
            req.params.id,
            req.body
        );

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task updated successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

// delete task

const deleteTask = async (req, res) => {

    try {

        const task = await taskService.deleteTask(req.params.id);

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

// search task by title

const searchTask = async (req, res) => {

    try {

        const title = req.params.title;

        const tasks = await taskService.searchTask(title);

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
};
module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    searchTask
};