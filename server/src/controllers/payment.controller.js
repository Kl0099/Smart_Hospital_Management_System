import Payment from "../models/payment.model.js";
import Bill from "../models/bill.model.js";

export const makePayment = async (req, res) => {
  const { bill, amountPaid, paymentMethod } = req.body;

  const payment = await Payment.create({
    bill,
    amountPaid,
    paymentMethod,
    paymentStatus: "SUCCESS"
  });

  await Bill.findByIdAndUpdate(bill, {
    status: "PAID"
  });

  res.status(201).json(payment);
};

export const getPayments = async (req, res) => {
  const payments = await Payment.find().populate("bill");
  res.json(payments);
};
