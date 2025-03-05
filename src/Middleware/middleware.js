import { constants, errorMessages } from "../Utills/constants.js";
import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(constants.UN_AUTHORIZED).json({ message: "unAuthrized" });
    }
    const check = jwt.verify(token, process.env.JWT_TOKEN);
    req.userId = check.id;
    next();
  } catch (error) {
    console.log(error.message, "error");
    return res.status(constants.BAD_REQUEST).json({ error: "Token Expired" });
  }
};

export const authMiddleware = (req, res, next) => {
  res.message = (status) => {
    return `${errorMessages[status]}`;
  };
  next();
};