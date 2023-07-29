import express, { Request, Response } from "express";
import { userController, userLoginControler } from "../controller/user";

const router = express.Router()

router.post('/', userController)
router.post('/login',userLoginControler)

export { router }