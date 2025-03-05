import express from "express";
import { loginController, forgetPaasword, createAccount } from "../Controllers/auth.js";

const routes = express.Router();

routes.post("/register", createAccount);
routes.post("/login", loginController);
routes.patch("/forget_password", forgetPaasword);

export default routes;
