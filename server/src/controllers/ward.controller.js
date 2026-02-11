import Ward from "../models/ward.model.js";

export const createWard = async (req, res) => {
  try {
    const ward = await Ward.create(req.body);
    res.status(201).json(ward);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllWards = async (req, res) => {
  const wards = await Ward.find();
  res.json(wards);
};
