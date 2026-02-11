import Admission from "../models/admission.model.js";
import Bed from "../models/bed.model.js";

export const admitPatient = async (req, res) => {
  const { patient, doctor, bed } = req.body;

  const admission = await Admission.create({
    patient,
    doctor,
    bed
  });

  await Bed.findByIdAndUpdate(bed, {
    status: "OCCUPIED",
    assignedPatient: patient
  });

  res.status(201).json(admission);
};

export const dischargePatient = async (req, res) => {
  const admission = await Admission.findById(req.params.id);

  admission.status = "DISCHARGED";
  admission.dischargeDate = new Date();
  await admission.save();

  await Bed.findByIdAndUpdate(admission.bed, {
    status: "AVAILABLE",
    assignedPatient: null
  });

  res.json({ message: "Patient discharged successfully" });
};
