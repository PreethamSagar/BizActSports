import Activity from "../models/activity.model.js";

export const insertActivity = async (req, res) => {
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
}

export const deleteActivity = async (req, res) => {
    const { id } = req.params;
    console.log("Received Id for deleting activity: ", id);
    try {
        await Activity.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: `product deleted ${id}` });
    } catch (error) {
        console.error("Error in Deleting Activity: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find({});
        res.status(200).json({ success: true, data: activities });
    }
    catch (error) {
        console.log("Error in fetching all activities: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const updateActivity = async (req, res) => {
    const { id } = req.params;
    const activity = req.body;
    try {
        const updatedActivity = await Activity.findByIdAndUpdate(id, activity, { new: true });
        res.status(200).json({ success: true, data: updatedActivity });
    } catch (error) {
        console.error("Updating Activity failed: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const getActivity = async (req, res) => {
    const { id } = req.params;
    try {
        const activities = await Activity.findById(id);
        res.status(200).json({ success: true, data: activities });
    }
    catch (error) {
        console.log("Error in fetching all activities: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}