import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    admission: { type: mongoose.Schema.Types.ObjectId, ref: "Admission" },
    items: [
      {
        serviceName: String,
        cost: Number,
      },
    ],
    totalAmount: Number,
    status: {
      type: String,
      enum: ["UNPAID", "PARTIAL", "PAID"],
      default: "UNPAID",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bill", billSchema);
