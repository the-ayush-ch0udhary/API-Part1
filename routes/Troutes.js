const express = require("express");

const router = express.Router();

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    searchTask,
    deleteTask
} = require("../controller/taskController");

// create task

router.post("/tasks", createTask);

// get all tasks

router.get("/tasks", getAllTasks);

// get task by id

router.get("/tasks/:id", getTaskById);

// update task

router.put("/tasks/:id", updateTask);

// delete task

router.delete("/tasks/:id", deleteTask);

// search task by title

router.get("/tasks/search/:title", searchTask);

module.exports = router;