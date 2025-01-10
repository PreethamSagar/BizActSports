import Employee from "../models/employee.model.js";

export const insertEmployee = async (req, res) => {
    console.log(req)
    const employee = req.body;
    console.log("Employee Created: ", req.body)

    if (!employee.employeeNumber || !employee.employeeName || !employee.phoneNumber || !employee.nickName) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    const newEmployee = new Employee(employee)
    try {
        await newEmployee.save();
        console.log("Employee Created: ", newEmployee)
        res.status(201).json({ success: true, data: newEmployee });
    } catch (error) {
        console.error("Error in Creating Employee:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}