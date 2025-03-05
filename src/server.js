import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./Routes/authroute.js";
import task from "./Routes/task.js"
import { authMiddleware } from "./Middleware/middleware.js"
dotenv.config();

const app = express();
const port = process.env.PORT || 5000
const connection = process.env.MongoDB_Connection

app.use(express.json());
app.use(cors());
app.use(authMiddleware)
app.use("/auth", auth);
app.use("/task", task);

mongoose.connect(connection, { dbName: "Task_Manager" }).then(() => {
    app.listen(port, () => {
        console.log(`app is running ${port}`);
    })
}).catch((error) => {
    console.error(error.message)
})
