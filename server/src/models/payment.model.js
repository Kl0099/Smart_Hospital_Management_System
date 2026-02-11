import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bill: { type: mongoose.Schema.Types.ObjectId, ref: "Bill" },
    amountPaid: Number,
    paymentMethod: {
      type: String,
      enum: ["CASH", "CARD", "UPI", "NETBANKING"],
    },
    transactionId: String,
    paymentStatus: {
      type: String,
      enum: ["SUCCESS", "FAILED", "PENDING"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
