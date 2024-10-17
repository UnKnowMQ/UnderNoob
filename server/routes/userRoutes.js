import express from "express"
import { loginUser, registerUser } from "../controll/userControll.js";


const userRoute = express.Router()

userRoute.post("/register", registerUser)
userRoute.post("/login", loginUser)

export default userRoute;