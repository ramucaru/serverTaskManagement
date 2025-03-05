import auth from "../Models/auth.js";
import { validatePassword } from "../Utills/utills.js";
import { constants, errorConstants, salt, successMessage, } from "../Utills/constants.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createAccount = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            res.status(constants.BAD_REQUEST);
            throw new Error(errorConstants.PERMISSION);
        }
        const existingUser = await auth.findOne({ email: email });
        console.log(existingUser, "existingUser");

        if (existingUser) {
            res.status(constants.BAD_REQUEST);
            throw new Error(errorConstants.ALREADY_PRESENT);
        }
        if (!validatePassword(password)) {
            res.status(constants.BAD_REQUEST);
            throw new Error(errorConstants.INVALID_PASSWORD);
        }
        const hash = await bcrypt.hash(password, salt);
        if (hash) {
            req.body.password = hash;
            const accountDetails = req.body;
            accountDetails.PasswordList = [hash];
            await auth.create(accountDetails);
            res
                .status(constants.CREATED)
                .json({ data: successMessage.CREATION, message: res.message(constants.CREATED) });
        } else {
            res.status(constants.INTERNAL_SERVER_ERROR);
            throw new Error(res.message(constants.INTERNAL_SERVER_ERROR));
        }
    } catch (error) {
        const statusCode = error.message.includes("duplicate")
            ? constants.CONFLICTS
            : constants.INTERNAL_SERVER_ERROR;
        res
            .status(res.statusCode || statusCode)
            .json({ error: error.message || res.message(statusCode) });
    }
};

export const loginController = async (req, res) => {
    try {
        const { password, email } = req.body;
        const search = await auth.findOne({ email });
        if (!search) {
            res.status(constants.NOT_FOUND);
            throw new Error("User Not Fount");
        }
        const passwordCheck = await bcrypt.compare(password, search.password);
        if (!passwordCheck) {
            res.status(constants.UN_AUTHORIZED);
            throw new Error("Invalid Password");
        }
        const payload = {
            email: search.email,
            name: search.name,
            id: search._id,
            created: search.createdAt
        }
        const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "24h" });
        res
            .status(constants.OK)
            .json({ message: res.message(constants.OK), token });
    } catch (error) {
        res.status(res.statusCode || constants.INTERNAL_SERVER_ERROR).json({
            error: error.message || res.message(constants.INTERNAL_SERVER_ERROR),
        });
    }
};

export const forgetPaasword = async (req, res) => {
    try {
        // const {  } = req.body;
        const { email, password } = req.body;
        const user = await auth.findOne({ email });
        if (!user) {
            res.status(constants.NOT_FOUND);
            throw new Error(res.message(`User ${constants.NOT_FOUND}`));
        }
        if (!validatePassword(password)) {
            res.status(constants.BAD_REQUEST);
            throw new Error(errorConstants.INVALID_PASSWORD);
        }

        let isPasswordCheck = false;
        const paaWordList = user.PasswordList;
        for (let i = 0; i < paaWordList.length; i++) {
            const value = user.PasswordList[i];
            isPasswordCheck = bcrypt.compareSync(password, value);
            if (isPasswordCheck) {
                break;
            }
        }

        if (isPasswordCheck) {
            res.status(constants.BAD_REQUEST);
            throw new Error(errorConstants.USED_PASSWORD);
        }
        const paswordBcrypt = await bcrypt.hash(password, salt);
        paaWordList.push(paswordBcrypt);
        await auth.findByIdAndUpdate(user.id, {
            password: paswordBcrypt,
            PasswordList: paaWordList
        })
        res
            .status(constants.OK)
            .json({ message: res.message(constants.NO_CONTENT) });
    } catch (error) {
        res
            .status(res.statusCode || constants.INTERNAL_SERVER_ERROR)
            .send({
                error: error.message || res.message(constants.INTERNAL_SERVER_ERROR),
            });
    }
};



