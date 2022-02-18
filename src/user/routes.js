const { Router } = require("express");
const { addUser, getAllUsers, login } = require("./controller");
const { hashPass } = require("../middlewares/hash");
const userRouter = Router();

userRouter.post("/users", hashPass, addUser);
userRouter.get("/users", getAllUsers);
userRouter.post("/signin", login);

module.exports = userRouter;