const { Router } = require("express");
const { addUser, getAllUsers, login, updateUser, deleteUser } = require("./controller");
const { hashPass } = require("../middlewares/hash");
const userRouter = Router();

userRouter.post("/users", hashPass, addUser);
userRouter.get("/users", getAllUsers);
userRouter.post("/signin", login);
userRouter.patch("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser)

module.exports = userRouter;