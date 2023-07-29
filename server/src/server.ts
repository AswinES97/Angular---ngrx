import http from "http"
import { Server } from "socket.io"

import app from "./app/app"
import "dotenv/config"
import mongoose from "mongoose"

const PORT = process.env.PORT || 3000
const server = http.createServer(app)
// const io = new Server(server)


const startServer = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/week19')
        .then(()=>{
            console.log('db connected');
            
        })

    server.listen(PORT, () => {
        console.log(`listing on port ${PORT}`);
    })
}

startServer()