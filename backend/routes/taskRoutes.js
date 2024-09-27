const express = require("express");
const {
  getTaskDetails,
  createTask,
  deleteTask,
} = require("../controllers/taskController");
const taskRoutes = express.Router();

taskRoutes.get("/getTasks", getTaskDetails);
taskRoutes.post("/createTask", createTask);
taskRoutes.delete("/deleteTask", deleteTask);

module.exports = taskRoutes;
