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
    console.log("in get_activity by id")
    const { id } = req.params;
    console.log("id", id)
    try {
        const activities = await Activity.findById(id);
        res.status(200).json({ success: true, data: activities });
    }
    catch (error) {
        console.log("Error in fetching all activities: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

//Will get all activities based on search parameter
export const getActivityByParms = async (req, res) => {
    console.log("parameter", req.query)

    let filter = {}; // Initialize an empty filter object
    for (const [key, value] of Object.entries(req.query)) {
        // Log each key-value pair from req.query
        console.log(`Key: ${key}, Value: ${value}`);
        if (!isNaN(value)) {
            // Convert to a number and apply an exact match
            filter[key] = Number(value);
        }
        else{
            // Add the value directly to the filter with regex for partial match
            filter[key] = { $regex: value, $options: "i" }; // Case-insensitive partial match
        }

        
    }

    try {
        console.log("Fetching Activity with filter: ", filter);

        const employees = await Activity.find(filter); // Fetch employees based on the filter
        res.status(200).json({ success: true, data: employees });
    } catch (error) {
        console.log("Error in fetching Activity: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
    