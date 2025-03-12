import express from "express";
import { deleteUser, editUser, see, logout } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);
userRouter.get("/logout", logout);
userRouter.get("/:id", see);



export default userRouter;
