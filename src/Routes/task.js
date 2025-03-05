import express from "express";
import { auth } from "../Middleware/middleware.js";
import { constants, taskConstants } from "../Utills/constants.js";
import taskModel from "../Models/taskModel.js";
import { createTask, deleteTask, getAllTask, getTask, updateTask } from "../Controllers/task.js";

const router = express.Router();

//create a new task
router.post("/create-task", auth, createTask)
//Get all tasks for the logged-in user
router.get("/getall-task", auth, getAllTask)
//Get a specific task
router.get("/get-task/:id", auth, getTask)
//update Task
router.patch("/update-task/:id", auth, updateTask)
//delete Task
router.delete("/delete-task/:id", auth, deleteTask)

export default router;