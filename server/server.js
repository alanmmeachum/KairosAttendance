import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/students.routes.js"

const app = express();

app.use(express.join(), cors())
app.use('/api', router)

dotenv.config()

dbConnect()

const port = 8000;

app.listen(port, () => console.log(`Listening on port: ${port}!`));
