import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import acitivityRouter from "./routes/activity.route.js";


dotenv.config();
const app = express();
const port = process.env.PORT;
app.use("/api/activity", acitivityRouter)
app.use(express.json())

app.listen(port, () => {
    connectDB();
    console.log(`server started at port ${port}`)
})

