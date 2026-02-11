import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    bed: { type: mongoose.Schema.Types.ObjectId, ref: "Bed" },
    admissionDate: { type: Date, default: Date.now },
    dischargeDate: Date,
    status: {
      type: String,
      enum: ["ADMITTED", "DISCHARGED"],
      default: "ADMITTED",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admission", admissionSchema);
