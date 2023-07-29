import express, { urlencoded } from "express"
import cors from 'cors'

import {router as userRouter}  from './router/user'
import { adminController } from "./controller/admin"

const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user',userRouter)
app.get('/admin/user',adminController)

export default app