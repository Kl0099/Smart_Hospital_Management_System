import MedicalRecord from "../models/medicalRecord.model.js";

export const createMedicalRecord = async (req, res) => {
  const record = await MedicalRecord.create(req.body);
  res.status(201).json(record);
};

export const getMedicalRecords = async (req, res) => {
  const records = await MedicalRecord.find()
    .populate("patient doctor");
  res.json(records);
};
