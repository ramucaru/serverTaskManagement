import { Schema, model } from "mongoose";
import { validateEmail } from "../Utills/utills.js";


const auth = new Schema(
    {
        email: {
            type: String,
            validate: [validateEmail, "email is invalid"],
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        name: {
            type: String,
        },
        PasswordList: {
            type: [String]
        }
    },
    {
        timestamps: true,
    }
);

export default model("users", auth);
