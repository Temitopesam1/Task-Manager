const { Router } = require("express")
const express = require("express")
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require("../controller/tasks")
const router = express.Router()

// get all tasks
router.get('/', getAllTasks)

// create task
router.post("/", createTask)

// get a single task
router.get("/:id", getTask)

// update task
router.patch("/:id", updateTask)

// delete task
router.delete("/:id", deleteTask)






module.exports = router