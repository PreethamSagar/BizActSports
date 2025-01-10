import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeNumber: {
        type: Number,
        required: true,
        unique: true
    },
    employeeName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    nickName: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;