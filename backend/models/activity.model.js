import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    claimNumber: {
        type: Number,
        required: true,
        unique: true
    },
    claimDate: {
        type: Date,
        required: true
    },
    activityDate: {
        type: Date,
        required: true
    },
    sportsActivity: {
        type: String,
        required: true
    },
    courtFees: {
        type: Number,
        required: true
    },
    bookedBy: {
        type: String,
        required: true
    },
    invoiceNo: {
        type: String,
        required: true
    },
    slotStartTime: {
        type: Number,
        required: true
    },
    slotEndTime: {
        type: Number,
        required: true
    },
    courtsBooked: {
        type: Number,
        required: true
    },
    employeesImageURL: {
        type: String,
        required: true
    },
    employeesPlayed:
        [{
            employeeName: String
        }]
    ,
    employeesCount: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    });

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;