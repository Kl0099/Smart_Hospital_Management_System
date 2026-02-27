import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


// Get All Users (Admin)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    if (!users)
      return res.status(404).json({ message: "No users found!" });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get Single User by ID
export const getUserById = async (req, res) => {
  try {
    if(!req.params.id){
      return res.status(400).json({ message: "User ID is required!" });
    }

    const user = await User.findById(req.params.id).select("-password");

    if (!user)
      return res.status(404).json({ message: "User not found!" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get Users By Role (Doctor / Patient / Admin)
export const getUsersByRole = async (req, res) => {
  try {
    const { role } = req.params;

    const users = await User.find({ role }).select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update User Profile
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select("-password");

    if (!updatedUser)
      return res.status(404).json({ message: "User not found!" });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update Password
export const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.params.id);

    if (!user)
      return res.status(404).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Old password incorrect!" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully!" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Soft Delete User (Deactivate Account)
export const deactivateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    ).select("-password!");

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deactivated", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Reactivate User (Admin Only)
export const activateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isActive: true },
      { new: true }
    ).select("-password!");

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User activated", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
