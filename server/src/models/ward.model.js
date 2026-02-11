import mongoose from "mongoose";

const wardSchema = new mongoose.Schema(
  {
    wardName: { type: String, required: true },
    wardType: {
      type: String,
      enum: ["ICU", "GENERAL", "PRIVATE", "EMERGENCY"],
      required: true,
    },
    totalBeds: { type: Number, required: true },
    floor: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Ward", wardSchema);
