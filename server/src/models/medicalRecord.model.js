import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    diagnosis: String,
    prescription: String,
    labReports: [String], // URLs
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("MedicalRecord", medicalRecordSchema);
