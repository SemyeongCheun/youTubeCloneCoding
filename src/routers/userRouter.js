import express from "express";
import { deleteUser, editUser, see, logout } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);
userRouter.get("/:id", see);
userRouter.get("/logout", logout);



export default userRouter;
