import express from "express";
import { insertActivity, deleteActivity, getAllActivities, updateActivity, getActivity } from "../controller/acitivity.controller.js";

const router = express.Router();


router.post("/", insertActivity);
router.delete("/:id", deleteActivity);
router.get("/", getAllActivities);
router.get("/:id", getActivity);
router.put("/:id", updateActivity);

export default router;