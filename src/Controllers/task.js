import taskModel from "../Models/taskModel.js";
import { constants, taskConstants } from "../Utills/constants.js";

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        await taskModel.create({ title, description, userId: req.userId });
        res.status(constants.OK).json({ message: taskConstants.TASK_CREATED_SUCCESSFULLY })
    } catch (error) {
        res.status(constants.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }
}

export const getAllTask = async (req, res) => {
    try {
        const getAllTask = await taskModel.find({ userId: req.userId });
        res.status(constants.OK)
            .json({ message: taskConstants.TASK_FETCHED_ALL_SUCCESSFULLY, data: getAllTask })
    } catch (error) {
        res.status(constants.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }
}

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const getTask = await taskModel.findById(id);
        if (!getTask) {
            res.status(constants.NOT_FOUND);
            throw new Error(taskConstants.TASK_NOT_FOUND);
        }
        res.status(constants.OK)
            .json({ messsage: taskConstants.TASK_FETCHED_SUCCESSFULLY, data: getTask })
    } catch (error) {
        res.status(res.statusCode || constants.INTERNAL_SERVER_ERROR)
            .json({ error: error.message || res.message(constants.INTERNAL_SERVER_ERROR) })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        if (!title) throw new Error(taskConstants.TITLE_REQUIRED)

        const updateTask = await taskModel.findByIdAndUpdate(id, { title, description });

        console.log(updateTask);

        if (!updateTask) {
            res.status(constants.NOT_FOUND);
            throw new Error(taskConstants.TASK_NOT_FOUND);
        }
        res.status(constants.OK).json({ message: taskConstants.TASK_UPDATED_SUCCESSFULLY, });
    } catch (error) {
        res.status(res.statusCode || constants.INTERNAL_SERVER_ERROR)
            .json({ error: error.message || res.message(constants.INTERNAL_SERVER_ERROR) })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskModel.findByIdAndDelete(id);
        if (!deletedTask) {
            res.status(constants.NOT_FOUND);
            throw new Error(taskConstants.TASK_NOT_FOUND);
        }
        res.status(constants.OK).json({ message: taskConstants.TASK_DELETED_SUCCESSFULLY })
    } catch (error) {
        res.status(res.statusCode || constants.INTERNAL_SERVER_ERROR)
            .json({ error: error.message || res.message(constants.INTERNAL_SERVER_ERROR) })
    }
}