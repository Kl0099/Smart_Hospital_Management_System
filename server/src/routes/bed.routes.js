import express from "express";
import {
  createBed,
  getAllBeds,
  updateBedStatus
} from "../controllers/bed.controller.js";


const router = express.Router();

router.post("/",   createBed);
router.get("/",  getAllBeds);
router.put("/:id",   updateBedStatus);

export default router;
