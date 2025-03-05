import { Schema, model } from "mongoose"

const task = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "UserId Is Required"]
    }
})

export default model("Task", task)