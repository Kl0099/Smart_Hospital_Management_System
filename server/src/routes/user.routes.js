import express from "express";
import {
  getAllUsers,
  getUserById,
  getUsersByRole,
  updateUser,
  updatePassword,
  deactivateUser,
  activateUser
} from "../controllers/user.controller.js";

const router = express.Router();

// Admin only
router.get("/", getAllUsers);

// Get by role
router.get("/role/:role", getUsersByRole);

// Get single user
router.get("/:id", getUserById);

// Update profile
router.put("/:id", updateUser);

// Update password
router.put("/password/:id", updatePassword);

// Soft delete
router.put("/deactivate/:id", deactivateUser);

// Reactivate
router.put("/activate/:id", activateUser);

export default router;
