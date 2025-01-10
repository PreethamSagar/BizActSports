import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Activity from "./models/activity.model.js";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.listen(port, () => {
    connectDB();
    console.log(`server started at port ${port}`)
})

app.post("/api/activity", async (req, res) => {
    const activity = req.body;

    if (!activity.claimNumber || !activity.claimDate || !activity.activityDate || !activity.sportsActivity || !activity.courtFees || !activity.bookedBy || !activity.invoiceNo || !activity.slotStartTime || !activity.slotEndTime || !activity.courtsBooked || !activity.employeesImageURL || !activity.employeesPlayed || !activity.employeesCount) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    const newActivity = new Activity(activity)
    try {
        await newActivity.save();
        console.log("Activity Created: ", newActivity)
        res.status(201).json({ success: true, data: newActivity });
    } catch (error) {
        console.error("Error in Creating Activity:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

app.delete("/api/activity/:id", async (req, res) => {
    const { id } = req.params;
    console.log("Received Id for deleting activity: ", id);
    try {
        await Activity.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: `product deleted ${id}` });
    } catch (error) {
        console.error("Error in Deleting Activity: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})
app.get("/api/activities", async (req, res) => {
    try {
        const activities = await Activity.find({});
        res.status(200).json({ success: true, data: activities });
    }
    catch (error) {
        console.log("Error in fetching all activities: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})