import express from "express";
import { insertEmployee} from "../controller/employee.controller.js";

const router = express.Router();

router.post("/", insertEmployee);

export default router;