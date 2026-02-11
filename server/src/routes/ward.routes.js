import express from "express";
import {
  createWard,
  getAllWards
} from "../controllers/ward.controller.js";

const router = express.Router();

router.post("/",createWard);
router.get("/", getAllWards);

export default router;
