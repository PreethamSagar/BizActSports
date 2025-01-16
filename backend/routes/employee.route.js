import express from "express";
import { insertEmployee, getAllEmployees} from "../controller/employee.controller.js";

const router = express.Router();

router.post("/", insertEmployee);
router.get("/", getAllEmployees);

export default router;