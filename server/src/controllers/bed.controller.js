import Bed from "../models/bed.model.js";

export const createBed = async (req, res) => {  
  const bed = await Bed.create(req.body);
  res.status(201).json(bed);
};

export const getAllBeds = async (req, res) => {
  const beds = await Bed.find().populate("ward assignedPatient");
  res.json(beds);
};

export const updateBedStatus = async (req, res) => {
  const { status } = req.body;
  const bed = await Bed.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  res.json(bed);
};
