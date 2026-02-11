import express from "express";
import {
  admitPatient,
  dischargePatient
} from "../controllers/admission.controller.js";

const router = express.Router();

router.post("/",  admitPatient);
router.put("/discharge/:id",  dischargePatient);

export default router;
